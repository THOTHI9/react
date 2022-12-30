import Card from "../../shared/Card";
import AppPreview from "./AppPreview";
import SocialMediaButtons from "./SocialMediaButtons";

interface SocialMediaProps {
  theme: String;
}

export const SocialMediaContainer = ({ theme }: SocialMediaProps) => (
  <Card classes={`social-media-section ${theme}`}>
    <SocialMediaButtons />
    <AppPreview />
  </Card>
);

export default SocialMediaContainer;
