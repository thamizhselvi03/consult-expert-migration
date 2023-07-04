import Image from "next/image";
import styles from "./styles.module.scss";

const FixedWidget = (props) => {
  const {
    data: { widgetContent, widgetLink },
    inputId,
  } = props;
  function handleFocus() {
    document?.getElementById("banner-top").scrollIntoView({
      behavior: "smooth",
    });
    const email_id = document.getElementById(inputId);
    email_id?.focus();
  }
  return (
    <>
      <div className={styles.fixedMainSection}>
        <div>
          <Image
            src="https://assets.vakilsearch.com/live-images/time-clock-widget.svg"
            width={26}
            height={24}
          />
        </div>
        <div className={styles.widgetContentSection}>
          <p className={styles.widgetContent}>{widgetContent}</p>
          <div
            className={styles.widgetLink}
            onClick={() => {
              handleFocus();
            }}
          >
            {widgetLink}
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedWidget;
