import React, { useState, useEffect } from "react";
import CardBoard from "../components/CardBoard";
import { funWords } from "../fakeDatabase.js/funWords";
import "../components/CardBoard.css";
import "../pages/PlayPage.css";
import GoBackButton from "../components/GoBackButton";

const PlayPage = () => {

  const [images, setImages] = useState();

  useEffect(() => {
    if (!images) {
      return
    }
    images.forEach((i, index) => {
      let b64 = giveMeTheImage(i.img);
      funWords[index].base64img = b64;
    })
  }, [images])
  // Functions to call api
  const getColorImages = async () => {
    let response = await fetch("/images/colors");
    let data = await response.json();
    setImages(data);
  };
  const getShapeImages = async () => {
    let response = await fetch("/images/shapes");
    let data = await response.json();
    setImages(data);
  };
  const getLetterImages = async () => {
    let response = await fetch("/images/letters");
    let data = await response.json();
    setImages(data);
  };
  const getAnimalImages = async () => {
    let response = await fetch("/images/animals");
    let data = await response.json();
    setImages(data);
  };
  // const getCustomImages = async () => {
  //   let response = await fetch("/images/colors");
  //   let data = await response.json();
  //   setImages(data);
  // };

  console.log("these are the funWords :", funWords);

  let arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  let giveMeTheImage = (img) => {
    var base64Flag = 'data:image/jpeg;base64,';
    var imageStr = arrayBufferToBase64(img.data.data);
    const finalImage = base64Flag + imageStr;
    return finalImage;
  }

  return (
    <>
      <div className="playPage-image">
        <GoBackButton />
        <button onClick={getColorImages}>Load Color Images</button><br />
        <button onClick={getShapeImages}>Load Shape Images</button><br />
        <button onClick={getAnimalImages}>Load Animals Images</button><br />
        <button onClick={getLetterImages}>Load Letters Images</button><br />
        {/* <button onClick={getCustomImages}>Load Custom Images</button> */}<br />
        <div className="container-fluid containerAlignment">
          <CardBoard funWords={funWords} />
        </div>
      </div>
    </>
  );
};

// funWords.sort(() => Math.random() - 0.5);

export default PlayPage;
