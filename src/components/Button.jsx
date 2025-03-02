const Button = ({ buttonText, type = 'button', disabled, num }) => {
  return (
    <div>
      <h2>{disabled ? 'Disabled button' : `Button ${num} enabled`}</h2>
      {/* disabled ? <h2>Disabled button</h2> : <h2>{`Button ${num} enabled`}</h2> */}
      <button
        type={type}
        disabled={disabled}
        onClick={() => (type == 'submit' ? alert('Clicked!') : alert('Reset needs implementation'))}
      >
        {buttonText}
      </button>
      <hr />
    </div>
  )
}

export default Button
