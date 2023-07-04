import FAQ from "@/components/ui/FAQ";

const classes = {
  question: "font-semibold text-[20px] text-[#231f20]",
  container: "m-auto p-0",
  chevron: "text-black",
};

const styles = {
  icon: {
    color: "#000",
  },
};

const FAQSection = ({ data }) => {
  return (
    <section className="my-8 mx-auto relative">
      <h2 className="font-bold leading-[42px] text-center mb-4 max-md:text-start text-[27px] md:text-[36px] md:mb-10">
        {data.title}
      </h2>
      {data?.faqs && (
        <FAQ faqData={data.faqs} classes={classes} externalStyles={styles} />
      )}
      <div className="max-md:hidden absolute top-[-0.5rem] -left-4 overflow-hidden -z-50">
        <img
          src="/faqs-section-gradient.svg"
          alt="faqs-section-gradient"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default FAQSection;
