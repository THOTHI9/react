interface ButtonProps {
  type?: String;
  icon?: string;
  iconName?: string;
  children?: String;
  classes: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  icon,
  iconName,
  children,
  classes,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`button ${classes}`} onClick={onClick}>
      {icon && <img src={icon} className={iconName} alt={iconName} />}
      {children}
    </button>
  );
};

export default Button;
