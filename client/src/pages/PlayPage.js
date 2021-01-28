import React, { useState, useEffect } from "react";
import CardBoard from "../components/CardBoard";
import { funWords } from "../fakeDatabase.js/funWords";
import "../components/CardBoard.css";
import "../pages/PlayPage.css";
import GoBackButton from "../components/GoBackButton";
import RewardModal from "../components/RewardModal"
import Confetti1 from "../components/confetti";
import CategoryButtons from "../components/CategoryButtons";

const PlayPage = () => {
  const [images, setImages] = useState();
  const [reward, setReward] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const throwConfetti = () => {
    if (reward === true) {
      return <Confetti1/>
    }
  }

  const openModal = () => {
    if (showModal === true) {
      return <RewardModal/>
    }
  }

  useEffect(() => {
    if (!images) {
      return
    }
    images.forEach((i, index) => {
      let b64 = giveMeTheImage(i.img);
      funWords[index].base64img = b64;
    });
  }, [images]);

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
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  let giveMeTheImage = (img) => {
    var base64Flag = "data:image/jpeg;base64,";
    var imageStr = arrayBufferToBase64(img.data.data);
    const finalImage = base64Flag + imageStr;
    return finalImage;
  };
  
  return (
    <>
      <div className="playPage-image">
        <GoBackButton />
        <RewardModal reward={reward} showModal={showModal} setShowModal={setShowModal}/>
        <div className="containerAlignment">
          <div className="row rowAlignment">
            <div className="col-4">
            <CategoryButtons
            value="Animals"
            styleClass="btn-outline-secondary btn-block buttonsAlignment button-image animals"
            onClick={getAnimalImages}
          />

          <CategoryButtons
            value="Shapes"
            styleClass="btn-outline-secondary btn-block buttonsAlignment button-image shapes"
            onClick={getShapeImages}
          />

          <CategoryButtons
            value="Colors"
            styleClass="btn-outline-secondary btn-block buttonsAlignment button-image colors"
            onClick={getColorImages}
          />

          <CategoryButtons
            value="Letters"
            styleClass="btn-outline-secondary btn-block buttonsAlignment button-image letters"
            onClick={getLetterImages}
          />

            </div>
            <div className="col-8">
              <CardBoard funWords={funWords} reward={reward} setReward={setReward}/>
            </div>
          </div>
        </div>
      </div>
      {throwConfetti()}
      {openModal()}
    </>
  );
};

funWords.sort(() => Math.random() - 0.5);

export default PlayPage;
