import '../styles/components.css';

export default function ProjectVisual({ type, number }) {
  const renderDataVisual = () => (
    <svg
      viewBox="0 0 200 120"
      className="project-visual-svg"
      aria-hidden="true"
    >
      <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="20" y1="20" x2="20" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <circle cx="40" cy="60" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="70" cy="40" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="50" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="130" cy="30" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="160" cy="45" r="4" fill="currentColor" opacity="0.4" />
      <line x1="40" y1="60" x2="70" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="70" y1="40" x2="100" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="50" x2="130" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="30" x2="160" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );

  const renderSystemVisual = () => (
    <svg
      viewBox="0 0 200 120"
      className="project-visual-svg"
      aria-hidden="true"
    >
      <rect x="20" y="20" width="160" height="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="20" y1="40" x2="180" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="20" y1="60" x2="180" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <polyline
        points="30,70 50,50 70,60 90,40 110,55 130,35 150,50 170,45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.8" />
      <circle cx="130" cy="35" r="3" fill="currentColor" opacity="0.8" />
    </svg>
  );

  const renderNetworkVisual = () => (
    <svg
      viewBox="0 0 200 120"
      className="project-visual-svg"
      aria-hidden="true"
    >
      <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <rect x="80" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <rect x="130" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="70" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="120" y1="50" x2="130" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="50" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="150" cy="50" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );

  const renderDocumentVisual = () => (
    <svg
      viewBox="0 0 200 120"
      className="project-visual-svg"
      aria-hidden="true"
    >
      <rect x="30" y="20" width="50" height="70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="90" y1="45" x2="120" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="120" y1="45" x2="140" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="140" y1="35" x2="160" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="160" y1="45" x2="170" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="170" cy="70" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );

  const getVisual = () => {
    switch (type) {
      case 'data':
        return renderDataVisual();
      case 'system':
        return renderSystemVisual();
      case 'network':
        return renderNetworkVisual();
      case 'document':
        return renderDocumentVisual();
      default:
        return renderDataVisual();
    }
  };

  return (
    <div className="project-visual">
      <span className="project-number">{number}</span>
      {getVisual()}
    </div>
  );
}
