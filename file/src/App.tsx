import { useState } from "react";
import "./styles/styles.scss";
import Header from "./components/header/Header";
import Logo from "./components/header/Logo";
import SocialMediaContainer from "./components/media-container/SocialMediaContainer";
import GetAppLinkContainer from "./components/get-app-container/GetAppLinkContainer";
import AppOverviewContainer from "./components/app-overview-container/AppOverviewContainer";
import Footer from "./components/footer/Footer";
import ToggleSwitchButton from "./components/header/ToggleSwitchButton";
import DesktopImage from "./styles/assets/images/desktop_image.jpg";

const App = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChange = (themeType: string) => {
    setTheme(themeType);
  };

  let isMobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    isMobile = true;
  } else {
    // false for not mobile device
    isMobile = false;
  }

  if (!isMobile) {
    return (
      <div
        style={{
          backgroundImage: `url(${DesktopImage})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      ></div>
    );
  }

  return (
    <div className={`App ${theme}`}>
      <ToggleSwitchButton theme={theme} onThemeChange={onThemeChange} />
      <Logo theme={theme} />
      <Header theme={theme} />
      <SocialMediaContainer theme={theme} />
      <GetAppLinkContainer theme={theme} />
      <AppOverviewContainer theme={theme} />
      <Footer />
    </div>
  );
};

export default App;
