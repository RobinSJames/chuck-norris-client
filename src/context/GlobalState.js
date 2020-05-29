import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

const link = 'https://chuck-norris-graphql.herokuapp.com/'

const client = new ApolloClient({
  uri: link
})

const initialState = {
  jokes: []
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component 
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
  function getRandomJoke() {
    dispatch({
      type: 'GET_RANDOM_JOKE'
    })
  //   .then(
  //     client
  //       .query({
  //         query: gql`
  //           {
  //             random_joke {
  //               id
  //               value
  //             }
  //           }
  //         `
  // }).then(result => console.log(result))
  // )
  }

  function getCategories(category) {
    dispatch({
      type: 'GET_CATEGORIES',
      payload: category
    })
  }

  function querySearchJoke(input) {
    dispatch({
      type: 'SEARCH_JOKE',
      payload: input
    })
  }

  function getJokeByCategory(input) {
    dispatch({
      type: 'GET_CATEGORY_JOKE',
      payload: input
    })
  }

  return (<GlobalContext.Provider value={{
    joke: state.jokes,
    getRandomJoke,
    getCategories,
    getJokeByCategory,
    querySearchJoke
  }}>
    { children }
  </GlobalContext.Provider>)
}
