import Feed from "./containers/Feed.jsx";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles/index.js';
import './styles.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Feed />
      </Box>
    </ThemeProvider>
  );
}

export default App;
