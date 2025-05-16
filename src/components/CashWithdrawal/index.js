// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onClickDenoValue = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-logo-container">
            <p className="name-logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text light-color-text">Your Balance</p>
            <p className="dark-color-text balance-amount">{balance}</p>
          </div>
          <p className="rupees-text light-color-text">In Rupees</p>
          <p className="dark-color-text withdraw-text">Withdraw</p>
          <p className="light-color-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="deno-value-container">
            {denominationsList.map(eachDeno => (
              <DenominationItem
                denomination={eachDeno}
                key={eachDeno.id}
                click={this.onClickDenoValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
