interface ToggleSwitchProps {
  onThemeChange: (theme: string) => void;
}

const ToggleSwitch = ({ onThemeChange }: ToggleSwitchProps) => {
  const onBackgroundThemeChange = (event: any) => {
    if (event && event.target && event.target.checked) {
      onThemeChange("dark");
    } else {
      onThemeChange("light");
    }
  };

  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          onChange={onBackgroundThemeChange}
        />
        <label className="label" htmlFor="toggleSwitch">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
