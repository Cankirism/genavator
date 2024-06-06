import Axios from "axios";
import { useState } from "react";
import { downloadAvatar } from "../utils/downloadAvatar";
import "../avatar.css"
const Avatar = () => {
  const [style, setStyle] = useState("bottts");
  const [seed, setSeed] = useState(1000);
  const [counter, setCounter] = useState(0);

  const handleStyle = (style) => {
    setStyle(style);
  };

  const handleSeed = () => {
    setCounter((prev) => counter + 1);
  };

  const downloadImage = async () => {
    const imageUrl = `https://api.dicebear.com/8.x/${style}/svg?seed=${counter}`;

    await downloadAvatar(imageUrl);
  };

  return (
    <div className="container">
      {/* <div className="nav">
        <p> Random Avatar Generator</p>
      </div> */}
      <div className="home">
        <div className="btns">
          <button
            onClick={() => {
              handleStyle("avataaars");
            }}
          >
            Human
          </button>
          <button
            onClick={() => {
              handleStyle("pixel-art");
            }}
          >
            Pixel
          </button>
          <button
            onClick={() => {
              handleStyle("bottts");
            }}
          >
            Bots
          </button>
          <button
            onClick={() => {
              handleStyle("croodles");
            }}
          >
            Croodless
          </button>
          <button
            onClick={() => {
              handleStyle("notionists");
            }}
          >
            Notionists
          </button>
          <button
            onClick={() => {
              handleStyle("miniavs");
            }}
          >
            Miniavs
          </button>
          <button
            onClick={() => {
              handleStyle("adventurer");
            }}
          >
            Adventurer
          </button>
        </div>
        <div className="avatar">
          <img
            src={`https://api.dicebear.com/8.x/${style}/svg?seed=${counter}`}
            alt="Sprite"
          />
        </div>
        <div className="generate">
          <button
            id="gen"
            onClick={() => {
              handleSeed();
            }}
          >
            Next
          </button>
          <button
            id="down"
            onClick={() => {
              downloadImage();
            }}
          >
            Download
          </button>
        </div>
        <div style={{fontFamily:"serif"}} >
            <p>Developed by Faruk GÜNGÖR </p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
