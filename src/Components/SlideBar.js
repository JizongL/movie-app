import React, { useEffect, useState, useContext } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Config from "../config";
import axios from "axios";
import AppContext from "../context";

// Uncommented the first one for local dev development.
// const URL = Config.devApiUrl;
const URL = Config.dockerRunApi;

export default function Slider() {
  const [firstFiveMoviesImages, setRandomMoviesImages] = useState([]);
  const [imageData, setImageData] = useState([]);
  const { search, setShows } = useContext(AppContext);
  useEffect(() => {
    async function getRandom() {
      const response = await axios.get(`${URL}/get-randoms`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });

      if (response) setRandomMoviesImages(response?.data);
    }
    if (search === "") getRandom();
  }, [search, setShows]);
  useEffect(() => {
    if (firstFiveMoviesImages?.length > 0) {
      const movieImages = firstFiveMoviesImages?.map((movie) => movie?.poster);
      setImageData(movieImages);
    }
  }, [firstFiveMoviesImages]);
  const ImagesForSlide = imageData
    ?.filter((movieUrl) => movieUrl !== "")
    .map((movieUrl, index) => {
      return <div key={index} data-src={movieUrl}></div>;
    });

  return <AwesomeSlider>{ImagesForSlide}</AwesomeSlider>;
}
