import { Fragment, useState } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { Accordion } from "@mantine/core";
// import { CalculatorRenderHelper } from "../calculators/CalculatorRenderHelper";

const renderanchortag = function (lists) {
  return lists.map((itemlist, itemlistindex) => {
    if (itemlist.type == "anchor" && itemlist.external == true) {
      return (
        <a
          key={"acnhorIndex+" + itemlistindex}
          href={itemlist.href}
          target="_blank"
          rel="noreferrer"
        >
          {itemlist.text}
        </a>
      );
    } else if (itemlist.type == "anchor" && itemlist.external == false) {
      return (
        <Link
          key={"anchorTag" + itemlistindex}
          href={`${itemlist.slug}`}
          as={itemlist.href}
        >
          <a>{itemlist.text}</a>
        </Link>
      );
    } else if (itemlist.type == "lists") {
      return (
        <Fragment key={"anchorTag" + itemlistindex}>
          {parse(itemlist.text)}
        </Fragment>
      );
    } else {
      return (
        <span key={"anchorTag" + itemlistindex}>{parse(itemlist.text)}</span>
      );
    }
  });
};
const checkanchorTag = function (text) {
  var stringreplace = text.replace(/<\/a>/gi, "</a>splitstirng");
  stringreplace = stringreplace.replace(/<a/gi, "splitstirng<a");
  stringreplace = stringreplace.replace(/<ul/gi, "splitstirng<ul");
  var splittedString = stringreplace.split("splitstirng");
  var regex = /<a(.*?)<\/a>/gi;
  var regexulli = /<ul(.*?)<\/ul>/gi;
  var newarray = [];
  splittedString.map((obj) => {
    var testData = regex.test(obj);
    var testData1 = regexulli.test(obj);
    // ("ultags",obj);
    if (testData) {
      var slug = "/[service]";
      var external = parse(obj).props.href.includes("://");
      if (external == false) {
        var testslugs = parse(obj).props.href.split("/");
        // ('testslugs',testslugs);
        if (testslugs.length >= 3) {
          slug = `/${testslugs[1]}/[satellite]`;
        }
      }
      var newobj = {
        type: "anchor",
        href: parse(obj).props.href,
        text: parse(obj).props.children,
        external: external,
        slug: slug,
      };
    } else if (testData1) {
      var newobj = { type: "lists", text: obj };
    } else {
      var newobj = { type: "normal", text: obj };
    }
    newarray.push(newobj);
  });
  return newarray;
};
const FAQ = (props) => {
  const faqViewMoreLimit = 10;
  const externalIconStyles = props.externalStyles?.icon || {};
  // debugger
  const url = props.url;
  const [list_FAQ, setListFAQ] = useState(props?.faqData ?? []);
  // useEffect(() => {
  //   const listFaq = props.faqData ? props.faqData : [];
  //   setListFAQ(listFaq);
  // }, []);
  function updatechecked(index, state) {
    // let list_FAQ=list_FAQ;
    list_FAQ.map((obj) => {
      var obj1 = obj;
      obj1.toggled = false;
      return obj1;
    });
    const faqArray = [...list_FAQ];
    let faqobj = { ...faqArray[index] };
    faqobj.toggled = state ? !state : true;
    faqArray[index] = faqobj;
    setListFAQ(faqArray);
  }

  const changeFaqQuestionTag = (question) => {
    const pageUrls = [
      "one-person-company-opc-india",
      "online-trademark-registration",
      "epf-registration-online",
      "trade-license",
      "caste-certificate",
      "llp-registration-india",
      "online-food-license-fssai-registration",
      "proprietorship-registration-india-sole-proprietorship",
      "partnership-firm",
      "copyright-registration",
      "trademark-objection",
      "udyam-udyog-aadhar-msme-registration",
      "professional-tax-registration",
      "online-esi-registration",
      "online-society-registration",
      "iso-certification",
      "property-registration",
    ];
    if (pageUrls.includes(url))
      return <h3 className="seo-recommendation">{question}</h3>;
    if (props?.classes?.question)
      return <p className={props.classes.question}>{question}</p>;
    else return <p>{question}</p>;
  };

  // useEffect(() => {

  // }, [viewMoreToggle,viewLimit])

  const handleFAQToggle = () => {
    setViewLimit(
      viewLimit == faqViewMoreLimit ? list_FAQ.length : faqViewMoreLimit
    );
    setViewMoreToggle(viewMoreToggle ? 0 : 1);
  };
  const [viewMoreToggle, setViewMoreToggle] = useState(0);
  const [viewLimit, setViewLimit] = useState(faqViewMoreLimit);
  const toggleButtonData = ["View More", "View Less"];
  return (
    <section className="min-w-fit max-w-[1100px]">
      <div className={props?.classes?.container}>
        <Accordion variant="filled">
          {list_FAQ.map((list, index) => {
            // console.log(list.question, viewLimit, "Hello");
            return list?.question && index < viewLimit ? (
              <Accordion.Item style={{ cursor: "pointer" }} value={`${index}`}>
                <Accordion.Control>{parse(list.question)}</Accordion.Control>
                <Accordion.Panel>
                  <div className="body_card_wrapper">
                    {renderanchortag(checkanchorTag(list.answer))}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            ) : null;
          })}
        </Accordion>
      </div>
      {list_FAQ.length > faqViewMoreLimit && (
        <div className="flex justify-center items-center p-0 m-0">
          <button
            className="text-center border-[1px] border-black py-2 px-4 whitespace-nowrap rounded"
            type="button"
            onClick={handleFAQToggle}
          >
            {toggleButtonData[viewMoreToggle]}
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQ;
