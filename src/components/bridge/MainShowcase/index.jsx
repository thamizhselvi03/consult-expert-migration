import Benefits from "../../ui/Benefits";
import LawyersAvailable from "../../ui/LawyersAvailable";
import parse from "html-react-parser";

const MainShowcase = ({ isMobile, data }) => {
  return (
    <div>
      <div>
        <h1 className="text-[#231f20] font-bold text-[32px] md:text-[50px] max-w-[600px] leading-[1.15]">
          {parse(data.title)}
        </h1>
        {!data.hideYellowBar && (
          <hr className="border-t-4 border-[#fcd209] m-0 w-[96%] md:w-[89%]" />
        )}
      </div>
      <Benefits data={data} />
      {!isMobile && data.lawyersAvailable && (
        <LawyersAvailable data={data.lawyersAvailable} isMobile={isMobile} />
      )}
    </div>
  );
};

export default MainShowcase;
