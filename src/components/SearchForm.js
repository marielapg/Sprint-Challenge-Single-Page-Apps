import React from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
         <form>
        <input
          type="text"
          onChange={props.handleInput}
          value={props.value}
          name="name"
          placeholder="character name here"
         />
      </form>
    </section>
  );
}
