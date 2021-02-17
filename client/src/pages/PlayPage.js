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
import {AuthContext} from '../components/AuthContext';

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
  // const [categoryName, setCategoryName] = useState("");

  const {user, categoryName, setCategoryName, email, upload,setUpload,imagesUpload, setImagesUpload} = useContext(AuthContext);
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

  const getImages = async (categoryName) => {
    let response = await fetch("/images/" + categoryName);
    let data = await response.json();
    setImages(data);
    console.log("this is the data", data);
  };

  const getImages_custom = async (email) => {
    let response = await fetch("/custom/" + email);
    if(response.status === 400){
      let error = await response.text()
      alert(error)
      setUpload(false)
    } else {
      console.log("this is the response", response);
      let data = await response.json();
      setImages(data);
      console.log("this is the data from playpage", data);
      if(data.length === 0){
      alert("sorry, you really do not have images in DB, go back and upload images if you want to play with them")
      setUpload(false)
      }
    }
  };

  useEffect(() => {
    getImages("Colors");
  }, []);

  useEffect(() => {
    if (!images) {
      return;
    }
    const copyOfWords = funWords.slice();
    images.forEach((i, index) => {
      let b64 = giveMeTheImage(i.img);
      copyOfWords[index].base64img = b64;
    });
    setMyWords(copyOfWords);
  }, [images]);

  shuffle(myWords);

  return (
    <>
      <div className="playPage-image">
        <GoBackButton />
        <RewardModal
          reward={reward}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className="containerAlignment">
          <div className="row rowAlignment">
            <div className=" col-4 categoryRow">
              <CategoryButtons
                value="Animals"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image animals"
                onClick={() => {
                  getImages("Animals");
                }}
              />

              <CategoryButtons
                value="Shapes"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image shapes"
                onClick={() => {
                  getImages("Shapes");
                }}
              />

              <CategoryButtons
                value="Colors"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image colors"
                onClick={() => {
                  getImages("Colors");
                }}
              />

              <CategoryButtons
                value="Letters"
                styleClass="btn-outline-secondary btn-block buttonsAlignment button-image letters"
                onClick={() => {
                  getImages("Letters");
                }}
              />

              {/* here need a condition, if user is parent, show this otherwise do not show */}
              {/* <UploadModal
                categoryName={categoryName}
                setCategoryName={setCategoryName}
              /> */}

              {user && imagesUpload ? (
                // <CategoryButtons
                //   value="Custom"
                //   styleClass="btn-outline-secondary btn-block buttonsAlignment button-image custom"
                //   onClick={() => {
                //    console.log("getting imagess", categoryName);

                //     getImages(categoryName);
                //   }}
                // />
                <CategoryButtons
                  value="Custom"
                  styleClass="btn-outline-secondary btn-block buttonsAlignment button-image custom"
                  onClick={() => {
                   console.log("getting images by Email", email);

                   getImages_custom(email);
                  }}
                />
              ) : null}
            </div>
            <div className="col-8">
              <CardBoard
                funWords={myWords}
                reward={reward}
                setReward={setReward}
              />
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
