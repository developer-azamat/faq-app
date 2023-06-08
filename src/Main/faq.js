import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
} from "@chakra-ui/react";
import Faqs from "./faq.json";
import "./faq.css"

const Faq = ({index, setIndex}) => {
  return (
    <div className="faqSection px-[30px] py-0">
      <Accordion allowToggle index={index}>
        {Faqs.map((post) => (
          <AccordionItem>
            <AccordionButton
                onClick={()=> setIndex(post.id - 1 )}
            >
              <Box  textAlign="left">
                <Text fontWeight="semibold">{post.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{post.ans}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
