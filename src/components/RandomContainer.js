import React from 'react'
import { Card } from './Card'
import { AppButton } from './AppButton'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

// import {GlobalContext} from '../context/GlobalState'

// const deployedGraphQL = 'https://chuck-norris-graphql.herokuapp.com/'

// const client = new ApolloClient({
//   uri: deployedGraphQL
// })

const GET_RANDOM_JOKE = gql`
{
  random_joke {
    id
    value
  }
}
`;

export const RandomContainer = () => {
  return (
    <section className="w-screen min-h-screen flex justify-center items-center bg-mustache-brown">
        <Card>
          <Card.Header>
            <h4 className="hidden md:block text-3xl lg:text-5xl font-bold text-dark-blue">How much wood could Chuck chuck</h4>
          </Card.Header>
          <Card.Body>
            <Query query={GET_RANDOM_JOKE}>
              {({data, loading, error}) => {
                if (loading) return "Loading"
                if (error) return "ERROR :("
                return (
                  <p className="text-lg">{data.random_joke.value}</p>
                )
              }}
            </Query>
          </Card.Body>
          <Card.Footer>
            <div className="mb-4 md:mb-0"><AppButton label="Home" path="/" /></div>
            <div className="mb-4 md:mb-0"><AppButton label="Category" path="/category" /></div>
            <AppButton label="Search" path="/search" />
          </Card.Footer>
        </Card>
    </section>
  )
}