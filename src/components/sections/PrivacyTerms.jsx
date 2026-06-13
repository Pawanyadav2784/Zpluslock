import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function PrivacyTerms() {
  return (
    <section className="section section-muted privacy-section" id="privacy">
      <Container>
        <SectionTitle title="Privacy Policy & Terms of Service" />
        <div className="policy-copy">
          <h3>Privacy Policy</h3>
          <p>
            Your privacy is important to us. At Zplus Lock, we are committed to protecting your
            personal information and ensuring your data is secure. This policy outlines how we
            collect, use, and safeguard your data when you use Zplus Lock.
          </p>
          <p>
            We collect personal data only when necessary and always with your consent. All
            information is encrypted and stored securely. We do not share your data with third
            parties without your permission, except as required by law.
          </p>
          <h3>Terms of Service</h3>
          <p>
            By using Zplus Lock, you agree to our terms of service. This includes responsible use
            of our software, respecting intellectual property rights, and adhering to our policies
            on data security and privacy.
          </p>
          <p>
            We reserve the right to update these terms at any time. Continued use of our services
            constitutes acceptance of any changes. Please review our terms regularly.
          </p>
          <h3>Data Protection</h3>
          <p>
            We follow industry-standard security protocols to protect your data from unauthorized
            access and breaches. Our systems are regularly audited, and we implement the latest
            encryption technologies.
          </p>
          <p>
            In the event of a data breach, we will notify affected users promptly and take all
            necessary steps to mitigate the impact. Your trust is our top priority.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default PrivacyTerms;
