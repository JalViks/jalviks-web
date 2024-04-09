import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-success text-light py-1 "> {/* Change background to tree green */}
      <Container>
        <div className="text-center">
          <p className="py-2 mb-0">
            Follow us on <a href="https://www.linkedin.com/company/jalviks/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Linkedin_circle.svg" alt="LinkedIn" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} /> {/* LinkedIn logo image */}
          </a>
          </p>
          <p className="mb-0">&copy; {new Date().getFullYear()} JalViks. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
