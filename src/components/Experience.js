import React, { useState } from "react";
const textuxui = "Working on providing a system and QR code for grocery shop owners to collect and analyze data to increase sales revenue. I have researched on Agriculture problems and created a prototype of this system. Tools: Figma, canva";
      
const textdata =
  "Working on labeling images, correct language. Tools: Post annotation, V7.";

const texttraining = "I have joined training such as Mobile game, Flutter app, White hacker, Electron desktop, Fintech. These training sessions we work as a team and do research as well as learn new technologies to build web, desktop and mobile applications. Technologies: Buildbox, Flutter, Electron.";

const textweb =
  "Focusing on front-end web development with ReactJS. Technologies: Html, css, javascript, TailwindCSS, ReactJS.";
 
function Experience() {
  const [isShowMore, setIsShowMore] = useState(true);
  const [isShowMore1, setIsShowMore1] = useState(true);
  const [isShowMore2, setIsShowMore2] = useState(true);
  const [isShowMore3, setIsShowMore3] = useState(true);
  const toggleReadMore = () => {
    setIsShowMore(!isShowMore);
  };
  const toggleReadMore1 = () => {
    setIsShowMore1(!isShowMore1);
  };
  const toggleReadMore2 = () => {
    setIsShowMore2(!isShowMore2);
  };
  const toggleReadMore3 = () => {
    setIsShowMore3(!isShowMore3);
  };
  return (
    <div className="my-2.5 m-auto w-3/5">
      <p className="font-semibold text-left">Experience</p>
      <hr className="bg-gray-300 h-0.5 my-2.5"></hr>
      <div className="flex sm:max-md:flex-col  gap-5 items-center">
        <div className="shadow-lg rounded-2xl my-2.5 p-5 border-b-2 w-full h-full hover:bg-slate-300 ">
          <p className="font-semibold">Researcher & UX/UI designer</p>
          <p>Agritech at Kirirom Institute of Technology</p>
          <p>2021-2022</p>
          <p>{isShowMore ? " " : textuxui}</p>
          {textuxui && textuxui.length > 0 && (
            <p
              onClick={toggleReadMore}
              className="text-blue-400 hover:cursor-pointer hover:text-blue-500 hover:font-semibold"
            >
              {isShowMore ? "Show more" : "Show less"}
            </p>
          )}
        </div>
        <div className="shadow-lg rounded-2xl my-2.5 p-5 border-b-2 w-full h-full hover:bg-slate-300">
          <p className="font-semibold">Data Annotator</p>
          <p>Kirirom Digital</p>
          <p>2019-2023</p>
          <p>{isShowMore1 ? " " : textdata}</p>
          {textdata && textdata.length > 0 && (
            <p
              onClick={toggleReadMore1}
              className="text-blue-400 hover:cursor-pointer hover:text-blue-500 hover:font-semibold"
            >
              {isShowMore1 ? "Show more" : "Show less"}
            </p>
          )}
        </div>
      </div>

      <div className="flex sm:max-md:flex-col gap-5 items-center">
        <div className="shadow-lg rounded-2xl my-2.5 p-5 border-b-2 w-full hover:bg-slate-300">
          <p className="font-semibold">Training</p>
          <p>Incubation Center</p>
          <p>{isShowMore2 ? " " : texttraining}</p>
          {texttraining && texttraining.length > 0 && (
            <p
              onClick={toggleReadMore2}
              className="text-blue-400 hover:cursor-pointer hover:text-blue-500 hover:font-semibold"
            >
              {isShowMore2 ? "Show more" : "Show less"}
            </p>
          )}
        </div>
        <div className="shadow-lg rounded-2xl my-2.5 p-5 border-b-2 w-full hover:bg-slate-300">
          <p className="font-semibold">Frontend Web Development</p>
          <p>Self-learning</p>
          <p>{isShowMore3 ? " " : textweb}</p>
          {textweb && textweb.length > 0 && (
            <p
              onClick={toggleReadMore3}
              className="text-blue-400 hover:cursor-pointer hover:text-blue-500 hover:font-semibold"
            >
              {isShowMore3 ? "Show more" : "Show less"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
