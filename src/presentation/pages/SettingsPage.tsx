import MasterComponent from "../components/common/master_component";

const SettingsPage = () => {
  return (
    <MasterComponent activePage={SettingsPageRoute}>
      I AM SETTINGS
    </MasterComponent>
  );
};

export default SettingsPage;
export const SettingsPageRoute = "/settings";
