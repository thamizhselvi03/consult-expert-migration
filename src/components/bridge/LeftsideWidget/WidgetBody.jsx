import { useState, useEffect } from "react";
import Image from "next/image";
import { animated } from "react-spring";

import { citiesJson } from "@/data/cities";
import maleNames from "./maleNames.json";
import femaleNames from "./femaleNames.json";

import styles from "./styles.module.scss";

const WidgetBody = ({ animation, serviceName, firstTimerShowed }) => {
  const [city, setCite] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setCite(
      citiesJson[0].cities[
        getRandomArbitrary(0, citiesJson[0].cities.length - 1)
      ].text
    );
    const names = [...maleNames, ...femaleNames];
    let currentName;
    let localNames;

    if (JSON.parse(localStorage.getItem("widget names"))) {
      localNames = JSON.parse(localStorage.getItem("widget names"));
    } else {
      localNames = [];
    }
    if (localNames.length === names.length) {
      localNames = [];
    }

    do {
      currentName = names[getRandomArbitrary(0, names.length - 1)];
    } while (localNames.includes(currentName));

    localStorage.setItem(
      "widget names",
      JSON.stringify([...localNames, currentName])
    );

    setName(currentName);
  }, []);

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <animated.div style={animation} className={styles.widgetBody}>
      <div className={styles.userLogo}>{name[0]}</div>
      <div className={styles.wrap}>
        <p className={styles.userData}>
          <span className={styles.name}>{name}</span> from <span>{city}</span>
        </p>
        <p className={styles.serviceData}>
          {`${
            serviceName == "booked the lawyer consultation" ? "" : "applied for"
          }`}{" "}
          {serviceName ? serviceName : "IEC certificate"}.
        </p>
        <div className={styles.timeData}>
          <p className={styles.time}>{firstTimerShowed ? 10 : 20} min ago</p>
          <p className={styles.verified}>
            <Image
              src={
                "https://assets.vakilsearch.com/live-images/iconoir_twitter-verified-badge.svg"
              }
              alt="VerifyIcon"
              width={16}
              height={17}
            />
            Verified
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default WidgetBody;
