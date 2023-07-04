const WhyVakilsearchSection = ({ data }) => {
  return (
    <section className="py-0 md:py-[60px] px-4 max-md:my-12 mx-auto rounded md:bg-gradient-to-b from-[#fffdf1] to-[#fffdf5]/0">
      <h2 className="font-bold leading-[42px] text-center mb-4 max-md:text-start text-[27px] md:text-[36px] md:mb-10">
        {data.title}
      </h2>
      <div className="mx-[20px] md:m-auto flex max-md:flex-col max-md:items-center justify-between max-w-[1080px] gap-6 z-[3] relative">
        {data.cards.map((card, index) => (
          <div
            className="w-[330px] h-[180px] md:w-[301px] md:h-[255px]"
            key={index}
          >
            <div className="relative w-full h-[46px] md:h-[121px] bg-[#fddb3a] rounded">
              <div className="flex flex-col items-center gap-4 absolute m-[6px] w-[318px] md:w-[289px] px-4 md:px-[21px] py-5 md:py-6 rounded text-center shadow-[2px_9px_22px_rgba(183,183,183,0.25)] bg-white">
                <div className="flex md:flex-col justify-center items-center gap-4">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="max-md:w-[19px] max-md:h-[19px]"
                  />
                  <h3 className="font-bold text-[18px] md:text-[20px]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-center text-[#606162]">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVakilsearchSection;
