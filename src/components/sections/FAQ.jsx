import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getFaqs } from "../../controllers/faqController";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function FAQ() {
  const faqs = getFaqs();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section section-muted faq-section" id="faq">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about Zplus Lock."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openIndex === index ? "is-open" : ""}`} key={faq.question}>
              <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.question}
                <FaChevronDown />
              </button>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
