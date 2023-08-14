import "./styles.css";

//components
import AppContainer from "./components/appContainer/AppContainer";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 20 + "px" }}>Gallery</h1>
      <AppContainer />
    </div>
  );
}
