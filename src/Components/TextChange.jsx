import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hello, I am Gauresh", "Hello, I am Gauresh", "Hello, I am Gauresh"];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 5) {
        setIsForward(false);
      }
      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);
  return (
    <div className="transition ease duration-300 text-white font-semibold text-2xl md:text-4xl">
      {currentText}
    </div>
  );
};

export default TextChange;