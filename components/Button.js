import btnStyles from '../styles/Button.module.css';

const STYLES = [`${btnStyles.btn_primary}`, `${btnStyles.btn_outline}`];
const SIZES = [`${btnStyles.btn_medium}`, `${btnStyles.btn_large}`];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`${btnStyles.btn} ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
