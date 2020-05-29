import React, { Component } from 'react'
// import {StyledForm} from '../styles'

function Header() {
  return null
}
function Body() {
  return null
}
function Footer() {
  return null
}

export class Card extends Component {
  static Header = Header
  static Body = Body
  static Footer = Footer
  con
  render() {
    const {children} = this.props
    const header = children.find(child => child.type === Header)
    const body = children.find(child => child.type === Body)
    const footer = children.find(child => child.type === Footer)

    return (
      <div className="w-10/12 md:w-2/3 lg:w-1/2 grid grid-cols-1 grid-rows-12 border-8 border-sun rounded-lg">
        <header className="row-span-1 text-center border-b-8 border-sun bg-sun">
          {header ? header.props.children : null}
        </header>
        <main className="row-span-2 bg-card-body flex flex-wrap justify-center p-1/12">
          {body ? body.props.children : null}
        </main>
        <footer className="row-span-1 border-t-8 border-sun flex flex-col md:flex-row justify-around p-4 bg-sun">
          {footer ? footer.props.children : null}
        </footer>
        {/* <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl">How much wood can Chuck chuck?</h3>
        </div> */}
      </div>
    )
  }
}
