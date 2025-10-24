import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, MobileIcon, FileTextIcon } from '@radix-ui/react-icons';
import './Footer.css';

interface FooterProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
  resumeUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  githubUrl = 'https://github.com/Monica-Lu',
  linkedinUrl = 'https://www.linkedin.com/in/qingyan-lu-b79913244/',
  email = 'monicalu1128@gmail.com',
  phone = '+1 (984) 837-3951',
  resumeUrl = '../assets/resume/Monica_Resume_PDF.pdf'
}) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <GitHubLogoIcon />
          </a>
          
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon />
          </a>
          
          <a
            href={`mailto:${email}`}
            className="social-icon"
            aria-label="Email"
          >
            <EnvelopeClosedIcon />
          </a>
          
          <a
            href={`tel:${phone}`}
            className="social-icon"
            aria-label="Phone"
          >
            <MobileIcon />
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Resume"
          >
            <FileTextIcon />
          </a>
        </div>

        <div className="footer-divider">
          <div className="footer-info">
            <p className="powered-by">
              Powered by{' '}
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Vite
              </a>
              {' '}and{' '}
              <a
                href="https://www.radix-ui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Radix UI
              </a>
            </p>
            
            <p className="copyright">
              © {new Date().getFullYear()} Qingyan Lu. License under MIT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;