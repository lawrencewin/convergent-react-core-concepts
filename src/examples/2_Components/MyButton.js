/**
   * Here we can utilize the "label" prop that we passed into our Button component in Components.jsx 
   * and pass it in as a child to the JavaScript <button/> element in order to have it render as the button's
   * label.
   * 
   * Also notice that you can pass in your own function into the onClick handler for the button in order to
   * specify what you want to happen whenever the button is clicked. If you open up the console, you will be
   * able to see the "pressed MyButton!" message triggered every time you press the button.
   * 
   * You can also do a lot more to customize your button by looking up documentation for the various JS
   * elements that are available for your use. Also, UI frameworks like Bootstrap and Material-UI
   * are great for creating clean, beautiful UI components.
   */
  
export default function MyButton(props){
  function handleClick() {
    console.log("pressed MyButton!");
  }
  
  return <button onClick={handleClick}>{props.label}</button>
}