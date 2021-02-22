import React, { useState, useEffect, useContext, } from "react";
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

// import Timer from "../components/Timer";
// import Timer from "../components/Timer-3";
import "../components/Timer.css";
// import {seconds} from "../components/Timer";

// import Apple from "../components/Timer-2";


// import Component from "../components/AudioTest-1";
// import Component from "../components/AudioTest-2";
import PlaySound from "../components/AudioTest-3";
// import Component from "../components/AudioTest-4";
// import Player from "../components/AudioTest-4";
// import MyComponentWithSound from "../components/AudioTest-6";
// import ReactPlayer from 'react-player';

// import "../components/Timer.css";

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
  const [cardStatus, setCardStatus] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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

  //******************* Timer**********************/
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  useEffect(() => {
    reset()
  }, [])


  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

  }, [isActive, seconds]);



  //*************************Timer*********************** */

  const throwConfetti = () => {
    if (reward === true) {
      return <Confetti1 />;
    }
  };

  const openModal = () => {
    if (showModal === true) {

      return (
        <div>
          <RewardModal />;
        </div>
      )
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
    
    <div className="playPage-image">
        {/* <div>
        <PlaySound/>
        <GoBackButton />,
        </div> */}
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
              <div> <PlaySound/>
                    <GoBackButton />
                {/* <Timer/> */}
            </div>
            <CategoryButtons
              // className={`${isActive ? 'active' : 'inactive'}`} 
              value="Animals"
              styleClass="btn-outline-secondary btn-block buttonsAlignment button-image animals"
              disabled={inGame && selectedCategory !== "Animals"}
              onClick={() => {
                startGame("Animals");
                toggle();
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
          <div className="cardDeck">
            <div>{seconds}s</div>
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
            ) : (<h1>Please select a Category</h1>)
            }

          </div>
        </div>
      </div>
      { throwConfetti()}
      { openModal()}
      {/* {reset()} */}
    </div>
  );
};

export default PlayPage;
