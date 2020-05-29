import React from 'react'
import { Card } from './Card'
import { AppButton } from './AppButton'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_RANDOM_JOKE = gql`
{
  categories {
    category
  }
}
`;

const Categories = ({ onSelected }) => (
  <Query query={GET_RANDOM_JOKE}>
    {({data, loading, error}) => {
      if (loading) return "Loading"
      if (error) return "ERROR :("
      return (
        data.categories
        .map(
          categories => 
            <button
              onClick={onSelected}
              className="w-full sm:w-40 md:w-32 bg-dark-blue text-white text-center font-bold m-1 py-2 px-4 rounded"
              key={categories.category}
            >
              {categories.category}
            </button>
        )
      )
    }}
  </Query>
)

const GET_JOKE_CATEGORY = gql`
  query($category: String!) {
    random_category(category: $category) {
      id
      value
    }
  }
`;

const CategoryJoke = ({ category }) => (
  <Query query={GET_JOKE_CATEGORY} variables={{ category }}>
    {({data, loading, error}) => {
      if (loading) return "Loading"
      if (error) return "ERROR :("
      return (
        <p>{data}</p>
      )
    }}
  </Query>
)

export const CategoryContainer = () => {

  return (
    <section className="w-screen min-h-screen flex justify-center items-center bg-mustache-brown">
        <Card>
          <Card.Header>
            <h4 className="hidden md:block text-3xl lg:text-5xl font-bold text-dark-blue">How much wood could Chuck chuck</h4>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-col">
            {/* <p className="flex flex-col">
            </p> */}
            <div className="w-full flex flex-wrap">
              <Categories />
            </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="mb-4 md:mb-0"><AppButton label="Home" path="/" /></div>
            <div className="mb-4 md:mb-0"><AppButton label="Random" path="/random" /></div>
            <AppButton label="Search" path="/search" />
          </Card.Footer>
        </Card>
    </section>
  )
}