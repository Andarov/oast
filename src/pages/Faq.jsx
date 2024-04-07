import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faqData } from "../data";

function Icon({ id, open }) {
  return (
    <svg
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus h-4 w-4 shrink-0 transition-transform duration-200"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex-1 py-5 max-w-xl lg:max-w-none sm:mx-auto lg:mx-0">
      <h1 className="text-6xl font-montserrat md:text-8xl font-bold my-6 text-center uppercase">
        FAQ
      </h1>

      <div className="max-w-2xl mx-auto px-3 mt-7 py-20">
        <div className="border-t border-[#2A224B]">
          {faqData.map((faq) => {
            return (
              <Accordion
                key={faq.id}
                className="border-b border-[#2A224B]"
                open={open === faq.id}
                icon={<Icon id={faq.id} open={open} />}
              >
                <AccordionHeader
                  className="text-lg font-semibold font-montserrat hover:underline text-oast-light underline-offset-4 hover:text-oast-light border-b-0"
                  onClick={() => handleOpen(faq.id)}
                >
                  {faq.title}
                </AccordionHeader>
                {faq.descriptions.length > 1 ? (
                  faq.descriptions.map((description, index) => (
                    <AccordionBody
                      key={index} // or use a unique key if available
                      className="pt-0 pb-4 text-oast-midnight-200 text-base font-normal leading-7 font-dmSans"
                    >
                      {description}
                    </AccordionBody>
                  ))
                ) : (
                  <AccordionBody
                    key={faq.id}
                    className="pt-0 pb-4 text-oast-midnight-200 text-base font-normal leading-7 font-dmSans"
                  >
                    {faq.descriptions[0] === 'see video' ? <a className="underline underline-offset-4" href={faq.url} target="_blank">{faq.descriptions[0]}</a> : faq.descriptions[0]}
                  </AccordionBody>
                )}
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
