import React, { Component } from 'react'
import { Card } from './Card'
import { AppButton } from './AppButton'
import ApolloClient from 'apollo-boost'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'


export class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state ={
      text: '',
      joke: ''
    }
  }

  setQuery = (event) => {
    this.setState({ text: event.target.value })
  }

  deployedGraphQL = 'https://chuck-norris-graphql.herokuapp.com/'

  client = new ApolloClient({
    uri: this.deployedGraphQL
  })

  GET_RANDOM_JOKE = gql`
    query ($query: String!){
      search_joke(query: $query){
        result {
          value
          id
        }
      }
    }
  `;

  submit = () => {
    this.client.query({
      query: this.GET_RANDOM_JOKE,
      variables: this.state.text
    }).then(result => {console.log(result)})
  }

  renderJokes(jokes) {
    if (jokes.length > 0) {
      return jokes.map(joke => <p key={joke.id}>{joke.value}</p>)
    }
  }

  render() {
    return (
      <section className="w-screen min-h-screen flex justify-center items-center bg-mustache-brown">
          <Card>
            <Card.Header>
              <h4 className="hidden md:block text-3xl lg:text-5xl font-bold text-dark-blue">
              {/* <Query query={GET_RANDOM_JOKE}>
                {({data, loading, error}) => {
                  if (loading) return "Loading"
                  if (error) return "ERROR :("
                  return (
                    <p>{data.random_joke.categories.category}</p>
                  )
                }}
              </Query> */}
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="w-full flex flex-col">
                <label>Search with text</label>
                <input onChange={this.setQuery} type="text" value={this.state.text} className="w-full md:w-1/2 border-4 border-sun py-2 pl-2 mb-6 mt-2" />
                <button onClick={this.submit} className="w-40 bg-dark-blue text-white text-center font-bold py-2 px-4 rounded">SUBMIT</button>
              </div>
              
              {/* <Query query={GET_RANDOM_JOKE}>
                {({data, loading, error}) => {
                  if (loading) return "Loading"
                  if (error) return "ERROR :("
                  return (
                    <p>{data.random_joke.value}</p>
                  )
                }}
              </Query> */}
            </Card.Body>
            <Card.Footer>
              <div className="mb-4 md:mb-0"><AppButton label="Home" path="/" /></div>
              <div className="mb-4 md:mb-0"><AppButton label="Random" path="/random" /></div>
              <AppButton label="Category" path="/category" />
            </Card.Footer>
          </Card>
      </section>
    )
  }
}