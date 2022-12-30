import PersonIcon from "../../styles/assets/icons/person_icon.svg";

interface AppOverviewCommentItemProps {
  iconPosition: String;
}

export const AppOverviewCommentItem = ({
  iconPosition,
}: AppOverviewCommentItemProps) => {
  return (
    <div className="app-overview-comments-item">
      <div className={`app-overview-comments-item__person ${iconPosition}`}>
        <img src={PersonIcon} className="person-logo" alt="logo" />
      </div>
      <div className={`app-overview-comments-item__box ${iconPosition}`}>
        {iconPosition === "right"
          ? "This app is a real game changer. Instant top quality health consultancy with prompt support 24*7. You will feel totally assure of high quality."
          : "I never expected to get relief so quickly, but they fully supported throughout and their treatment was just superb. I recommend everyone."}
      </div>
    </div>
  );
};

export default AppOverviewCommentItem;
