import React, { useState } from "react";
import uniqid from "uniqid";

function ListTile(props) {
  const [items, setItems] = useState([]);

  function handleNewItem() {
    setItems([...items, uniqid()]);
  }

  function handleDeleteItem(key) {
    setItems(
      this.state.items.filter((item) => {
        return item !== key;
      })
    );
  }

  const arrItems = items.map((item, i) => {
    return (
      <props.itemType
        type="input"
        key={item}
        id={item}
        handleDel={handleDeleteItem}
        hasDelete={true}
        tag={props.tag}
        editing={true}
        number={i}
      />
    );
  });

  return (
    <section className="listTile">
      <h2>{props.title}</h2>
      <div className="tile-arr">{arrItems}</div>
      <button onClick={handleNewItem}>+</button>
    </section>
  );
}

export default ListTile;
