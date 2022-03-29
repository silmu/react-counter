import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className={`${classes.btn} ${classes.primary}`}
    >
      {props.value}
      {props.children}
    </button>
  );
};

export default Button;
