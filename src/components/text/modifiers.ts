import { applyStyleModifiers as applyMods } from "styled-components-modifiers";

export function css(props) {
  return function(theme) {
    return applyMods(TEXT_MODIFIERS)({ theme, ...props });
  };
}

export const TEXT_MODIFIERS = {
  bold: () => `font-weight: 700`,
  hero: () => `font-size: 64px`,
  bigger: (props: any) => {
    const {
      theme: { text, fontSizes },
      type,
      variant
    } = props;
    const { fontSize } = text[type][variant];
    return `font-size: ${fontSizes[fontSize + 1]}px`;
  },
  center: () => `text-align: center`,
  smaller: (props: any) => {
    const {
      theme: { text, fontSizes },
      type,
      variant
    } = props;

    const { fontSize } = text[type][variant];
    return `font-size: ${fontSizes[fontSize - 1]}px`;
  }
};
