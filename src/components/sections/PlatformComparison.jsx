import { FaCheck, FaMinus, FaTimes } from "react-icons/fa";
import { getComparisonRows } from "../../controllers/solutionController";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function StatusIcon({ value }) {
  if (value === true) return <FaCheck className="status-ok" aria-label="Available" />;
  if (value === "partial") return <FaMinus className="status-partial" aria-label="Partial" />;
  return <FaTimes className="status-no" aria-label="Not available" />;
}

function PlatformComparison() {
  const rows = getComparisonRows();
  const platforms = ["Android MDM", "White Label", "Web Dev", "App Dev"];

  return (
    <section className="section" id="comparison">
      <Container>
        <SectionTitle title="Platform Comparison" />
        <div className="comparison-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                {platforms.map((platform) => (
                  <th key={platform}>{platform}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, ...values]) => (
                <tr key={feature}>
                  <td>{feature}</td>
                  {values.map((value, index) => (
                    <td key={`${feature}-${platforms[index]}`}>
                      <StatusIcon value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export default PlatformComparison;
