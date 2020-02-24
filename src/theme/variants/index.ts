import { createSiteVariants } from "./site";
import { createTextVariants } from "./text";

export function createThemeVariants() {
  return {
    site: createSiteVariants(),
    text: createTextVariants()
  };
}
