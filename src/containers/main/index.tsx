/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Card, Welcome } from "../../components";
import { useTree } from "../../providers/tree";
import { getRandomInt } from "../../utils";
import faker from "faker";

const treeNames = [
  "Ash",
  "Aspen",
  "Basswood",
  "Birch",
  "Cherry",
  "Hemlock",
  "Elm",
  "Maple",
  "Spruce",
  "Sassafras"
];

export const MainContainer = () => {
  const [isPlaying, togglePlaying] = React.useState(false);
  const [treeBio, setTreeBio] = React.useState<any>({});
  const [photo, nextPhoto] = React.useState(0);
  const [enter, triggerEnter] = React.useState(false);
  const [[page, direction], setPage] = React.useState([0, 0]);

  function handlePlayStart() {
    togglePlaying(true);
  }

  const { get } = useTree();

  function likeTree() {
    nextPhoto(photo + 1);
  }

  function rejectTree() {
    nextPhoto(photo + 1);
  }

  React.useEffect(() => {
    const treeName = treeNames[getRandomInt(treeNames.length - 1)];
    setTreeBio({
      last: treeName,
      first: faker.name.firstName(),
      jobTitle: faker.name.jobTitle(),
      company: faker.company.companyName(),
      location: `${faker.address.city()}, ${faker.address.state()}`,
      bio: faker.lorem.sentences(),

      pic: get(photo)
    });
  }, [photo]);

  return isPlaying ? (
    <Card
      image={{
        src: treeBio?.pic?.src,
        placeholder: treeBio?.pic?.placeholder
      }}
      style={{ width: "100%" }}
      data={treeBio}
      enter={enter}
      like={likeTree}
      dislike={rejectTree}
      page={page}
      direction={direction}
      setPage={setPage}
    />
  ) : (
    <Welcome togglePlaying={handlePlayStart} />
  );
};
