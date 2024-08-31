import { theme } from "./styles/theme";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
