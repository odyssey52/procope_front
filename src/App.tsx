import { theme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import NaverCallback from "./components/pages/login/NaverCallback";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/naver/callback" element={<NaverCallback />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
