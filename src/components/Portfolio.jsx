import { Accordion, Box, Flex, Heading } from "@chakra-ui/react";
import PortfolioItem from "../components/PortfolioItem";
import data from "../components/portfolio-data";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from 'embla-carousel-autoplay';
import {
  DotButton,
  // NextButton,
  // PrevButton
} from "../components/DotsButton";
import { useState } from "react";
import styles from "../styles/items.module.css";

// var $ = require('jquery');
// if (typeof window !== 'undefined') {
//   window.$ = window.jQuery = require('jquery');
// }

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleCarouselClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [],
  );

  // const scrollPrev = useCallback(
  //   () => emblaApi && emblaApi.scrollPrev(),
  //   [emblaApi]
  // );

  // const scrollNext = useCallback(
  //   () => emblaApi && emblaApi.scrollNext(),
  //   [emblaApi]
  // );
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // setPrevBtnEnabled(emblaApi.canScrollPrev());
    // setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const portfolio_data = data;
  const portfolioItems = Object.keys(portfolio_data);

  return (
    <Box pt="30px" mt="30px" pl="120px" className="scroll-margin-top">
      <section id="portfolio">
        <Flex
          direction="column"
          alignItems="flex-start"
          ml={{ base: "30px", md: "50px" }}
          mr={{ base: "30px", md: "50px" }}
        >
          <Heading
            as="h1"
            variant="page-title"
            size="2xl"
            pb={{ base: "50px" }}
          >
            Portfolio
          </Heading>
          <Accordion allowToggle>
            <Box
              className="embla"
              ref={emblaRef}
              width={{ base: "97vw", md: "87vw" }}
              mt={{ base: "40px" }}
            >
              <Box
                //padding="60px 30px"
                mb={{ base: "30px" }}
                className="embla__container flex"
              >
                {portfolioItems.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    highlight={portfolio_data[item].highlight}
                    duration={portfolio_data[item].duration}
                    title={portfolio_data[item].title}
                    thumbnail={portfolio_data[item].thumbnail}
                    href={portfolio_data[item].link}
                    description={portfolio_data[item].description}
                    videos={portfolio_data[item].videos}
                    className={`${styles.item} embla__slide ${
                      activeIndex === index ? `${styles.active}` : ""
                    }`}
                    onClick={() => handleCarouselClick(index)}
                  />
                ))}
              </Box>

              {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
              <Box className="embla__dots" style={{}}>
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </Box>
            </Box>
          </Accordion>
        </Flex>
      </section>
    </Box>
  );
};

export default Portfolio;
