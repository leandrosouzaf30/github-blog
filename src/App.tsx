import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Profile } from "./pages/Profile"


export function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Profile />
      </ThemeProvider>
    )
}

