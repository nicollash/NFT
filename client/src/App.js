import { Web3ReactProvider } from "@web3-react/core";

import './App.css';
import TopBar from './components/Topbar';
import { getLibrary } from "./contracts/utils";
import Home from "./views/Home";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <TopBar />
        <Home />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
