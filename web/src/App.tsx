import { BrowserRouter as Router } from "react-router-dom";
import "./global.scss"
import Main from "./components/Main";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Main>
        <Routes />
      </Main>
    </Router>
  );
}

export default App;
