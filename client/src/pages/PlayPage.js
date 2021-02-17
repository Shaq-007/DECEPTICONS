import React, { useState, useEffect, useContext } from "react";
import CardBoard from "../components/CardBoard";
import { funWords } from "../fakeDatabase.js/funWords";
import "../components/CardBoard.css";
import "../pages/PlayPage.css";
import GoBackButton from "../components/GoBackButton";
import RewardModal from "../components/RewardModal";
import Confetti1 from "../components/confetti";
import CategoryButtons from "../components/CategoryButtons";
import shuffle from "shuffle-array";
import { AuthContext } from "../components/AuthContext";

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

const PlayPage = () => {
  const [images, setImages] = useState();
  const [reward, setReward] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [myWords, setMyWords] = useState([]);
  const [inGame, setInGame] = useState(false);
  const [twoCardsInPlay, setTwoCardsInPlay] = useState([]);
  const [solved, setSolved] = useState([]);
  const [cardStatus, setCardStatus] = useState([false,false,false,false,false,false,false,false,false,false,false,false]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    user,
    categoryName,
    setCategoryName,
    email,
    upload,
    setUpload,
    imagesUpload,
    setImagesUpload,
  } = useContext(AuthContext);
  // console.log('this is the categoryName in PlayPage', categoryName)

  const throwConfetti = () => {
    if (reward === true) {
      return <Confetti1 />;
    }
  };

  const openModal = () => {
    if (showModal === true) {
      return <RewardModal />;
    }
  };

  const startGame = async (categoryName) => {
    if (!inGame) {
      loadImages(categoryName);
      setInGame(true);
    }
  };

  const startGameCustom = async (email) => {
    if (!inGame) {
      getImages_custom(email);
      setInGame(true);
    }
  };

  const loadImages = async (categoryName) => {
    let response = await fetch("/images/" + categoryName);
    let data = await response.json();
    setImages(data);
    setSelectedCategory(categoryName);
    console.log("this is the data", data);
  };

  const getImages_custom = async (email) => {
    let response = await fetch("/custom/" + email);
    // setInGame(true);
    setSelectedCategory(email);
    if (response.status === 400) {
      let error = await response.text();
      alert(error);
      setUpload(false);
    } else {
      console.log("this is the response", response);
      let data = await response.json();
      setImages(data);
      console.log("this is the data from playpage", data);
      if (data.length === 0) {
        alert(
          "sorry, you really do not have images in DB, go back and upload images if you want to play with them"
        );
        setUpload(false);
      }
    }
  };

  // useEffect(() => {
  //   loadImages("Colors");
  // }, []);

  useEffect(() => {
    if (!images) {
      return;
    }
    const copyOfWords = funWords.slice();
    images.forEach((i, index) => {
      let b64 = giveMeTheImage(i.img);
      copyOfWords[index].base64img = b64;
    });
    shuffle(copyOfWords);
    setMyWords(copyOfWords);
  }, [images]);

  return (
    <>
      <div className="playPage-image">
        <GoBackButton />
        <RewardModal
          reward={reward}
          setReward={setReward}
          showModal={showModal}
          setShowModal={setShowModal}
          setTwoCardsInPlay={setTwoCardsInPlay}
          setSolved={setSolved}
          setCardStatus={setCardStatus}
          setInGame={setInGame}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="containerAlignment">
          <div className="row rowAlignment">
            <div className=" col-4 categoryRow">
              <CategoryButtons
                value="Animals"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image animals"
                disabled={inGame && selectedCategory !== "Animals"}
                onClick={() => {
                  startGame("Animals");
                }}
              />

              <CategoryButtons
                value="Shapes"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image shapes"
                disabled={inGame && selectedCategory !== "Shapes"}
                onClick={() => {
                  startGame("Shapes");
                }}
              />

              <CategoryButtons
                value="Colors"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image colors"
                disabled={inGame && selectedCategory !== "Colors"}
                onClick={() => {
                  startGame("Colors");
                }}
              />

              <CategoryButtons
                value="Letters"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image letters"
                disabled={inGame && selectedCategory !== "Letters"}
                onClick={() => {
                  startGame("Letters");
                }}
              />

              {(user && user.imagesUpload) || imagesUpload ? (
                <CategoryButtons
                  value="Custom"
                  styleClass="btn-outline-secondary btn-block buttonsAlignment button-image custom"
                  disabled={inGame && selectedCategory !== email}
                  onClick={() => {
                    console.log("getting images by Email", email);

                    startGameCustom(email);
                  }}
                />
              ) : null}
            </div>
            <div className="col-8">
              {myWords.length > 0 ? (
                <CardBoard
                  funWords={myWords}
                  reward={reward}
                  setReward={setReward}
                  twoCardsInPlay={twoCardsInPlay}
                  setTwoCardsInPlay={setTwoCardsInPlay}
                  solved={solved}
                  setSolved={setSolved}
                  cardStatus={cardStatus}
                  setCardStatus={setCardStatus}
                />
              ) : (
                <h1>Please select a Category</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      {throwConfetti()}
      {openModal()}
    </>
  );
};

export default PlayPage;
