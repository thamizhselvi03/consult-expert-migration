import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import pagesWithWidget from "./pagesWithWidget.json";

import { useTransition } from "react-spring";

const WidgetBody = dynamic(() =>
  import("./WidgetBody.jsx" /* webpackChunkName: "WidgetBody" */)
);

const LeftSideWidget = ({ data }) => {
  const [showWidget, setShowWidget] = useState(false);
  const [firstTimerId, setFirstTimerId] = useState("");
  const [secondTimerId, setSecondTimerId] = useState("");
  const [firstTimerShowed, setFirstTimerShowed] = useState(false);
  const [ismobile, setIsmobile] = useState(false);

  const windowResize = () => {
    setIsmobile(window.innerWidth < 992);
  };

  useEffect(() => {
    windowResize();
    window.addEventListener("resize", windowResize);
    return () => window.removeEventListener("resize", windowResize);
  }, []);

  const { serviceName, url } = data?.service;
  const transitions = useTransition(showWidget, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const firstOption = () => {
    setShowWidget(true);
    setTimeout(() => {
      setShowWidget(false);
      setFirstTimerShowed(true);
    }, 6000);
  };

  const timer = () => {
    const start = Date.now();
    console.log("starting timer...");
    setInterval(() => {
      const millis = Date.now() - start;
      console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    }, 1000);
  };

  useEffect(() => {
    // timer();

    if (firstTimerId) {
      clearInterval(firstTimerId);
    }
    if (secondTimerId) {
      clearInterval(secondTimerId);
    }
    if (pagesWithWidget.includes(url)) {
      setFirstTimerShowed(false);
      const firstId = setTimeout(firstOption, 20000);
      const secondId = setTimeout(firstOption, 140000);
      setFirstTimerId(firstId);
      setSecondTimerId(secondId);
    }
  }, [url]);

  return transitions(
    (style, item) =>
      item &&
      !ismobile && (
        <WidgetBody
          animation={style}
          serviceName={serviceName}
          firstTimerShowed={firstTimerShowed}
        />
      )
  );
};

export default LeftSideWidget;
