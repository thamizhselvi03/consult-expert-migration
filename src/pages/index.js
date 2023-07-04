import { useEffect, useState } from "react";
import { debounce } from "lodash";
import Landing from "@/components/bridge/Landing";
import MainPage from "@/components/bridge/SomeName";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const onWindowResize = debounce(() => {
    setIsMobile(window.innerWidth < 768);
  }, 50);

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return (
    <>
      <Landing hideprivacy={true} defaultwhitecolor={"whitenavbar"}>
        {/* <TalkToLawyer data={data} isMobile={isMobile} /> */}
        <MainPage isMobile={isMobile} />
      </Landing>
    </>
  );
}
