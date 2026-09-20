import { useState, useEffect } from 'react';
import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }

      if (isOpen) {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % portfolio.navigation.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + portfolio.navigation.length) % portfolio.navigation.length);
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          const selected = portfolio.navigation[selectedIndex];
          if (selected) {
            window.location.href = selected.href;
            setIsOpen(false);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex]);

  if (!isOpen) return null;

  const handleNavigate = (href) => {
    window.location.href = href;
    setIsOpen(false);
  };

  return (
    <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <div className="command-palette-header">
          <h3>Quick Navigation</h3>
          <p className="command-palette-hint">Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to close</p>
        </div>
        <div className="command-palette-list">
          {portfolio.navigation.map((item, index) => (
            <button
              key={item.href}
              className={`command-palette-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleNavigate(item.href)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="command-palette-item-label">{item.label}</span>
              <span className="command-palette-item-shortcut">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
