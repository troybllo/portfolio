import {
  Box,
  Highlight,
  AccordionItem,
  Link,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import styles from "../styles/items.module.css";

const PortfolioItem = ({
  duration,
  highlight,
  title,
  thumbnail,
  href,
  description,
  className,
  videos,
  onClick,
}) => {
  const showAccordionPanel = className.includes("embla__slide");
  // console.log("accordion: " + showAccordionPanel)
  return (
    <AccordionItem>
      <AccordionButton>
        <Box
          className={className}
          onClick={onClick}
          style={{ backgroundImage: `url(${thumbnail.src})` }}
        >
          <Box className={styles.item_desc}>
            <Flex justifyContent="space-between">
              <Text
                as="h3"
                casing="uppercase"
                variant={"sub-heading"}
                mt={2}
                mb={5}
              >
                {title}
              </Text>
              <Text
                as="h3"
                casing="uppercase"
                variant={"date-heading"}
                mt={2}
                mb={5}
              >
                {duration}
              </Text>
            </Flex>
            <p>
              <Highlight query={highlight} styles={{ color: "yellow.500" }}>
                {description}
              </Highlight>
            </p>

            {href !== "" ? (
              <LinkBox display="flex" flexDirection="row">
                <LinkOverlay as={Link} href={href} target="_blank">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    github↗
                  </span>
                </LinkOverlay>
              </LinkBox>
            ) : null}
          </Box>
        </Box>
      </AccordionButton>

      {showAccordionPanel && videos !== undefined ? (
        <AccordionPanel>
          <Flex flexDirection="row" gap={4}></Flex>
        </AccordionPanel>
      ) : null}
    </AccordionItem>
  );
};

export default PortfolioItem;
