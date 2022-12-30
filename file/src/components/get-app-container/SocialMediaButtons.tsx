import GooglePlayIcon from "../../styles/assets/icons/PlayStore.png";
import iOSIcon from "../../styles/assets/icons/AppStore.png";

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
    <GetAppOniOSButton />
    <GetAppOnGooglePlayButton />
  </div>
);

export default SocialMediaButtons;
