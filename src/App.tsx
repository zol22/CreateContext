import { useTheme } from "./components/ThemeContext";

export default function App() {
  const { darkMode, dispatch } = useTheme();

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
}
