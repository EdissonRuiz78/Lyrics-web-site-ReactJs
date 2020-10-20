import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Song from "./components/Song";
import Artist from "./components/Artist";

function App() {
  const [lyric, updateLyric] = useState({});
  const [song, updateSong] = useState("");
  const [bioInfo, updateBioInfo] = useState({});

  useEffect(() => {
    if (Object.keys(lyric).length === 0) {
      return;
    }

    const getDataLyric = async () => {
      const { artist, song } = lyric;
      const urlLyric = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [infoLyric, infoArtist] = await Promise.all([
        axios.get(urlLyric),
        axios.get(urlArtist),
      ]);
      updateSong(infoLyric.data.lyrics);
      updateBioInfo(infoArtist.data.artists[0]);
    };

    getDataLyric();
  }, [lyric]);

  return (
    <div className="container bg-dark">
      <Form updateLyric={updateLyric} />
      <div className="row p-4">
        <div className="col-md-6">
          <Artist bioInfo={bioInfo} />
        </div>
        <div className="col-md-6">
          <Song song={song} />
        </div>
      </div>
    </div>
  );
}

export default App;
