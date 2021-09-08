import React from "react";
import Editable from "./Editable";

function HeaderTile() {
  return (
    <div className="headerTile">
      <Editable
        type="input"
        hasDelete={false}
        tag="h1"
        placeholder="First Name.."
        text="First Name"
        editing={false}
      />
      <Editable
        type="input"
        hasDelete={false}
        tag="h1"
        placeholder="Last Name.."
        text="Last Name"
        editing={false}
      />
      <Editable
        type="input"
        hasDelete={false}
        tag="h2"
        placeholder="Job Title.."
        text="Job Title"
        editing={false}
      />
    </div>
  );
}

export default HeaderTile;
