import { Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const RemoteHeader = dynamic(() => import("header/component"), {
  ssr: false,
});
const RemoteFooter = dynamic(() => import("footer/component"), {
  ssr: false,
});

const ZOLVIT_BAR_KEY = "zolvitAnnouncementsBarShown";

const Landing = (props) => {
  const [showZolvitAnnouncement, setShowZolvitAnnouncement] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [barHeight, setBarHeight] = useState(40);

  useEffect(() => {
    const onWindowResize = () => {
      setIsMobile(window.innerWidth < 768);
      const height = document.querySelector(
        ".zolvit-announcement-bar"
      )?.offsetHeight;
      height && setBarHeight(height);
    };
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  useEffect(() => {
    const announcementShown = localStorage.getItem(ZOLVIT_BAR_KEY);
    !announcementShown && setShowZolvitAnnouncement(true);
  }, []);

  const handleAnnouncementClose = () => {
    localStorage.setItem(ZOLVIT_BAR_KEY, "true");
    setShowZolvitAnnouncement(false);
  };

  props = {
    ...props,
    isMobile,
    showZolvitAnnouncement,
    onAnnouncementClose: handleAnnouncementClose,
    setBarHeight,
  };
  return (
    <Fragment>
      {!props.noheader && <RemoteHeader {...props} />}
      {showZolvitAnnouncement && (!props.defaultwhitecolor || props.fixed) && (
        <div style={{ paddingTop: `${barHeight}px` }}></div>
      )}
      {props.children}
      <div>{!props.nofooter && <RemoteFooter {...props} />}</div>
    </Fragment>
  );
};

export default Landing;
