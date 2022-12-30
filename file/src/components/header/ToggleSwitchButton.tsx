import ToggleSwitch from "../../shared/ToggleSwitch";

interface ToggleSwitchButtonProps {
  onThemeChange: (theme: string) => void;
  theme: String;
}

const ToggleSwitchButton = ({
  theme,
  onThemeChange,
}: ToggleSwitchButtonProps) => {
  const isLightThemeSelected = theme === "light" ? true : false;
  return (
    <div className={`toggle-switch-container ${theme}`}>
      <div
        className={`toggle-switch-container__text toggle-switch-container__text--light ${
          isLightThemeSelected ? "selected" : ""
        }`}
      >
        Light Mode
      </div>
      <ToggleSwitch onThemeChange={onThemeChange} />
      <div
        className={`toggle-switch-container__text toggle-switch-container__text--dark ${
          isLightThemeSelected ? "" : "selected"
        }`}
      >
        Dark Mode
      </div>
    </div>
  );
};

export default ToggleSwitchButton;
