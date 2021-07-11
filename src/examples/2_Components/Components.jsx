/**
 * - Components -
 *
 * Components are probably (if not) the most common concept you will be working with in React. Essentially these are JavaScript 
 * functions that allow you to create UI elements that are independent and reusable. Components can be used for customized 
 * buttons, text boxes, or any other UI element that you will reuse throughout your web app.
 * 
 * NOTE: There are two main types of components in React: function components and class components. This demo will cover
 * function components as these are becoming more widely used and have a cleaner, easier to read syntax. But feel free to
 * look into class components in your free time!
 * 
 * As mentioned above, components are essentially JavaScript functions. You can pass in "props" (short for properties) as
 * arguments and return React elements to be rendered on the screen. See below for an example of a button component.
 *
 */

import MyButton from "./MyButton";

export default function Components() {
    /**
     * Here we are rendering our MyButton component and passing in the prop "label" -- which determines the text on the button.
     * TEST IT OUT: Try changing the string passed into the MyButton label prop and see how the button's label changes.
     * See MyButton.js for continued explanation.
     */
    return (
        <div>
            <h1>Components</h1>
            <MyButton label="press me"/>
        </div>
    
    );
}
