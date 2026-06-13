function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={`section-heading ${center ? "section-heading-center" : ""}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <span aria-hidden="true" />
    </div>
  );
}

export default SectionTitle;
