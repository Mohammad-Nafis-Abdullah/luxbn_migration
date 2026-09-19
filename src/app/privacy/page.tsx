import type { ReactNode } from "react";

const COMPANY = "Luxbn Ltd";
const ADDRESS = "G13A, Manchester Business Park, Manchester, M22 5TG, United Kingdom";
const EMAIL = "mdsac@luxbn.com";
const PHONE_DISPLAY = "+44 7352 991215";
const PHONE_HREF = "tel:+447352991215";
const DPO_NAME = "Monjur E Alahi Chowdhury";
const DPO_EMAIL = "Monjur1000980@gmail.com";

const linkClass = "text-red-600 underline";

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
            <div className="space-y-3">{children}</div>
        </section>
    );
}

function List({ items }: { items: ReactNode[] }) {
    return (
        <ul className="list-disc pl-5 space-y-1">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

function Table({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left">{head[0]}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">{head[1]}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([a, b]) => (
                        <tr key={a}>
                            <td className="border border-gray-300 px-3 py-2 align-top">{a}</td>
                            <td className="border border-gray-300 px-3 py-2 align-top">{b}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-4xl mx-auto px-5 md:px-10 py-10 md:py-16">
                <h1 className="text-3xl font-bold text-red-600 mb-2">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last updated: 19 September 2026</p>

                <div className="space-y-8 text-gray-800 leading-relaxed">
                    <div className="space-y-3">
                        <p>
                            This Privacy Policy explains how {COMPANY} (“the Company”, “we”,
                            “our”, or “us”) collects, uses, shares, and protects your personal
                            data when you visit our website, contact us, or use our migration
                            and education counselling services. It also explains your rights
                            under the UK General Data Protection Regulation (UK GDPR) and the
                            Data Protection Act 2018.
                        </p>
                        <p>
                            We are committed to handling your personal data fairly, lawfully,
                            and transparently.
                        </p>
                    </div>

                    <Section title="1. Who We Are">
                        <p>
                            {COMPANY}
                            <br />
                            {ADDRESS}
                            <br />
                            Email:{" "}
                            <a href={`mailto:${EMAIL}`} className={linkClass}>
                                {EMAIL}
                            </a>
                            <br />
                            Phone:{" "}
                            <a href={PHONE_HREF} className={linkClass}>
                                {PHONE_DISPLAY}
                            </a>
                        </p>
                        <p>
                            We are the data controller for the personal data described in this
                            policy, unless otherwise stated. This means we decide how and why
                            your personal data is processed.
                        </p>
                    </Section>

                    <Section title="2. Data Protection Officer">
                        <p>
                            We have appointed a Data Protection Officer (DPO) who is
                            responsible for overseeing our approach to data protection and for
                            answering any questions about this Privacy Policy or how we handle
                            your personal data.
                        </p>
                        <p>
                            Data Protection Officer: {DPO_NAME}
                            <br />
                            Email:{" "}
                            <a href={`mailto:${DPO_EMAIL}`} className={linkClass}>
                                {DPO_EMAIL}
                            </a>
                            <br />
                            Postal address: Data Protection Officer, {COMPANY}, {ADDRESS}
                        </p>
                        <p>
                            If you have any questions or concerns about how we use your
                            personal data, please contact our DPO in the first instance.
                        </p>
                    </Section>

                    <Section title="3. What Personal Data We Collect">
                        <p>We may collect and process the following categories of personal data:</p>
                        <List
                            items={[
                                <><strong>Identity Data:</strong> first name and last name.</>,
                                <><strong>Contact Data:</strong> email address, phone number, and postal address.</>,
                                <><strong>Application Data:</strong> academic and background information, and documents you provide for counselling, university or scholarship applications, or visa and migration assistance.</>,
                                <><strong>Technical Data:</strong> IP address, browser type and version, device identifiers, operating system, and data collected through cookies and similar technologies.</>,
                                <><strong>Usage Data:</strong> pages visited, time spent on the website, and navigation paths.</>,
                                <><strong>Social Media Data:</strong> if you choose to contact us or log in through a social media account (such as Google, Facebook, or X/Twitter), we may receive your name, email address, and basic profile information from that provider.</>,
                                <><strong>Transactional Data:</strong> records of services you have requested or purchased from us.</>,
                            ]}
                        />
                        <p>
                            We do not intentionally collect special category data (such as data
                            about your health, ethnicity, or religion) through our website. If
                            you send us such information voluntarily and unsolicited, we will
                            delete it unless a specific condition under Article 9 UK GDPR (such
                            as your explicit consent, or the establishment, exercise, or
                            defence of legal claims) allows us to retain it and retention is
                            necessary.
                        </p>
                    </Section>

                    <Section title="4. How We Collect Your Data">
                        <p>We collect personal data from the following sources:</p>
                        <List
                            items={[
                                <><strong>Directly from you</strong> – when you complete forms on our website, contact us by email or phone, subscribe to updates, or otherwise interact with us.</>,
                                <><strong>From social media authentication providers</strong> – where you choose to log in, register, or contact us using a social media account, that provider shares certain profile information with us in line with your settings on their platform.</>,
                                <><strong>Automatically through our website</strong> – technical and usage data is collected through cookies, server logs, and similar technologies when you browse our website (see Section 13).</>,
                            ]}
                        />
                        <p>We do not purchase personal data from third-party marketing list providers.</p>
                    </Section>

                    <Section title="5. Legal Bases for Processing">
                        <p>
                            We only process your personal data where we have a valid legal
                            basis under UK GDPR. Depending on the circumstances, we rely on:
                        </p>
                        <List
                            items={[
                                <><strong>Contract</strong> – where processing is necessary to provide services you have requested or to take steps at your request before entering into a contract.</>,
                                <><strong>Consent</strong> – where you have agreed to the processing, for example receiving marketing communications or accepting optional cookies. You can withdraw your consent at any time.</>,
                                <><strong>Legitimate Interests</strong> – where processing is necessary for our legitimate business interests, provided these are not overridden by your rights and freedoms. Our legitimate interests include maintaining the security of our website, preventing fraud and misuse, responding to enquiries, understanding how our website is used, and improving our services. We have assessed these interests and balanced them against your rights and freedoms, and we do not use legitimate interests where the impact on you would be unfair or unexpected.</>,
                                <><strong>Legal Obligation</strong> – where processing is necessary to comply with laws and regulations that apply to us, such as accounting, tax, and regulatory requirements.</>,
                            ]}
                        />
                    </Section>

                    <Section title="6. How We Use Your Data">
                        <p>
                            The table below summarises the purposes for which we use your
                            personal data and the legal basis we rely on for each purpose:
                        </p>
                        <Table
                            head={["Purpose", "Legal Basis"]}
                            rows={[
                                ["Delivering the services you request and managing your account", "Contract"],
                                ["Processing university, scholarship, or visa applications on your behalf, where instructed", "Contract"],
                                ["Responding to your enquiries and requests", "Legitimate interests / Contract"],
                                ["Operating, maintaining, and improving our website and services", "Legitimate interests"],
                                ["Sending marketing communications, updates, and offers", "Consent (you may opt out at any time)"],
                                ["Monitoring website performance and detecting security threats or fraud", "Legitimate interests"],
                                ["Keeping business and financial records", "Legal obligation"],
                                ["Complying with legal and regulatory obligations", "Legal obligation"],
                            ]}
                        />
                        <p>
                            We will only use your personal data for the purposes for which we
                            collected it, unless we reasonably consider that we need to use it
                            for another compatible reason. If we need to use your data for an
                            unrelated purpose, we will notify you and explain the legal basis
                            that allows us to do so.
                        </p>
                    </Section>

                    <Section title="7. If You Do Not Provide Your Data">
                        <p>
                            You are not obliged to provide personal data to us. However, where
                            personal data is required for us to provide our services or respond
                            to your request – for example, contact details needed to reply to
                            an enquiry, or academic details needed to process an application –
                            failure to provide that data may mean we are unable to fulfil your
                            request or provide the service. Where this is the case, we will
                            tell you at the time.
                        </p>
                    </Section>

                    <Section title="8. Automated Decision-Making and Profiling">
                        <p>
                            We do not carry out automated decision-making or profiling that
                            produces legal effects or similarly significant effects on
                            individuals. If this changes in the future, we will update this
                            policy and provide you with the information required by law,
                            including your right to request human intervention.
                        </p>
                    </Section>

                    <Section title="9. Who We Share Your Data With">
                        <p>We may share your personal data with the following categories of recipients:</p>
                        <List
                            items={[
                                <><strong>Service providers</strong> who process data on our behalf under contract, including our website hosting provider, IT support providers, cloud storage providers (for example, Microsoft 365 or Google Workspace), our enquiry-form and email delivery provider (EmailJS), customer relationship management (CRM) systems, and email marketing platforms.</>,
                                <><strong>Analytics providers</strong>, such as Google Analytics where used, which help us understand how visitors use our website (see Section 13 on cookies).</>,
                                <><strong>Partner universities, colleges, and institutions</strong>, and visa or immigration authorities, where necessary to process an application you have asked us to make.</>,
                                <><strong>Professional advisers</strong>, including accountants, auditors, lawyers, and insurers, where reasonably necessary.</>,
                                <><strong>Business partners</strong> where you have specifically requested services delivered jointly with a partner. We will make this clear to you at the time.</>,
                                <><strong>Regulators and public authorities</strong>, such as HMRC or the Information Commissioner’s Office, where we are legally required to do so.</>,
                            ]}
                        />
                        <p>
                            All third-party service providers acting on our behalf are required
                            to process your personal data only on our instructions, under
                            written contracts, and with appropriate security measures in place.
                        </p>
                        <p>We do not sell your personal data.</p>
                    </Section>

                    <Section title="10. International Transfers">
                        <p>
                            Some of our service providers – including cloud storage, email
                            delivery, analytics, and social media authentication providers –
                            are based outside the United Kingdom or store data on servers
                            located outside the UK, including in the United States. In
                            addition, when you ask us to apply to a university or institution
                            overseas, your data will be sent to that organisation. This means
                            your personal data may be transferred outside the UK.
                        </p>
                        <p>
                            Whenever we transfer your personal data outside the UK, we ensure a
                            similar degree of protection is afforded to it by using at least
                            one of the following safeguards:
                        </p>
                        <List
                            items={[
                                <><strong>Adequacy regulations</strong> – transfers to countries that the UK Government has determined provide an adequate level of protection for personal data (for example, transfers to the United States under the UK–US Data Bridge, where the recipient is certified).</>,
                                <><strong>International Data Transfer Agreement (IDTA) or the UK Addendum to the European Commission’s Standard Contractual Clauses</strong> – contractual terms approved by the UK Government that give personal data the same protection it has in the UK.</>,
                                <><strong>Additional safeguards</strong> – where appropriate, we apply supplementary measures such as encryption and data minimisation.</>,
                            ]}
                        />
                        <p>
                            Where a transfer is necessary to carry out an application at your
                            request, we will rely on your explicit request or the performance
                            of our contract with you. You may contact our DPO for further
                            information on the specific safeguards applied to any transfer of
                            your personal data outside the UK, including a copy of the relevant
                            safeguard where applicable.
                        </p>
                    </Section>

                    <Section title="11. Data Retention">
                        <p>
                            We keep your personal data only for as long as necessary to fulfil
                            the purposes we collected it for, including legal, accounting, and
                            reporting requirements. Our standard retention periods are:
                        </p>
                        <Table
                            head={["Data Category", "Retention Period"]}
                            rows={[
                                ["Account and contractual data", "Up to 6 years after the end of our relationship, in line with legal and accounting requirements"],
                                ["Marketing data", "Until you withdraw consent or unsubscribe"],
                                ["Enquiry records (no ongoing relationship)", "Up to 2 years from last contact"],
                                ["Usage and technical data", "Usually no longer than 2 years, unless needed for security or compliance"],
                            ]}
                        />
                        <p>When personal data is no longer required, we securely delete or anonymise it.</p>
                    </Section>

                    <Section title="12. Your Rights">
                        <p>Under UK data protection law, you have the following rights:</p>
                        <List
                            items={[
                                <><strong>Access</strong> – request a copy of the personal data we hold about you.</>,
                                <><strong>Rectification</strong> – ask us to correct inaccurate or incomplete data.</>,
                                <><strong>Erasure</strong> – ask us to delete your data (the “right to be forgotten”), in certain circumstances.</>,
                                <><strong>Restriction</strong> – ask us to limit how we use your data, in certain circumstances.</>,
                                <><strong>Data portability</strong> – receive the data you provided to us in a structured, commonly used, machine-readable format.</>,
                                <><strong>Objection</strong> – object to processing based on legitimate interests, and to direct marketing at any time.</>,
                                <><strong>Withdraw consent</strong> – at any time, where consent is the legal basis. This does not affect the lawfulness of processing before withdrawal.</>,
                            ]}
                        />
                        <p>
                            To exercise any of these rights, contact our Data Protection
                            Officer at{" "}
                            <a href={`mailto:${DPO_EMAIL}`} className={linkClass}>
                                {DPO_EMAIL}
                            </a>{" "}
                            or by post at the address in Section 2. We will respond within one
                            month. We will not charge a fee unless your request is manifestly
                            unfounded or excessive, and we may need to verify your identity
                            before acting on your request.
                        </p>
                        <p>
                            If you are unhappy with how we have handled your data or responded
                            to your request, you have the right to complain to the Information
                            Commissioner’s Office (ICO):
                        </p>
                        <p>
                            Website:{" "}
                            <a
                                href="https://www.ico.org.uk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                www.ico.org.uk
                            </a>
                            <br />
                            Telephone: 0303 123 1113
                            <br />
                            Post: Information Commissioner’s Office, Wycliffe House, Water Lane,
                            Wilmslow, Cheshire, SK9 5AF
                        </p>
                        <p>
                            We would appreciate the opportunity to address your concerns before
                            you approach the ICO, so please contact us first.
                        </p>
                    </Section>

                    <Section title="13. Cookies and Tracking Technologies">
                        <p>
                            We may use cookies and similar technologies on our website. Cookies
                            are small text files placed on your device that help websites
                            function and provide information to site owners. The categories we
                            may use are:
                        </p>
                        <List
                            items={[
                                <><strong>Essential cookies</strong> – required for the website to operate (for example, security settings). These do not require consent.</>,
                                <><strong>Functional cookies</strong> – remember your preferences and choices to improve your experience. Set only with your consent.</>,
                                <><strong>Analytics cookies</strong> – help us understand how visitors use our website, including through Google Analytics where used. Set only with your consent. Information collected is aggregated and used to improve the website.</>,
                                <><strong>Marketing cookies</strong> – used to personalise content and measure the effectiveness of our marketing. Set only with your consent.</>,
                            ]}
                        />
                        <p>
                            Where used, Google Analytics is provided by Google LLC. Google may
                            also process this information for its own purposes as described in
                            its privacy policy, available at{" "}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                https://policies.google.com/privacy
                            </a>
                            .
                        </p>
                        <p>
                            Where we use non-essential cookies, you can accept or reject them
                            when you first visit our website, and you can change your
                            preferences at any time through your browser settings. Blocking
                            some cookies may affect how the website functions.
                        </p>
                    </Section>

                    <Section title="14. Security">
                        <p>
                            We use appropriate technical and organisational measures to protect
                            your personal data against loss, misuse, unauthorised access,
                            alteration, and disclosure. These include access controls,
                            encryption where appropriate, staff awareness, and contractual
                            obligations on our service providers. While no system can be
                            guaranteed as completely secure, we regularly review and enhance
                            our safeguards. In the event of a personal data breach likely to
                            result in a high risk to your rights, we will notify you and the
                            ICO as required by law.
                        </p>
                    </Section>

                    <Section title="15. Children’s Privacy">
                        <p>
                            Our website and services are not directed at children under 13, and
                            we do not knowingly collect personal data from children. If you
                            believe we have collected personal data from a child, please contact
                            us and we will delete it.
                        </p>
                    </Section>

                    <Section title="16. Changes to This Policy">
                        <p>
                            We may update this Privacy Policy from time to time to reflect
                            changes in our practices or legal requirements. Changes will be
                            posted on this page with a revised “Last updated” date. Where
                            changes are significant, we will notify you by email or by a
                            prominent notice on our website.
                        </p>
                    </Section>

                    <Section title="17. Contact Us">
                        <p>For any privacy-related questions or to exercise your rights, please contact:</p>
                        <p>
                            {COMPANY}
                            <br />
                            Data Protection Officer: {DPO_NAME}
                            <br />
                            {ADDRESS}
                            <br />
                            Email:{" "}
                            <a href={`mailto:${DPO_EMAIL}`} className={linkClass}>
                                {DPO_EMAIL}
                            </a>{" "}
                            (or{" "}
                            <a href={`mailto:${EMAIL}`} className={linkClass}>
                                {EMAIL}
                            </a>{" "}
                            for general enquiries)
                            <br />
                            Phone:{" "}
                            <a href={PHONE_HREF} className={linkClass}>
                                {PHONE_DISPLAY}
                            </a>
                            <br />
                            Website:{" "}
                            <a href="/contact-us" className={linkClass}>
                                Contact us
                            </a>
                        </p>
                    </Section>
                </div>
            </main>
        </div>
    );
}
