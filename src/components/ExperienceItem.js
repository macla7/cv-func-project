import React, { Component } from "react";
import Editable from "./Editable";
import DateRange from "./DateRange";

function ExperienceItem(props) {
  function handleDel() {
    props.handleDel(props.id);
  }

  return (
    <div className="eduAndExpItem">
      <Editable
        type="input"
        hasDelete={false}
        tag="h3"
        placeholder="Workplace.."
        editing={true}
      />
      <DateRange />
      <Editable
        type="input"
        hasDelete={false}
        tag="div"
        placeholder="Position.."
        editing={true}
      />
      <Editable
        type="textarea"
        hasDelete={false}
        tag="div"
        placeholder="Description of Skills.."
        editing={true}
      />

      <button onClick={handleDel}>🗑</button>
    </div>
  );
}

export default ExperienceItem;
