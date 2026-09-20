import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Metrics() {
  return (
    <section className="section metrics">
      <div className="container">
        <div className="section-header">
          <p className="section-label">A Few Numbers</p>
        </div>

        <div className="metrics-grid">
          {portfolio.metrics.map((metric, index) => (
            <div key={index} className="metric">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
