// Write your code here

import {Component} from 'react'
import './index.css'

// conditional rendering using variable declaration
class Welcome extends Component {
  state = {isSubscribeBtnClicked: false}

  onClickBtn = () => {
    this.setState(prevState => ({
      isSubscribeBtnClicked: !prevState.isSubscribeBtnClicked,
    }))
  }

  render() {
    const {isSubscribeBtnClicked} = this.state

    let subscribeBtn

    if (isSubscribeBtnClicked === true) {
      subscribeBtn = (
        <button onClick={this.onClickBtn} type="button" className="button">
          Subscribed
        </button>
      )
    } else {
      subscribeBtn = (
        <button onClick={this.onClickBtn} type="button" className="button">
          Subscribe
        </button>
      )
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Welcome</h1>
          <p className="paragraph1">Thank you! Happy Learning</p>
          {subscribeBtn}
        </div>
      </div>
    )
  }
}

export default Welcome
