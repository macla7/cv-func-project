import React from "react";
import Editable from "./Editable";

function Profile() {
  return (
    <div className="profileTile">
      <h2>Profile</h2>
      <Editable
        type="textarea"
        hasDelete={false}
        tag="p"
        placeholder="Description of yourself your goals.."
        editing={true}
      />
    </div>
  );
}

export default Profile;
