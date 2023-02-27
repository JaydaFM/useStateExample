import React, { useState } from "react";
import "./App.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 143) : text}
      <button onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </button>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
          Now here you go again, you say you want your freedom. Well, who am I to
          keep you down? It's only right that you should play the way you feel
          it But listen carefully to the sound of your loneliness Like a
          heartbeat, drives you mad In the stillness of remembering what you had
          And what you lost And what you had And what you lost Oh, thunder only
          happens when it's raining Players only love you when they're playing
          Say, women, they will come and they will go When the rain washes you
          clean, you'll know You'll know. 
        </ReadMore>
      </h2>
    </div>
  );
};

export default Content;
