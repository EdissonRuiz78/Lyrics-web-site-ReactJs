import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Form = ({ updateLyric }) => {
  const [search, updateSearch] = useState({
    artist: "",
    song: "",
  });

  const [error, updateError] = useState(false);

  const { artist, song } = search;

  const handleOnChange = (event) => {
    updateSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      updateError(true);
      return;
    }
    updateError(false);
    updateLyric(search);
  };

  return (
    <form
      className="col card text-white bg-transparent mb-2 pt-4 pb-2"
      onSubmit={handleOnSubmit}
    >
      <fieldset>
        <legend className="text-center">Search for Lyrics...</legend>
        {error ? <Error message="Type an Artist and a song" /> : null}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Artist</label>
              <input
                className="form-control"
                type="text"
                name="artist"
                placeholder="Artist Name"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Song</label>
              <input
                className="form-control"
                type="text"
                name="song"
                placeholder="Song Name"
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary float-right" type="submit">
          Search
        </button>
      </fieldset>
    </form>
  );
};

Form.propTypes = {
  updateLyric: PropTypes.func.isRequired,
};

export default Form;
