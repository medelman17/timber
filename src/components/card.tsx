/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import styled from "@emotion/styled";
import { LazyImage as Image } from "./image";
import { motion, AnimatePresence } from "framer-motion";
import { MdWork, MdDomain } from "react-icons/md";
import { Text } from "../components";
import { Flex } from "rebass";

const StyledCard = styled(motion.div)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
`;

type CardProps = {
  image: { src: string; placeholder: string };
  data: {
    first: string;
    last: string;
    jobTitle: string;
    company: string;
    bio: string;
  };
  [index: string]: any;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: 0,
      y: -1000,
      opacity: 0
    };
  },
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 1
    }
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      y: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Card: React.FC<CardProps> = props => {
  const paginate = (newDirection: number) => {
    props.setPage([props.page + newDirection, newDirection]);
  };
  return (
    <AnimatePresence initial={false} custom={props.direction}>
      <StyledCard
        css={theme => ({
          boxShadow: `5px 5px 15px ${theme.colors.darkShadow}, -5px -5px 15px  ${theme.colors.lightShadow}`,
          backgroundColor: theme.colors.background,
          maxHeight: ["90vh", "60vh"],
          maxWidth: ["500px"],
          paddingBottom: ["2rem"],
          height: "100%"
        })}
        key={props.page}
        custom={props.direction}
        animate="center"
        initial={"enter"}
        exit="exit"
        variants={variants}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 200 },
          y: { type: "spring" },
          opacity: { duration: 0.5 }
        }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
            props.dislike();
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
            props.like();
          }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
      >
        <Image
          src={props.image.src}
          onLoad={() => {}}
          placeholder={props.image.placeholder}
        />

        <Flex
          sx={{
            px: ["1rem", "1.25rem"],
            py: [".5rem", "1rem"],
            width: "100%",
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: ["1rem"]
          }}
        >
          <Text type="body" as="h2" variant="h2">
            {props.data.first} {props.data.last}
          </Text>
          <Flex sx={{ alignItems: "center" }}>
            <MdWork style={{ marginRight: ".5rem" }} />
            <Text type="body" as="span" variant="h3">
              {props.data.jobTitle}
            </Text>
          </Flex>
          <Flex
            sx={{
              alignItems: "center",
              width: "100%",
              flexGrow: 1,
              borderBottom: theme => `1px solid ${theme.colors.text}`,
              paddingBottom: [".25rem"]
            }}
          >
            <MdDomain style={{ marginRight: ".5rem" }} />
            <Text type="body" as="span" variant="h3">
              <Text type="body" as="span" variant="h3">
                {props.data.company}
              </Text>
            </Text>
          </Flex>
          <Flex sx={{ textAlign: "left", my: [".25rem"] }}>
            <Text type="body" as="p" variant="p">
              {props.data &&
                props.data.bio &&
                props.data.bio
                  .split(" ")
                  .slice(0, 50)
                  .join(" ")}
            </Text>
          </Flex>
        </Flex>
      </StyledCard>
    </AnimatePresence>
  );
};
