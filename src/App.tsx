import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { ProfileProvider } from "./context/ProfileContext"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"


export function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ProfileProvider>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </ProfileProvider>
      </ThemeProvider>
    )
}

