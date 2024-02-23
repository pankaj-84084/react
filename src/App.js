import logo from './logo.svg';
import './App.css';
import { UseEffectCom } from './components/UseEffectCom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UseEffect</h1>
        <UseEffectCom/>
      </header>
    </div>
  );
}

export default App;
