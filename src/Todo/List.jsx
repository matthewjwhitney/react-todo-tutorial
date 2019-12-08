import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

export default function List(props) {
  //sorts the todos by timeCreated so that the newest is on top of the list
  const sortedTodos = props.todos.sort(
    (a, b) => new Date(b.timeCreated) - new Date(a.timeCreated)
  );

  return (
    <ul
      style={{
        /* removes the default bullet so we can add our own icon */
        listStyleType: "none"
      }}
    >
      {/* loops through the sortedTodos instead of props.todos*/}
      {sortedTodos.map(item => (
        /* remember a unique key must be provided when rendering items from an array loop 
        so that react knows which item is which */
        <li key={item.id}>
          <button
            style={{
              /* overrides default html button styles */
              border: "none",
              backgroundColor: "transparent",
              outline: "none",

              /* adds space between button and description text */
              marginRight: "0.25rem"
            }}
            /* remember to use this syntax for an onClick handler */
            onClick={() => props.toggleDone(item.id)}
          >
            {/*
            react-fontawesome is an external dependency i've imported
            to have access to a library of pre-made icons.
            Read the docs on their github repository to understand how it works.
            */}
            <FontAwesomeIcon
              icon={
                /* uses a ternary operator to switch between icons */
                item.done ? faCheckSquare : faSquare
              }
            />
          </button>
          {item.description}
        </li>
      ))}
    </ul>
  );
}
