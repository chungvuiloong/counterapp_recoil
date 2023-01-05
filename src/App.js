import './App.css';
import {
  useRecoilState
} from 'recoil';
import Buttons from './components/Button';
import {counter} from './atom/atom';

// Material UI
import { Container, Paper } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count] = useRecoilState(counter);
  return (
    <>
      <Header/>
      <Container>
        <Paper>

          <div>Count: {count} </div>
          {Buttons(+1)}
          {Buttons(+5)}
          {Buttons(+10)}
          {Buttons(0)}
          {Buttons(-1)}
          {Buttons(-5)}
          {Buttons(-10)}
        </Paper>
      </Container>
      {/* <Footer/> */}
    </>
  );
}

export default App;