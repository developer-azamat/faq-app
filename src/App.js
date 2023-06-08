import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Main/Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import Faq from "./Main/faq";
import { ChakraProvider } from "@chakra-ui/react";
// import { UseTranslation } from "react-i18next";

function App() {
  const [index, setIndex] = useState(null);
  useEffect(() => {
    alanBtn({
      key: "8767e1193dc3dfd2e20b469a877d5fbb2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "gotoFaq") {
          setIndex(commandData.faqId - 1);
        }
      },
    });
  }, []);

  return (
    <>
      <Header />
      <ChakraProvider>
        <Faq index={index} setIndex={setIndex} />
      </ChakraProvider>
    </>
  );
}

export default App;
