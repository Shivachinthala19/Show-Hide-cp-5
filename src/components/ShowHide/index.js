// Write your code here
import {Component} from 'react'
import './index.css'

class HidefirstLast extends Component {
  state = {isFirstname: false, isLastname: false}

  HideFirstname = () => {
    this.setState(prev => ({isFirstname: !prev.isFirstname}))
  }
  HideLastname = () => {
    this.setState(prev => ({isLastname: !prev.isLastname}))
  }
  render() {
    const {isFirstname, isLastname} = this.state

    return (
      <div className="container">
        <h1 className="main-head">Show/Hide</h1>
        <div className="bottomcontainer">
          <div className="Hidename">
            <button
              className="button"
              type="button"
              onClick={this.HideFirstname}
            >
              show/Hide Firstname
            </button>
            {isFirstname && <p className="nameHide">Joe</p>}
          </div>
          <div className="Hidename">
            <button
              className="button"
              type="button"
              onClick={this.HideLastname}
            >
              Show/Hide Lastname
            </button>
            {isLastname && <p className="nameHide">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default HidefirstLast
