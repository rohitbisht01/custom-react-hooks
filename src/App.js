import LocalStorage from "./components/LocalStorage";
import DebouncedInput from "./components/DebouncedInput";
import "./styles.css";
import PreviousInput from "./components/PreviousInput";
import CopyToClipboard from "./components/CopyToClipboard";
import FetchComponent from "./components/FetchComponent";
import AsyncComponent from "./components/AsyncComponent";
import ToggleTheme from "./components/ToggleTheme";
import FocusComponent from "./components/FocusComponent";
import CheckActivity from "./components/CheckActivity";

export default function App() {
  return (
    <div className="App">
      <h3>Custom React Hooks</h3>
      {/* <LocalStorage /> */}
      {/* <DebouncedInput /> */}
      {/* <PreviousInput /> */}
      {/* <CopyToClipboard /> */}
      {/* <FetchComponent /> */}
      {/* <AsyncComponent /> */}
      {/* <ToggleTheme /> */}
      {/* <FocusComponent /> */}
      <CheckActivity />
    </div>
  );
}
