import './App.css';
import {
  useRecoilState
} from 'recoil';
import Buttons from './components/Button';
import {counter} from './atom/atom';

// Material UI
import { Box, Card, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [count] = useRecoilState(counter);
  return (
    <>
      <Header/>
      <Container>
        <Paper elevation={24} sx={{ m: 5, p: 5 }}>
          <Box align="center" sx={{ height: 100,borderRadius: '50%' }}>
            <Typography variant="h1">{count}</Typography>
          </Box>
        </Paper>
        <Grid container sx={{ justifyContent: 'space-evenly' }}>
          <Grid>
          <Typography>Increase</Typography>
            <Stack
              direction="column"
              spacing={5}
            >
                {Buttons(-1)}
                {Buttons(-5)}
                {Buttons(-10)}
            </Stack>
          </Grid>
          <Grid align="center">
          <Typography>Reset</Typography>
          {Buttons(0)}
          </Grid>
          <Grid>
          <Typography>Decrease</Typography>
            <Stack
              direction="column"
              spacing={5}
            >
                {Buttons(-1)}
                {Buttons(-5)}
                {Buttons(-10)}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer/> */}
    </>
  );
}

export default App;