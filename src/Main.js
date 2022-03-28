import Button from './Button';
import addFive from './add-five';

const Main = () => {
  return (
    <main>
      <div className="circle">
        <div className="number">0</div>
      </div>
      <div className="buttons">
        <Button name="Add five" onClick={addFive} />
        <Button name="Add one" />
        <Button name="Reset" />
        <Button name="Remove one" />
        <Button name="Remove five" />
      </div>
    </main>
  );
};

export default Main;
