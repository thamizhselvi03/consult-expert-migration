import { useState } from "react";
import parse from "html-react-parser";
import { Accordion, createStyles } from "@mantine/core";

import styles from "./styles.module.scss";

const useStyles = createStyles((theme) => ({
  item: {
    border: "1px solid #caced1",
    borderRadius: "4px",
    marginBottom: "10px",
    "&[data-active]": {
      border: "1px solid #007aff",
    },
  },
}));

const AreasOfExpertiseSection = (props) => {
  const {
    data: { title, areas },
    isMobile,
  } = props;

  const { classes } = useStyles();

  const [active, setActive] = useState("0");

  const handleAreaClick = (index) => {
    setActive(`${index}`);
  };

  return (
    <div className="py-0 px-4 md:px-[50px] my-[48px] mx-0 mt-[32px] max-w-[1180px] md:my-[90px] md:mx-auto">
      <h2 className="font-bold leading-[42px] text-center mb-4 max-md:text-start text-[27px] md:text-[36px] md:mb-10">
        {title}
      </h2>
      {!isMobile && (
        <div className="flex gap-12">
          <div className="flex flex-col gap-5">
            {areas.map((area, index) => (
              <div
                key={index}
                className={`py-[19px] px-4 rounded bg-white border-[1px] border-[#caced1] text-[#606162] whitespace-nowrap cursor-pointer ${
                  index == active &&
                  "bg-[#e6f2ff] border-[1px] border-[#007aff] text-black"
                } ${index != active && "hover:text-[#4da3ff]"}`}
                onClick={() => handleAreaClick(index)}
              >
                <h2 className="font-bold text-[20px] leading-[23px]">
                  {area.title}
                </h2>
              </div>
            ))}
          </div>
          {areas[active] && (
            <div className="details">
              <p className="font-[500] leading-7 text-[16px] text-[#231f20]">
                {parse(areas[active].description)}
              </p>
              <div>
                <ul className="flex gap-5 flex-col mt-8">
                  {areas[active]?.services?.map((service, index) => (
                    <li
                      className="flex gap-5 justify-start items-center"
                      key={index}
                    >
                      <img src="/check.svg" alt="check" />
                      <p className="text-[16px] leading-[19px]">
                        {parse(service)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
      {isMobile && (
        <div className="expertise-container-mobile">
          <Accordion
            value={active}
            offsetIcon={false}
            iconPosition="right"
            disableChevronRotation
            onChange={(state) => {
              if (state != null) setActive(state);
            }}
            classNames={{
              ...classes,
              itemTitle: styles.accordionItemTitle,
              control:"bg-[#e6f2ff] border-b-[1px] border-[#007aff] text-[#000]",
              label:"font-['Roboto] text-[20px] leading-[30px] text-[#231f20]",
              contentInner:"pt-0 pb-4 md:pt-4 md:px-4 md:pb-0",
            }}
            styles={{
              label: { lineHeight: 1.5 },
            }}
          >
            {areas.map((area, index) => {
              return (
                <Accordion.Item value={`${index}`} key={index}>
                  <Accordion.Control
                  // chevron={<Icon open={stateAccordions === `${index}`} />}
                  >
                    <h2>{area.title}</h2>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="details">
                      <p className="font-medium leading-7 text-[16px] text-[#231f20]">
                        {parse(area.description)}
                      </p>
                      <div>
                        <ul className="flex gap-5 flex-col mt-8">
                          {area.services.map((service, index) => (
                            <li
                              className="flex gap-5 justify-start items-center"
                              key={index}
                            >
                              <img
                                src="/check.svg"
                                alt="check"
                                className="max-md:w-[22px]"
                              />
                              <p className="text-[16px] leading-[19px]">
                                {parse(service)}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default AreasOfExpertiseSection;
