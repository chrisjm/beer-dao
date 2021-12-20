import React from 'react';
import ReactDOM from 'react-dom';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import './index.css';
import App from './App';

// 4 = Rinkeby.
const supportedChainIds = [4];

// We support Metamask which is an "injected wallet".
const connectors = {
  injected: {},
};

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <div className="landing">
        <App />
      </div>
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
