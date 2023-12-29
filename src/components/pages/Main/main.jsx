import React from "react";
import "./main.scss";

const Main = () => {
  return (
    <div className="Container">
      <div className="SubContainer">
        <img className="Logo1" src="/images/Logo1.png" alt="Logo1" />
        <h4 className="SubDes">당신의 취향에 맞는 전통주를 찾아드립니다!</h4>
        <button className="StartBtn">시작하기</button>
      </div>
    </div>
  );
};

export default Main;
