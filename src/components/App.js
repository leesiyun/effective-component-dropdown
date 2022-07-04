import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import { darkTheme, lightTheme } from "../styles/Theme";
import Header from "./Header";
import Container from "./Container";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [currentThemeText, setCurrentThemeText] = useState("Light Theme");

  //　각 theme은 state로 관리되며 버튼 클릭 이벤트 시 변경됩니다.
  const switchTheme = () => {
    const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(nextTheme);
    const nextThemeText = theme === lightTheme ? "Dark Theme" : "Light Theme";
    setCurrentThemeText(nextThemeText);
  };
  return (
    // ThemeProvider는 반드시 theme을 사용 할 하위 Component를 감싸고 있어야 합니다.
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header switchTheme={switchTheme} />
      <Container currentThemeText={currentThemeText} />
    </ThemeProvider>
  );
};

export default App;
