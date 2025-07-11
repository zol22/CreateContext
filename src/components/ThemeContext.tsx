import { createContext, useReducer, useContext, type ReactNode } from "react";


// 1️⃣ Define Types for State and Actions
interface State {
  darkMode: boolean;
}

interface Action {
  type: "TOGGLE_THEME";
}

// 2️⃣ Define the Shape of Context Value
interface ThemeContextType {
  darkMode: boolean;
  dispatch: React.Dispatch<Action>;
}

// 3️⃣ Initial State: Theme starts in light mode (darkMode: false)
const initialState: State = { darkMode: false };

// 4️⃣ Create Context with Default Values
const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  dispatch: () => {},
});

// 5️⃣ Reducer Function to Handle State Changes
function themeReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

// 6️⃣ Provider Component to Wrap Your App. Values returned from Usereducer, state and dispatch. Parameters to usereducer, themereducer and initial state,
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 7️⃣ Custom Hook for Easy Access
export function useTheme() {
  return useContext(ThemeContext);
}
