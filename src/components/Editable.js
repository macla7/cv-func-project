import React, { useState, Component } from "react";

function Editable(props) {
  const [id, setId] = useState(props.id);
  const [text, setText] = useState(props.text);
  const [editing, setEditing] = useState(props.editing);

  function handleBlur(e) {
    const container = e.target.parentElement;
    if (!isBlank(container)) {
      save(container.firstChild);
      lock();
    }
  }

  function save(input) {
    setText(input.value);
  }

  function lock() {
    setEditing(false);
  }

  function handleClick(e) {
    setEditing(true);
  }

  function handleChange(event) {
    isBlank(event.target.parentElement);
    save(event.target);
  }

  function handleDel() {
    props.handleDel(id);
  }

  function isBlank(container) {
    if (container.firstChild.value === "") {
      container.lastChild.classList.add("error-active");
      return true;
    } else {
      container.lastChild.classList.remove("error-active");
    }
  }

  if (editing) {
    return (
      <div className="editable">
        <props.type
          required
          autoFocus
          onChange={handleChange}
          onBlur={handleBlur}
          value={text ? text : ""}
          placeholder={props.placeholder}
        />
        {props.hasDelete ? (
          <button onMouseDown={handleDel}>🗑</button>
        ) : (
          <div></div>
        )}
        <span>Don't leave blank plz</span>
      </div>
    );
  } else {
    return (
      <div className="editable" onClick={handleClick}>
        <props.tag>{text}</props.tag>
      </div>
    );
  }
}

export default Editable;
