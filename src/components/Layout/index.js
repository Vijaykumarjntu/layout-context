// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      console.log(showContent)
      console.log(onToggleShowContent)
      console.log(showLeftNavbar)
      console.log(showRightNavbar)
      const contentChanger = () => {
        onToggleShowContent()
      }
      const leftNavbarChanger = () => {
        onToggleShowLeftNavbar()
      }
      const rightNavbarChanger = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="layoutContainer">
          <h1>Layout</h1>
          {showContent && (
            <input
              type="checkbox"
              id="content"
              onChange={contentChanger}
              checked
            />
          )}
          {!showContent && (
            <input type="checkbox" id="content" onChange={contentChanger} />
          )}
          <label htmlFor="content">Content</label>
          {showLeftNavbar && (
            <input
              type="checkbox"
              id="left"
              onChange={leftNavbarChanger}
              checked
            />
          )}
          {!showLeftNavbar && (
            <input type="checkbox" id="left" onChange={leftNavbarChanger} />
          )}
          <label htmlFor="left">Left Navbar</label>
          {showRightNavbar && (
            <input
              type="checkbox"
              id="right"
              onChange={rightNavbarChanger}
              checked
            />
          )}
          {!showRightNavbar && (
            <input type="checkbox" id="right" onChange={rightNavbarChanger} />
          )}
          <label htmlFor="right">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout
