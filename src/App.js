import './App.css';
import {
  useRecoilState
} from 'recoil';
import Buttons from './components/Buttons';
import {counter} from './atom/atom';

function App() {
  const [count, setCount] = useRecoilState(counter);
  return (
    <>
      <div>Count: {count} </div>
      {Buttons(+1)}
      {Buttons(+5)}
      {Buttons(+10)}
      {Buttons(0)}
      {Buttons(-1)}
      {Buttons(-5)}
      {Buttons(-10)}
    </>
  );
}

export default App;
