import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";

const FAQ = [
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    id: 475,
    title: "Will Insta Food be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
];

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  return (
    <div
      className="flex bg-white flex-col  rounded-sm p-6 border-b-2 cursor-pointer"
      onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
    >
      <div className="flex justify-between items-center">
        <h3 className=" text-base font-medium">{title}</h3>
        {isVisible ? <SlArrowUp /> : <SlArrowDown className="cursor-pointer" />}
      </div>
      {isVisible && (
        <p className="text-sm pt-2 text-slate-500">{description}</p>
      )}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] =
    useState(""); /* Initially description of all questions are hidden */

  return (
    <div className="bg-slate-50 w-[80vw] flex-grow font-poppins ml-6">
      <h1 className="py-5 font-bold text-center text-2xl bg-slate-900 text-white ">
        FAQs
      </h1>
      {FAQ.map((question) => {
        return (
          <Section
            key={question.id}
            id={question.id}
            title={question.title}
            description={question.description}
            isVisible={visibleSection === question.id}
            setIsVisible={(param) => {
              if (param) {
                setVisibleSection(question.id);
              } else {
                setVisibleSection(" ");
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Help;
