import MainShowcase from "../MainShowcase";
import ProcessSection from "../ProcessSection";
import LawyersAvailable from "../../ui/LawyersAvailable";

const MainSection = (props) => {
  const { isMobile, data, serviceId } = props;

  return (
    <section className="px-4 relative" id="banner-top">
      <div className="max-w-[1200px] m-auto mt-[20px] md:mt-[70px] flex max-md:flex-col md:justify-between md:gap-20">
        <MainShowcase isMobile={isMobile} data={data} />
        {/* <TalkToLawyerForm
          serviceId={serviceId}
          isMobile={isMobile}
          data={data.form}
        /> */}
        {isMobile && data?.lawyersAvailable && (
          <LawyersAvailable data={data.lawyersAvailable} isMobile={isMobile} />
        )}
      </div>
      <ProcessSection
        isMobile={isMobile}
        data={data.process}
        statistics={data.statistics}
      />

      <div className="hidden md:block absolute -top-20 right-0 overflow-hidden -z-10">
        <img
          src="/main-section-gradient.svg"
          alt="main-section-gradient"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default MainSection;
