import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & SMS Terms",
  description: "Read the Jusi H2O privacy policy. Learn how we collect, use, and protect your personal information including SMS/text messaging data and website cookies.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle="Last updated: March 11, 2026"
        backgroundImage="/images/mom-child-washing.jpeg"
        overlayOpacity={0.85}
      />
      <section className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 prose prose-lg prose-headings:font-heading prose-headings:text-text prose-p:text-text-secondary prose-li:text-text-secondary prose-a:text-primary hover:prose-a:text-primary-dark">
          <h2>1. Introduction</h2>
          <p>
            Jusi H2O (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us, including through SMS/text messaging.
          </p>
          <p>
            By using our website or services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect personal information when you:</p>
          <ul>
            <li>Fill out a contact form or request a free water test</li>
            <li>Subscribe to our SMS/text messaging service</li>
            <li>Contact us by phone, email, or through our website</li>
            <li>Request information about our products or services</li>
          </ul>
          <p>The types of personal information we collect include: name, email address, phone number, and mailing address.</p>

          <h3>SMS/Text Messaging Data</h3>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. We collect your name and mobile phone number when you sign up for SMS updates.
          </p>
          <p>When you opt in to our SMS program, we collect:</p>
          <ul>
            <li>Your mobile phone number</li>
            <li>Date and time of consent</li>
            <li>Records of the opt-in method (web form, keyword opt-in, etc.)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Respond to your inquiries and schedule appointments</li>
            <li>Send you service-related communications</li>
            <li>Improve our website and customer experience</li>
          </ul>

          <h3>SMS/Text Messaging Use</h3>
          <p>
            We use your data solely for sending updates, promotions, appointment reminders, and service-related notifications related to our water treatment products and services. Message types include:
          </p>
          <ul>
            <li>Appointment confirmations and reminders</li>
            <li>Service updates and follow-ups</li>
            <li>Promotional offers</li>
            <li>Account and service notifications</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We protect your data through encryption and secure storage measures to prevent unauthorized access. While no method of electronic transmission or storage is 100% secure, we strive to use commercially acceptable means to protect your personal information.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your information as long as you are subscribed to our SMS service or as needed to provide you with our services. You may request deletion of your data at any time by contacting us.
          </p>

          <h2>6. Information Sharing and Disclosure</h2>
          <p>
            Mobile numbers and opt-in consent data will NOT be shared with any third parties or affiliates for marketing purposes.
          </p>
          <p>
            We may share mobile numbers and opt-in data only with subcontractors or service providers under strict confidentiality, and only to support customer service, delivery, or technical operations of our SMS program.
          </p>
          <p>
            All text-messaging originator opt-in records and associated consent are kept private and will never be transferred to third-party marketers.
          </p>

          <h2>7. Your Rights and Choices</h2>
          <h3>Opting Out of SMS</h3>
          <p>You can opt out of our SMS program at any time by:</p>
          <ul>
            <li>Replying <strong>STOP</strong>, <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, or <strong>QUIT</strong> to any SMS message</li>
            <li>Emailing <a href="mailto:support@jusih2o.com">support@jusih2o.com</a></li>
            <li>Calling <a href="tel:+18133030515">(813) 303-0515</a></li>
          </ul>
          <p>
            After opting out, you will receive one final confirmation message. No further messages will be sent unless you re-subscribe.
          </p>

          <h2>8. California Privacy Rights (CCPA)</h2>
          <p>If you are a California resident, you have the right to:</p>
          <ul>
            <li>Know what personal information we collect about you</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of the sale of your personal information</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2>10. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to improve your browsing experience. You can control cookie preferences through your browser settings.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <ul>
            <li>Email: <a href="mailto:support@jusih2o.com">support@jusih2o.com</a></li>
            <li>Phone: <a href="tel:+18133030515">(813) 303-0515</a></li>
            <li>Address: Tampa Bay, FL</li>
          </ul>
        </div>
      </section>
    </>
  );
}
