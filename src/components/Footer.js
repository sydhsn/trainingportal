const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Concept Vision Training.</div>
    <div className="info">
      <p>
        Note: Online React Js, JavaScript Training classes.{' '}
        <a href="#">Learn online.</a>
      </p>
    </div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        margin-top: 80px;
        padding: 80px 30px;
      }
      .copyright {
        margin-bottom: 20px;
      }
      .info {
        color: #777;
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Footer;
