import React, { useState } from "react";
import { format, parseISO } from "date-fns";

function DateRange(props) {
  const [editing, setEditing] = useState(props.editing);
  const [startDate, setStartDate] = useState("2015-01-01");
  const [endDate, setEndDate] = useState("2020-12-01");

  function handleSubmit(e) {
    console.log("beep");
    e.preventDefault();
    console.log("beep");
    console.log(e.target.firstChild.name);
    save(e.target);
    lock();
  }

  function save(form) {
    setStartDate(form.firstChild.value);
    setEndDate(form.children[1].value);
  }

  function lock() {
    setEditing(false);
  }

  function handleClick() {
    console.log("hello");
    setEditing(true);
  }

  function handleChange(e) {
    save(e.target.parentElement);
  }

  if (editing) {
    return (
      <form onSubmit={handleSubmit} className="dateInputRange">
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={handleChange}
        />
        <input type="submit" value="save" />
      </form>
    );
  } else {
    return (
      <div onClick={handleClick} className="dateRange">
        <div>{format(parseISO(startDate), "MMM yyyy")}</div>-
        <div>{format(parseISO(endDate), "MMM yyyy")}</div>
      </div>
    );
  }
}

export default DateRange;
