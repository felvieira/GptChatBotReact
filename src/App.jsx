import { ThemeProvider } from "next-themes";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./navigation/routes";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
