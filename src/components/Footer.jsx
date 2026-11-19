import { useNavigate, useLocation } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Learning', href: '#learning' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container" style={{ position: 'relative' }}>
        <div className="footer__brand">
          {profile.brandName}
          <span className="logo-dot">.</span>
        </div>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          maxWidth: '480px',
          margin: '0 auto 1.5rem',
          lineHeight: '1.6'
        }}>
          {profile.positioning} &bull; {profile.education.institution}
        </p>

        {/* Quick Footer Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__copy">
          &copy; {new Date().getFullYear()} {profile.fullName}. Designed &amp; Engineered for High-Performance Web &amp; AI Systems.
        </div>

        {/* Return to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          data-magnetic
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(196, 0, 36, 0.1)',
            border: '1px solid rgba(196, 0, 36, 0.2)',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition)',
          }}
        >
          <FaChevronUp size={14} />
        </button>
      </div>
    </footer>
  );
}
