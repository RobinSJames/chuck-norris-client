import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import './tailwind.generated.css'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const deployedGraphQL = 'https://chuck-norris-graphql.herokuapp.com/'

const client = new ApolloClient({
  uri: deployedGraphQL
})

client
  .query({
    query: gql`
      {
        random_joke {
          id
          value
        }
      }
    `
  }).then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
