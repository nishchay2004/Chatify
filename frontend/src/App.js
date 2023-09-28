import './App.css';
import {Route} from "react-router-dom"
import Home from "./Pages/Home"
import Chat from "./Pages/Chat"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={Home} exact/>
        <Route path="/chats" component={Chat} />
      </header>
    </div>
  );
}

export default App;
