import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import Archive from './pages/Archive'
import ToDo from './pages/ToDo'
import { theme, ThemeProvider, CSSReset, Flex } from "@chakra-ui/core"

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Roboto', sans-serif",
    monospace: "'Roboto Mono', monospace",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <Nav/>
        <Flex as="main" p={3} direction="column" align="center">
          <Route exact path="/"><ToDo /></Route>
          <Route path="/archive"><Archive /></Route>
        </Flex>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
