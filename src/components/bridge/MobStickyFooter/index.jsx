import { Fragment } from "react";

/**
 * Mobile sticky footer with CTA button which focuses lead form input field
 */
const StickyFooter = (props) => {
  const { inputId = "service_form_primary_email" } = props;
  const submitButton =
    props?.data?.submitbtn ||
    (props.isHindiPage ? "आएँ शुरू करें" : "Talk to an Expert");

  function handleFocus() {
    document?.getElementById("banner-top").scrollIntoView({
      behavior: "smooth",
    });
    if (navigator.userAgent.toLowerCase().includes("android")) {
      const email_id = document.getElementById(inputId);
      email_id?.focus();
    }
  }
  return (
    <Fragment>
      <div className="h-[75px] bg-transparent"></div>
      <div className="fixed bottom-0 bg-white shadow-[0px_-2px_4px_rgba(0,0,0,0.13)] text-center h-[75px] w-full z-[999]">
        <button
          className="cursor-pointer w-[90%] m-[10px] py-[15px] px-5 bg-[#fdd106] rounded-lg text-[18px] font-semibold text-black border-none"
          onClick={() => {
            handleFocus();
          }}
        >
          {submitButton}
        </button>
      </div>
    </Fragment>
  );
};
export default StickyFooter;
