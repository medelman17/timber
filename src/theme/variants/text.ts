export function createTextVariants() {
  return {
    header: getHeaderTextVariants(),
    body: getBodyTextVariants()
  };
}

function getHeaderTextVariants() {
  return {
    title: {
      fontFamily: "heading",
      fontSize: [3, 4]
    },
    nav: {}
  };
}

function getBodyTextVariants() {
  return {
    p: getParagraphVariant(),
    h1: getHeadingOneVariant(),
    h2: getHeadingTwoVariant(),
    h3: {
      fontFamily: "body",
      fontSize: [2, 2],
      color: "text"
    }
  };
}

function getParagraphVariant() {
  return {
    fontFamily: "body",
    color: "text",
    fontSize: 2
  };
}

function getHeadingOneVariant() {
  return {
    fontFamily: "heading",
    color: "text"
  };
}

function getHeadingTwoVariant() {
  return {
    fontFamily: "heading",
    color: "text",
    fontSize: [4, 6]
  };
}
