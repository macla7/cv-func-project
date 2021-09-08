import React, { Component, useState } from "react";

function Avatar() {
  const [src, setSrc] = useState();

  function handleChange(e) {
    setSrc(e.target.value);
  }

  function handleDel() {
    setSrc("");
  }

  if (src) {
    return (
      <div className="avatarTile">
        <img src={src} alt="avatar" />
        <button onClick={handleDel}>🗑</button>
      </div>
    );
  } else {
    return (
      <div className="avatarTile">
        <input
          type="text"
          placeholder="Image src for avatar.."
          value={src}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Avatar;
