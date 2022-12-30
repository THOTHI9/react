import Button from "../../shared/Button";
import GooglePlayIcon from "../../styles/assets/icons/PlayStore.png";
import iOSIcon from "../../styles/assets/icons/AppStore.png";

const handleGetAppLinkClick = () => {
  const elem = document.getElementById("app-link-section");
  if (elem != null) {
    const appLinkSectionOffsetTop: number = elem.offsetTop;
    window.scrollTo(0, appLinkSectionOffsetTop - 120);
  }
};

const GetAppLinkButton = () => (
  <Button classes={"get-app-button"} onClick={handleGetAppLinkClick}>
    GET APP LINK
  </Button>
);

const GetAppOnGooglePlayButton = () => (
  <a href="https://play.google.com/store/apps/details?id=com.doctor_dentist.app">
    <img src={GooglePlayIcon} alt="Google Play Store logo" />
  </a>
);

const GetAppOniOSButton = () => (
  <a href="/">
    <img src={iOSIcon} alt="iOS Logo" />
  </a>
);

export const SocialMediaButtons = () => (
  <div className="social-media-buttons">
    <GetAppLinkButton />
    <GetAppOnGooglePlayButton />
    <GetAppOniOSButton />
  </div>
);

export default SocialMediaButtons;
