import ProcessFlow from "./ProcessFlow";
import ProcessMobile from "./ProcessMobile";
import ReviewContainer from "./ReviewContainer";

const ProcessSection = (props) => {
  const { isMobile, data, statistics } = props;

  return (
    <section className="max-w-[1200px] m-auto mt-7 flex flex-col">
      <div className="flex justify-between gap-[90px] max-md:w-full max-md:flex-col items-start max-md:gap-7 md:items-center">
        {isMobile ? (
          <ProcessMobile processFlow={data} />
        ) : (
          <ProcessFlow processFlow={data} />
        )}
        <ReviewContainer isMobile={isMobile} data={statistics} />
      </div>
    </section>
  );
};

export default ProcessSection;
