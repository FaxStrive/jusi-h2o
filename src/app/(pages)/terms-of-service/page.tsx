import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Jusi H2O terms of service. Review our terms including SMS/text messaging program details, opt-out instructions, and usage policies.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Terms of Service"
        subtitle="Last updated: March 11, 2026"
        backgroundImage="/images/mom-child-washing.jpeg"
        overlayOpacity={0.85}
      />
      <section className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-secondary-50/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 prose prose-lg prose-headings:font-heading prose-headings:text-text prose-p:text-text-secondary prose-li:text-text-secondary prose-a:text-primary hover:prose-a:text-primary-dark">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Jusi H2O website and services, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
          </p>

          <h2>2. Age Requirement</h2>
          <p>
            You must be at least 18 years of age to use our website, services, or SMS/text messaging program. By using our services, you represent and warrant that you are at least 18 years old.
          </p>

          <h2>3. Services</h2>
          <p>
            Jusi H2O provides professional water testing, water filtration, water softening, reverse osmosis, water heater installation, leak repair, and related plumbing services to residential and commercial customers in the Tampa Bay area.
          </p>

          <h2>4. Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others. You may not:</p>
          <ul>
            <li>Use the website in any way that could damage, disable, or impair the site</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use any automated system to access the website without our permission</li>
          </ul>

          <h2>5. SMS/Text Messaging Terms</h2>

          <h3>5.1 Program Description</h3>
          <p>
            By opting in to our SMS program, you may receive: appointment confirmations, service updates, promotional offers, water quality information, and follow-up messages regarding our water treatment services.
          </p>

          <h3>5.2 Message Frequency</h3>
          <p>
            Message frequency varies based on your interactions with us and your service needs. You can expect approximately 4-8 messages per month.
          </p>

          <h3>5.3 Opt-Out Instructions</h3>
          <p>
            You can cancel the SMS service at any time. Just text <strong>STOP</strong> to <a href="tel:8133030515">(813) 303-0515</a> or reply <strong>STOP</strong> to any message you receive from us.
          </p>
          <p>
            After you send the SMS message &quot;STOP&quot; to us, you will receive one final SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
          </p>
          <p>
            We also accept the following opt-out keywords: <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, <strong>QUIT</strong>, or any other reasonable opt-out request.
          </p>

          <h3>5.4 Help Instructions</h3>
          <p>
            If you are experiencing issues with the messaging program, you can reply with the keyword <strong>HELP</strong> for more assistance, or you can get help directly at:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@jusih2o.com">support@jusih2o.com</a></li>
            <li>Phone: <a href="tel:8133030515">(813) 303-0515</a></li>
          </ul>

          <h3>5.5 Message and Data Rates</h3>
          <p>
            Message and data rates may apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, contact your wireless provider.
          </p>

          <h3>5.6 Carrier Liability</h3>
          <p>
            Carriers are not liable for delayed or undelivered messages. We and wireless carriers are not responsible for any delays in the delivery of messages or for any errors in the content of messages.
          </p>

          <h3>5.7 Supported Carriers</h3>
          <p>
            Our SMS program is compatible with major carriers including: AT&T, Verizon Wireless, T-Mobile, Sprint, U.S. Cellular, Cricket Wireless, MetroPCS, Boost Mobile, Virgin Mobile, Alltel, and other major carriers.
          </p>

          <h3>5.8 Privacy</h3>
          <p>
            Your mobile phone number and opt-in consent data will not be shared with third parties for marketing purposes. For full details, please review our <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of Jusi H2O and is protected by copyright and trademark laws.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Jusi H2O shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
          </p>

          <h2>8. Warranty Disclaimer</h2>
          <p>
            Our website and services are provided &quot;as is&quot; without warranties of any kind, either express or implied. Specific product and service warranties are provided separately at the time of purchase or installation.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website constitutes acceptance of the revised terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about these Terms of Service, contact us at:</p>
          <ul>
            <li>Email: <a href="mailto:support@jusih2o.com">support@jusih2o.com</a></li>
            <li>Phone: <a href="tel:8133030515">(813) 303-0515</a></li>
            <li>Address: Tampa Bay, FL</li>
          </ul>
        </div>
      </section>
    </>
  );
}
