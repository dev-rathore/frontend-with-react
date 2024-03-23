import React, { MouseEvent, useRef, useState } from "react";

import videoSrc from "../../assets/videos/marvel-studios.mp4";
import { BsChatSquareTextFill, BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { MdOutlineForward10, MdOutlineReplay10 } from "react-icons/md";
import { PiMonitorPlayFill } from "react-icons/pi";
import Dropdown from "./dropdown.component";

const CustomizedVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controlsVisibility, setControlsVisibility] = useState(false);
  const [hoveredOnControls, setHoveredOnControls] = useState(false);
  const [control, setControl] = useState("play");
  const [videoDuration, setVideoDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleControlsVisibilityOnMouseMove = () => {
    setControlsVisibility(true);
    setTimeout(() => {
      if (!hoveredOnControls) {
        setControlsVisibility(false);
      }
    }, 5000);
  }

  const videoHandler = () => {
    if (control === "play") {
      videoRef.current?.play();
      setControl("pause");
      setVideoDuration(videoRef.current?.duration as number);
    } else if (control === "pause") {
      videoRef.current?.pause();
      setControl("play");
    }
  };

  const jumpToTime = (e: MouseEvent<HTMLDivElement>) => {
    const currentWidth = e.nativeEvent.offsetX;
    const time = (videoDuration / (progressBarRef.current?.offsetWidth as number)) * currentWidth;

    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }

    if (control === "play") {
      videoRef.current?.play();
      setControl("pause");
    }
  }

  const fastForward10Seconds = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const revert10Seconds = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime as number);
    const progressValue = Math.floor((videoRef.current?.currentTime as number / videoDuration) * 100);
    if (progressValue !== Infinity) {
      setProgress(Math.floor((videoRef.current?.currentTime as number / videoDuration) * 100));
    }

    if (videoRef.current?.ended) {
      setControl("play");
    }
  }, 500);

  return (
    <div
      className="bg-black text-white min-h-screen flex flex-col"
      onMouseMove={handleControlsVisibilityOnMouseMove}
    >
      <h1
        className="
          text-3xl
          text-center
          font-bold
          p-8
          bg-gradient-to-r
          from-green-400
          to-blue-500
          text-transparent
          bg-clip-text
        "
      >
        Customized Video Player
      </h1>
      <div
        className="
          relative
          grow
          flex
          flex-col
          justify-center
          items-center
        "
      >
        <video
          className="h-full"
          ref={videoRef}
          src={videoSrc}
          width="100%"
          height="100%"
        >
          {/* <source src="movie.mp4" type="video/mp4" /> */}
        </video>
        <div
          className="
            absolute
            top-20
            right-10
            p-2
            rounded
            flex
            items-center
            gap-6
          "
        >
          <Dropdown
            label={'Quality'}
            labelStartEnhancer={<PiMonitorPlayFill />}
            showSelectedOptionInLabel={true}
            items={["1080p", "720p", "480p"]}
          />
          <Dropdown
            label={'Audio & Subtitles'}
            labelStartEnhancer={<BsChatSquareTextFill />}
            showSelectedOptionInLabel={false}
            items={["Hindi", "English", "Japanese"]}
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoveredOnControls(true);
          }}
          onMouseOut={() => {
            setHoveredOnControls(false);
          }}
          onMouseLeave={() => {
            setHoveredOnControls(false);
          }}
          className={`
            ${controlsVisibility ? "opacity-100" : "opacity-0"}
            flex
            justify-center
            gap-6
            text-white
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            text-5xl
            cursor-pointer
          `}
        >
          <div
            onClick={revert10Seconds}
          >
            <MdOutlineReplay10 />
          </div>
          <div
            onClick={videoHandler}
          >
            {control === "play" ? <BsPlayCircle /> : <BsPauseCircle />}
          </div>
          <div
            onClick={fastForward10Seconds}
          >
            <MdOutlineForward10 />
          </div>
        </div>
        <div className="flex w-full gap-3 pt-4 px-4 cursor-pointer">
          <div>
            {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </div>
          <div
            ref={progressBarRef}
            onClick={(e) => jumpToTime(e)}
            className="
              w-full
              h-2
              bg-gray-400
              rounded-full
              overflow-hidden
              relative
              mt-2
            "
          >
            <div
              className="
                h-full
                bg-gradient-to-r
                from-green-400
                to-blue-500
                absolute
                top-0
                left-0
                rounded-full
              "
              style={{
                width: (progress) + "%",
              }}
            />
          </div>
          <div>
            {Math.floor(videoDuration / 60) + ":" + ("0" + Math.floor(videoDuration % 60)).slice(-2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedVideoPlayer;

// https://blog.avneesh.tech/create-a-custom-video-player-in-react
