import Image from "next/image";

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
      <div className="w-full h-[44px] py-[10px] px-0 bg-[#fdecec] text-center flex gap-[10px] justify-center items-center fixed top-[110px] z-[999] ">
        <div>
          <Image
            src="https://assets.vakilsearch.com/live-images/time-clock-widget.svg"
            width={26}
            height={24}
          />
        </div>
        <div className="flex gap-2">
          <p className="font-[600] leading-[19px] text-[#171717]">{widgetContent}</p>
          <div
            className="font-[600] leading-[19px] text-[#e83e3e] underline cursor-pointer"
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
