import { theme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
