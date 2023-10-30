import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import "./App.css";

import Header from "./components/Header";
import FormPage from "./pages/FormPage";
import FormSubmit from "./pages/FormSubmit";
import PageNotFound from "./pages/PageNotFound";
import theme from "./utils/themes/theme.dark";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Container maxWidth="sm" background="primary">
            <CssBaseline />
            <Routes>
              <Route path="/" element={<FormPage />} />
              <Route path="/submit" element={<FormSubmit />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
