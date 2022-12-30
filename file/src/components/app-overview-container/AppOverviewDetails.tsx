import AppOverviewDetailsImage from "../../styles/assets/images/MockUp11.png";

export const AppOverviewDetails = () => {
  return (
    <div className="app-overview-section__details">
      <img
        src={AppOverviewDetailsImage}
        className="app-details-logo"
        alt="logo"
      />
      <div className="app-overview-section__details--list">
        <h3>Problem Name</h3>
        <div className="app-overview-section__details--list-item">
          Dental Implants
        </div>
        <div className="app-overview-section__details--list-item">
          Root Canal
        </div>
        <div className="app-overview-section__details--list-item">
          Child Teeth
        </div>
        <div className="app-overview-section__details--list-item">
          Cavity Fillings
        </div>
        <div className="app-overview-section__details--list-item">
          Gum Surgery
        </div>
        <div className="app-overview-section__details--list-item">Bridges</div>
      </div>
    </div>
  );
};

export default AppOverviewDetails;
