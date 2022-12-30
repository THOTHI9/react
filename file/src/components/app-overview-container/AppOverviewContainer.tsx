import Card from "../../shared/Card";
import AppOverviewComments from "./AppOverviewComments";
import AppOverviewDetails from "./AppOverviewDetails";
import AppOverviewFeatures from "./AppOverviewFeatures";

interface AppOverviewProps {
  theme: String;
}

export const AppOverviewContainer = ({ theme }: AppOverviewProps) => {
  return (
    <Card classes={`app-overview-section ${theme}`}>
      <AppOverviewFeatures theme={theme} />
      <AppOverviewDetails />
      <AppOverviewComments />
    </Card>
  );
};

export default AppOverviewContainer;
