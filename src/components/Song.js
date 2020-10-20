import React from "react";

const Song = ({ song }) => {
  if (song === "") {
    return null;
  }

  return (
    <div className="card border-light">
      <div className="card-header text-light font-weight-bold">
        <h2>Song Lyric</h2>
      </div>
      <div className="card-body">
        <p className="lyric card-text">{song}</p>
      </div>
    </div>
  );
};

export default Song;
