import Card from "../../shared/Card";
import GetAppLinkForm from "./GetAppLinkForm";
import SocialMediaButtons from "./SocialMediaButtons";

interface GetAppLinkProps {
  theme: String;
}

export const GetAppLinkContainer = ({ theme }: GetAppLinkProps) => {
  return (
    <Card id="app-link-section" classes={`app-link-section ${theme}`}>
      <h3 className="app-link-section__title">GET APP LINK INSTANTLY</h3>
      <GetAppLinkForm />
      <SocialMediaButtons />
    </Card>
  );
};

export default GetAppLinkContainer;
