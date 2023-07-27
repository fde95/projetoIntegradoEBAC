
import './App.css';
import Properties from './components/Properties';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

const mdTheme = createTheme();

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', }}>
      <Container>
      <CssBaseline />
        <AppBar position="absolute">
          <Container>
          <Toolbar
            sx={{
              pr: '24px',
            }}>
              <h1>Cadastro de Imóveis</h1>
          </Toolbar>
          </Container>
        </AppBar>
        <Properties />
      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
