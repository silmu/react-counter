import classes from './Circle.module.css';

const Circle = (props) => {
  return (
    <div className={classes[props.className]}>
      <div className={classes.number}>{props.counter}</div>
    </div>
  );
};

export default Circle;
