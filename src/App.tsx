import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Header } from "./components/Header"

export function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    )
}

