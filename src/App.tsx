import './App.css';
import Ball from './Ball';

const App = () => {
  return (
    <div className="balls">
      <Ball number={5} />
      <Ball number={11} />
      <Ball number={16} />
      <Ball number={23} />
      <Ball number={32} />
    </div>
  );
};

export default App;
