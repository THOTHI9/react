import CitiesDark from "../../styles/assets/icons/cities_dark.png";
import CitiesLight from "../../styles/assets/icons/cities_light.png";
import ClinicsDark from "../../styles/assets/icons/clinic_dark.png";
import ClinicsLight from "../../styles/assets/icons/clinic_light.png";
import PeopleDark from "../../styles/assets/icons/people_dark.png";
import PeopleLight from "../../styles/assets/icons/people_light.png";

interface AppOverviewFeaturesProps {
  theme: String;
}

export const AppOverviewFeatures = ({ theme }: AppOverviewFeaturesProps) => {
  return (
    <div className="app-overview-section__features">
      <div className="app-overview-section__features--item">
        {theme === "light" ? (
          <img src={CitiesDark} className="cities-logo" alt="logo" />
        ) : (
          <img src={CitiesLight} className="cities-logo" alt="logo" />
        )}
        <span>50 cities</span>
      </div>
      <div className="app-overview-section__features--item">
        {theme === "light" ? (
          <img src={ClinicsDark} className="clinics-logo" alt="logo" />
        ) : (
          <img src={ClinicsLight} className="clinics-logo" alt="logo" />
        )}
        <span>60 clinics</span>
      </div>
      <div className="app-overview-section__features--item">
        {theme === "light" ? (
          <img src={PeopleDark} className="patients-logo" alt="logo" />
        ) : (
          <img src={PeopleLight} className="patients-logo" alt="logo" />
        )}
        <span>1 Lakh Patients</span>
      </div>
    </div>
  );
};

export default AppOverviewFeatures;
