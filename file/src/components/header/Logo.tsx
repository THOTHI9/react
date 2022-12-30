import Card from "../../shared/Card";
import LogoImage from "../../styles/assets/images/Logo.png";

interface LogoProps {
  theme: String;
}

const Logo = ({ theme }: LogoProps) => {
  return (
    <Card classes={`logo-section ${theme}`}>
      <div className="logo">
        <div className="logo__image">
          <img src={LogoImage} className="doctor-logo" alt="logo" />
        </div>
        <h2 className="logo__title">DOCTOR - DENTIST</h2>
      </div>
      <div className="logo-separator">
        <div className="logo-separator__line"></div>
        <div className="logo-separator__circle"></div>
      </div>
    </Card>
  );
};

export default Logo;
