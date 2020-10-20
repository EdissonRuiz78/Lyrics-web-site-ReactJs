import React from "react";
import PropTypes from "prop-types";

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

Song.propTypes = {
  song: PropTypes.string.isRequired,
};

export default Song;
