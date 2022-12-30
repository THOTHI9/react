import Card from "../../shared/Card";

interface HeaderProps {
  theme: String;
}

export const Header = ({ theme }: HeaderProps) => (
  <Card classes={`header-section ${theme}`}>
    <header className="header">
      <h2 className="header__content">
        Serving Generations Of People With
        <br />
        <span>Quality Healthcare.</span>
      </h2>
      <div className="header__desc">
        An unmatched quality healthcare serving in 75+ cities which has been
        trusted and providing hassle free 1-click service through clinic, phone,
        video and in-house assistance.
      </div>
    </header>
  </Card>
);

export default Header;
