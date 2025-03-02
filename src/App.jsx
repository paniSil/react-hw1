import Button from './components/Button'
import Input from './components/Input'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <label>
        <Input name="Text" />
      </label>
      <label>
        <Input name="Checkbox" type="checkbox" />
      </label>

      <p>
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>

      <Input name="Password" type="password" action="submit"></Input>
      <Button buttonText="Click me!" type="submit" num={1} />
      <Button buttonText="Reset button" type="reset" num={2} disabled={false} />
      <Button buttonText="Reset text" num={3} disabled={true} />
    </div>
  )
}

export default App
