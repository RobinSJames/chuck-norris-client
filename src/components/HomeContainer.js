import React, { Component, useContext } from 'react'
import { Card } from './Card'
import { AppButton } from './AppButton'
import CowboySVG from './icons/CowboySVG'

import {GlobalContext} from '../context/GlobalState'

export const HomeContainer = () => {  
  const { getRandomJoke } = useContext(GlobalContext)
  return (
    <section className="w-screen min-h-screen flex justify-center items-center bg-mustache-brown">
        <Card>
          <Card.Header>
            <h4 className="hidden md:block text-3xl lg:text-5xl font-bold text-dark-blue">How much wood could Chuck chuck</h4>
          </Card.Header>
          <Card.Body>
            <CowboySVG />
          </Card.Body>
          <Card.Footer>
            <div onClick={getRandomJoke} className="mb-4 md:mb-0"><AppButton label="Random" path="/random" /></div>
            <div className="mb-4 md:mb-0"><AppButton label="Category" path="/category" /></div>
            <AppButton label="Search" path="/search" />
          </Card.Footer>
        </Card>
      {/* <button onClick={stop}>Play audio</button> */}
    </section>
  )
}