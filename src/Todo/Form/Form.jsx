import React, { Fragment } from "react";
import "./form.css";
/* try changing the styles of the input and the button to make them look cooler.
you can use the form.css file I created and add the classes to the elements.
React uses "className" instead of "class" to add classes to an element.
Or you can use inline styles using the jsx "style" property directly on the element
but that only accepts a JSON object rather than a string so your css syntax changes.
read the docs.
If it's something short I prefer inline styles despite react recommending not to
or I like css-in-js. both use JSON instead of traditional CSS.
 https://reactjs.org/docs/faq-styling.html
*/

export default function Form(props) {
  return (
    <Fragment>
      <input
        placeholder="New Todo "
        //remember that we have to use this syntax to capture the value
        onChange={event => props.updateNewTodo(event.target.value)}
        //this allows us to clear the value after submitting
        value={props.newTodo}
        //add classes from form.css here
        className=""
        //add inline styles here
        style={{}}
      />
      <button
        onClick={props.addNewTodo}
        //add classes from form.css here
        className=""
        //add inline styles here
        style={{}}
      >
        Submit
      </button>
    </Fragment>
  );
}
