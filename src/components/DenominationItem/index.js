// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, click} = props
  const {value} = denomination
  const onWithdraw = () => {
    click(value)
  }

  return (
    <li>
      <button className="denomination-style" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
