import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p style={styles.text}>
          © {new Date().getFullYear()} LegalDocs & Trademark Services China.
          <br />
          Your one-stop shop for downloadable legal document templates and expert trademark services.
        </p>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    background: '#f2f2f2',
    padding: '0',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
  },
  text: {
    margin: 0,
    color: '#333',
    fontSize: '0.9rem',
  },
};

export default Footer;