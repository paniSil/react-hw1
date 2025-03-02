const Input = ({ name, type = 'text' }) => {
  return (
    <div>
      {`${name}: `}
      <input type={type} placeholder={type == 'text' ? 'Type here' : 'Enter password'} />
      {type !== 'radio' && <hr />}
    </div>
  )
}

export default Input
