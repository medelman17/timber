import * as React from "react";
import useSWR from "swr";
import { createCtx, hasDOM } from "../utils";
import fetch from "isomorphic-unfetch";
import { useConfig } from "./config";

export type TreeContext = {
  get: (cur: number) => { src: string; placeholder: string };
};

const [useTree, Provider] = createCtx<TreeContext>();

export const TreeProvider: React.FC<{}> = props => {
  const [state, setState] = React.useState({
    list: [],
    page: 1,
    photo: 0
  });
  const { screen } = useConfig();

  React.useEffect(() => {
    async function fetcher() {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?page=${state.page}&query=tree`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
            }
          }
        ).then(r => r.json());
        setState(prev => ({ ...prev, list: prev.list.concat(res.results) }));
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    fetcher();
  }, [state.page]);

  function getPhotoUrl(cur: number = 1) {
    const { list, page, photo } = state;
    if (cur >= list.length - 1) {
      setState(prev => ({ ...prev, page: state.page + 1 }));
    }
    // console.log(cur, list, list[cur]);
    const myPhoto = list[cur];

    if (typeof myPhoto !== "undefined") {
      return {
        src: myPhoto.urls.raw + `&w=${screen.width}`,
        placeholder: myPhoto.urls.thumb
      };
    }

    return { src: "", placeholder: "" };
  }

  if (state.list.length === 0) {
    return null;
  }

  return <Provider value={{ get: getPhotoUrl }}>{props.children}</Provider>;
};

export { useTree };

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
    }
  });
  return res.json();
}
