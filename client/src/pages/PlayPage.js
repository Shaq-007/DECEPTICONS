import React from "react";
import CardBoard from "../components/CardBoard";
import { funWords } from "../fakeDatabase.js/funWords";
import "../components/CardBoard.css";
import "../pages/PlayPage.css";
import GoBackButton from "../components/GoBackButton";

const PlayPage = () => {
  return (
    <>
      <div className="playPage-image">
        <GoBackButton />
        <div className="container-fluid containerAlignment">
          <CardBoard funWords={funWords} />
        </div>
      </div>
    </>
  );
};

funWords.sort(() => Math.random() - 0.5);

export default PlayPage;
