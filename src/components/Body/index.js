import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

class Body extends Component {
  content = () => (
    <>
      <h1>Content</h1>
      <p>Lorem ipsum</p>
    </>
  )

  left = () => (
    <>
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </>
  )

  right = () => (
    <>
      <h1>Right Navbar</h1>
      <p>Ad 1</p>
      <p>Ad 2</p>
    </>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <>
              {showContent && this.content()}
              {showLeftNavbar && this.left()}
              {showRightNavbar && this.right()}
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
