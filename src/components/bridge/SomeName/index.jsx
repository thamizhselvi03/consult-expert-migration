import MainSection from "../MainSection";
import ttlcontent from "@/data/talk-to-lawyer.json";
import ttcacontent from "@/data/talk-to-ca.json";
import ttcscontent from "@/data/talk-to-cs.json";
import intellectual from "@/data/intellectual-property-lawyer.json";
import interlinks from "@/data/interlinks.json";
import LeftSideWidget from "../LeftsideWidget";
import { useEffect, useState } from "react";
import LawyerCardsSection from "../../ui/LawyerCardSection";
import FixedWidget from "../FixedWidget";
import AreasOfExpertiseSection from "../AreasOfExpertise";
import MobStickyFooter from "../MobStickyFooter";
import ReviewsSection from "../ReviewSection";
import WhyVakilsearchSection from "../WhyVakilsearch";
import FAQSection from "../FaqSection";
import TypesSection from "../TypesOfLawyer";

const MainPage = ({ isMobile }) => {
  const [visibleStickyFooter, setVisibleStickyFooter] = useState(false);

  useEffect(() => {
    const toggleVisibleStickyFooter = () => {
      const scrolled = document.body.scrollTop || window.pageYOffset;
      if (scrolled > 500) {
        const container = document.getElementById("kommunicate-widget-iframe");
        if (container != null) {
          container.style.marginBottom = "70px";
        }
        setVisibleStickyFooter(true);
      } else if (scrolled <= 500) {
        const container = document.getElementById("kommunicate-widget-iframe");
        if (container != null) {
          container.style.marginBottom = "0";
        }
        setVisibleStickyFooter(false);
      }
    };
    window.addEventListener("scroll", () => toggleVisibleStickyFooter(), true);
    return () =>
      window.removeEventListener(
        "scroll",
        () => toggleVisibleStickyFooter(),
        false
      );
  }, []);

  const data = { ...ttlcontent, interlinks };
  const { content } = data;

  return (
    <>
      {data?.service && <LeftSideWidget data={data?.service} />}
      <MainSection
        serviceId={data?.serviceId}
        serviceContent={data?.content}
        data={data?.content.sections.mainSection}
        isMobile={isMobile}
      />
      {!isMobile && visibleStickyFooter && content?.sections?.fixedWidget && (
        <FixedWidget
          data={content.sections.fixedWidget}
          inputId={"service_form_primary_mobile"}
        />
      )}
      {content.sections.lawyerProfile && (
        <LawyerCardsSection data={content.sections.lawyerProfile} />
      )}
      <AreasOfExpertiseSection
        data={content.sections.areasOfExpertise}
        isMobile={isMobile}
      />
      {data.lawyerTypes && (
        <TypesSection isMobile={isMobile} data={content.sections.lawyerTypes} />
      )}
      <div className="relative">
        <WhyVakilsearchSection data={content.sections.whyVakilsearch} />
        <ReviewsSection isMobile={isMobile} data={content.sections.reviews} />
        <div className="max-md:hidden absolute top-[180px] right-0 w-[210px] overflow-hidden">
          <img
            src="/why-vs-section-gradient.svg"
            alt="why-vs-section-gradient"
            className="w-full"
          />
        </div>
      </div>
      <FAQSection data={content.sections.faq} />
      {isMobile && visibleStickyFooter && (
        <MobStickyFooter
          data={{ submitbtn: content.sections.mainSection.form.submit }}
          isHindiPage={false}
          inputId={"service_form_primary_mobile"}
        />
      )}
    </>
  );
};

export default MainPage;
