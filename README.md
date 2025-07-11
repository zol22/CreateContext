# 🌗 React Theme Context (Dark Mode Toggle)

This is a simple example of how to manage global dark/light mode in a React app using `createContext` and `useReducer`.

## 🛠 Tech Stack

- React
- TypeScript
- Context API
- useReducer Hook

---

## 📁 What’s Inside

### 1. `ThemeContext.tsx`

This file creates:

- Global state (`darkMode`)
- A `dispatch` function to toggle between light and dark mode
- A custom hook `useTheme()` to access everything easily

```tsx
const [state, dispatch] = useReducer(themeReducer, initialState);



### 2. `ThemeProvider`
Wraps your app and provides context values.

### 3. `useTheme()`
Custom hook to access darkMode and dispatch from any component.

