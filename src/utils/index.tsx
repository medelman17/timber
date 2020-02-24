import * as React from "react";

export function createCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const context = React.useContext(ctx);
    if (!context) {
      throw new Error("useCtx must be inside a Provider with a value");
    }
    return context;
  }
  return [useCtx, ctx.Provider] as const;
}

export const hasDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
