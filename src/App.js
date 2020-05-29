import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { HomeContainer } from './components/HomeContainer'
import { CategoryContainer } from './components/CategoryContainer'
import { RandomContainer } from './components/RandomContainer'
import { SearchContainer } from './components/SearchContainer'

import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

// import { GlobalProvider, GlobalContext } from './context/GlobalState'
// import './App.css';

const deployedGraphQL = 'https://chuck-norris-graphql.herokuapp.com/'

const client = new ApolloClient({
  uri: deployedGraphQL
})

class App extends Component {
  render() {
    return (
      <div className="font-sans">
        <ApolloProvider client={client}>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/random" component={RandomContainer} />
            <Route exact path="/category" component={CategoryContainer} />
            <Route exact path="/search" component={SearchContainer} />
          </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
