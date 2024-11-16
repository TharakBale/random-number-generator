import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNum = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const randomNumber = this.randomNum()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="description ">Generate a random number in the range </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
