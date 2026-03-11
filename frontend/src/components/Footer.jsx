import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>Copyright {new Date().getFullYear()} © Technotree Australia</p>
        </div>

        <div className="footer-center">
          <p>sales@technotree.com.au</p>
        </div>

        <div className="footer-right">
          <p>5 Goods Street, Parramatta, NSW, AUSTRALIA - 2150</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;