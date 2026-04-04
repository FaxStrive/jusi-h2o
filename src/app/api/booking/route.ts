import { NextResponse } from 'next/server'

const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const LOCATION_ID = '23Jh4OLG8JDXOg24vnei'
const PIPELINE_ID = 'gBvhe3hdfgN9W9V90CMD'
const PIPELINE_STAGE_ID = '5ac8e933-257a-4b9d-b8b2-e3ddb8a91969'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GHL_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, service } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    const nameParts = name.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    const headers: Record<string, string> = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28',
    }

    // Step 1: Create Contact
    const contactRes = await fetch(`${GHL_BASE_URL}/contacts/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        locationId: LOCATION_ID,
        source: 'Website',
        tags: service ? [service] : [],
      }),
      cache: 'no-store',
    })

    if (!contactRes.ok) {
      const errorData = await contactRes.text()
      console.error('GHL Create Contact failed:', contactRes.status, errorData)
      return NextResponse.json(
        { error: 'Failed to create contact' },
        { status: 502 }
      )
    }

    const contactData = await contactRes.json()
    const contactId = contactData.contact?.id

    if (!contactId) {
      console.error('GHL Contact response missing ID:', contactData)
      return NextResponse.json(
        { error: 'Failed to create contact' },
        { status: 502 }
      )
    }

    // Step 2: Create Opportunity
    const opportunityRes = await fetch(`${GHL_BASE_URL}/opportunities/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        pipelineId: PIPELINE_ID,
        locationId: LOCATION_ID,
        name: `${name} - Website Booking`,
        pipelineStageId: PIPELINE_STAGE_ID,
        contactId,
        source: 'Website',
        status: 'open',
      }),
      cache: 'no-store',
    })

    if (!opportunityRes.ok) {
      const errorData = await opportunityRes.text()
      console.error('GHL Create Opportunity failed:', opportunityRes.status, errorData)
    }

    return NextResponse.json({ success: true, contactId })
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
