// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg">
        <div className="bg-1">
          <h1 className="heading">
            Bob ate <span className="number">{mangoCount}</span> mangoes
            <span className="number">{bananaCount}</span> bananas
          </h1>
          <div className="img-container">
            <div className="img-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" className="btn" onClick={this.eatMango}>
                Eat Mangoes
              </button>
            </div>
          </div>
          <div className="img-container">
            <div className="img-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="img"
              />
              <button type="button" className="btn" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
