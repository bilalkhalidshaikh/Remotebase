import logo from './logo.svg';
import './App.css';
import {Home} from "./Pages"
import {AppBar} from "./Components"
import Routes from "../src/Routes"





function App() {
  return (
    <div className="App">
      {/* <AppBar/> */}
      <Routes/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
