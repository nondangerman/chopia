import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import PageFlipEffect from "./components/PageFlipEffect";

const theme = createTheme({
  typography: {
    fontFamily: `'Comic Sans MS', 'Arial', sans-serif`, // Define Comic Sans como la fuente principal
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PageFlipEffect />
      </div>
    </ThemeProvider>
  );
}

export default App;
