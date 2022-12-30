import Card from "../../shared/Card";
import FooterIcon from "../../styles/assets/images/doctors.png";

export const Footer = () => {
  return (
    <Card classes={"footer-section"}>
      <footer className="footer">
        <h1 className="footer__title">
          ONLY QUALITY <br />
          <span>HEALTHCARE.</span>
        </h1>
        <div className="logo-separator">
          <div className="logo-separator__line"></div>
          <div className="logo-separator__circle"></div>
        </div>
        <img src={FooterIcon} className="doctor-logo" alt="logo" />
      </footer>
    </Card>
  );
};

export default Footer;
