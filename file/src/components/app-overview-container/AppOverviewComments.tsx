import AppOverviewCommentItem from "./AppOverviewCommentItem";
import AppImage from "../../styles/assets/images/MockUp12.png";

export const AppOverviewComments = () => {
  return (
    <div className="app-overview-section__comments">
      <div className="app-overview-section__comments--list">
        <AppOverviewCommentItem iconPosition={"right"} />
        <AppOverviewCommentItem iconPosition={"left"} />
      </div>
      <img src={AppImage} className="app-confirm-logo" alt="logo" />
    </div>
  );
};

export default AppOverviewComments;
