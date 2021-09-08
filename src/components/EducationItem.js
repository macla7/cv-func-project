import React, { Component } from "react";
import Editable from "./Editable";
import DateRange from "./DateRange";

function EducationItem(props) {
  function handleDel() {
    props.handleDel(props.id);
  }

  return (
    <div className="eduAndExpItem">
      <Editable
        type="input"
        hasDelete={false}
        tag="h3"
        placeholder="Name of Institution"
        editing={true}
      />
      <DateRange />
      <Editable
        type="input"
        hasDelete={false}
        tag="div"
        placeholder="Qualification/Degree.."
        editing={true}
      />
      <Editable
        type="input"
        hasDelete={false}
        tag="div"
        placeholder="Grade or GPA.."
        editing={true}
      />

      <button onClick={handleDel}>🗑</button>
    </div>
  );
}

export default EducationItem;
