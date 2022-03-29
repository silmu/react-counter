export const addFifty = (obj) => {
  obj.setState({ counter: obj.state.counter + 50 });
  console.log(obj);
};
