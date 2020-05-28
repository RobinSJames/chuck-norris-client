import React from 'react';
import { ApolloProvider } from 'react-apollo'
import './App.css';



function App() {
  return (
    // <ApolloProvider client={client}></ApolloProvider>
    <div className="App font-sans">
      <header className="text-5xl pt-20">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
