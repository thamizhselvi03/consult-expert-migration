import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const timings = [
  {
    minRange: 9,
    maxRange: 14,
    random: [101, 199],
    ongoing: [25, 49],
  },
  {
    minRange: 14,
    maxRange: 24,
    random: [201, 299],
    ongoing: [75, 99],
  },
  {
    minRange: 20,
    value: 500,
  },
];

const availableLawyers = 500;
// const ongoingLayers = 'No ongoing calls';

const LawyersAvailable = ({ isMobile, data }) => {
  const { lawyer, weekend } = data;
  const [content, setContent] = useState(null);

  const date = moment();

  const isWeekEnd = (date) => {
    const currentDay = date.isoWeekday();
    return currentDay == 7;
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getLaywersOnline = () => {
    const hour = date.hour();

    if (isWeekEnd(date))
      return { lawyers: availableLawyers, ongoingCalls: 0, dot: false };

    for (const time of timings) {
      if (hour >= time.minRange && hour < time.maxRange)
        return {
          lawyers: getRandomInt(...time.random),
          ongoingCalls: getRandomInt(...time.ongoing),
          dot: true,
        };
    }

    return { lawyers: availableLawyers, ongoingCalls: 0, dot: false };
  };

  useEffect(() => {
    setContent(getLaywersOnline());
  }, []);

  if (!content) return null;

  return (
    <>
      <section className={styles.flexContainer}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <Image
              src="https://assets.vakilsearch.com/live-images/available-lawyers-ttl.svg"
              layout="fill"
              alt="talk-to-lawyer"
            />
          </div>
          <div className={styles.subFlexContainer}>
            <div className={styles.textContainer}>
              {content.lawyers}
              {isWeekEnd(date) || date.hour() >= 20 || date.hour() < 9
                ? weekend
                : lawyer}
            </div>
            {content.dot == true && <div className={styles.dot}></div>}
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.callsImage}>
            <Image
              src="https://assets.vakilsearch.com/live-images/whatsapp-icon-calls.svg"
              width={24}
              height={24}
              alt="talk-to-lawyer"
            />
          </div>
          <div className={styles.subFlexContainer}>
            <div className={styles.textContainer}>
              {content.ongoingCalls <= 0 ? "No" : `+ ${content.ongoingCalls}`}{" "}
              ongoing calls
            </div>
            <div className={styles.orangeDot} />
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyersAvailable;
