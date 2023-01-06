import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  content = () => (
    <div className="contentContainer">
      <h1>Content</h1>
      <p>Lorem ipsum</p>
    </div>
  )

  left = () => (
    <div className="leftContainer">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  right = () => (
    <div className="rightContainer">
      <h1>Right Navbar</h1>
      <p>Ad 1</p>
      <p>Ad 2</p>
    </div>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="itemContainer">
              {showLeftNavbar && this.left()}
              {showContent && this.content()}
              {showRightNavbar && this.right()}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
