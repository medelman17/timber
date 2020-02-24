export function createSiteVariants() {
  return {
    root: createRootVariant(),
    header: createHeaderVariant(),
    main: createMainVariant(),
    footer: createFooterVariant()
  };
}

function createRootVariant() {
  return {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    backgroundColor: "background",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    maxHeight: "100vh",
    maxWidth: "100vw",
    px: [".75rem"],
    overflow: "hidden"
  };
}

function createHeaderVariant() {
  return {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "background",
    alignItems: "center",
    justifyContent: "space-around",
    py: ["1rem"],
    width: "100%",
    mx: "auto",
    maxWidth: "800px"
  };
}

function createMainVariant() {
  return {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "background",
    flexDirection: "column",
    width: "100%"
  };
}

function createFooterVariant() {
  return {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "background",
    alignItems: "center",
    justifyContent: "space-around",
    py: ["1rem"],
    zIndex: 100
  };
}
