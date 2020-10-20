import React from "react";

const Artist = ({ bioInfo }) => {
  const {
    strArtist,
    strGenre,
    strWebsite,
    strFacebook,
    strTwitter,
    strBiographyEN,
    strArtistThumb,
    strLastFMChart,
  } = bioInfo;

  if (Object.keys(bioInfo).length === 0) {
    return null;
  }

  return (
    <div className="card border-light">
      <div className="card-header text-light font-weight-bold">
        <h2>Artist Information</h2>
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt={strArtist} />
        <p className="card-text">Name: {strArtist}</p>
        <p className="card-text">Genre: {strGenre}</p>
        <p className="card-text">
          <a
            href={`https://${strWebsite}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Site
          </a>
        </p>
        <h2 className="card-text">Biography</h2>
        <p className="card-text">{strBiographyEN}</p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Artist;
