import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What are your opening hours?",
      answer: "We are open from 10 AM to 10 PM from Monday to Sunday.",
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer:
        "Yes, we have a variety of vegetarian and vegan dishes available.",
    },
    {
      question: "How can I make a reservation?",
      answer:
        "You can make a reservation by calling us at (123) 456-7890 or through our website's reservation form.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes, we have a loyalty program that rewards you with points for every purchase. You can sign up on our website.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have ample parking space available for our customers.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center bg-blue-100 dark:bg-neutral-800 p-4 rounded-lg shadow">
              <span>{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
          </button>
          {activeIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 dark:bg-neutral-600 p-4 rounded-lg shadow mt-2"
            >
              {item.answer}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
