/** @jsx jsx */
import { jsx, IconButton, Styled } from "theme-ui";
import styled from "@emotion/styled";
import { IconProps } from "./index";

const StyledSvg = styled.svg`
  color: ${(props: any) => props.theme.colors.text};
`;

export const MoonIcon: React.FC<IconProps> = props => (
  <StyledSvg
    sx={{ color: "text", fill: "text", width: "100%" }}
    viewBox="0 0 24 24"
    transform="translate(0, 0) translate(-12.021049737930298, -12.021688222885132) scale(1, 1) translate(12.021049737930298, 12.021688222885132) rotate(0, 12.021049737930298, 12.021688222885132) skewX(0) skewY(0) "
  >
    <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"></path>
  </StyledSvg>
);

export const SunIcon: React.FC<IconProps> = props => (
  <StyledSvg
    sx={{ color: "text", width: "100%", fill: "text" }}
    viewBox="0 0 24 24"
    transform="translate(0, 0) translate(-12, -12) scale(1, 1) translate(12, 12) rotate(0, 12, 12) skewX(0) skewY(0) "
  >
    <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41zM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31zM12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"></path>
  </StyledSvg>
);

export const TreeIcon: React.FC<IconProps> = props => (
  <svg id="emoji" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
    <g id="line">
      <polyline
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="41.4476,53.4897 55.1936,54.5227 46.1036,37.5027 51.4476,38.3647 43.0886,24.2657 48.0726,24.6147 36.0036,7.2457 24.4476,24.9897 28.9176,24.2657 20.1976,38.3647 25.9026,37.5027 16.8127,54.5227 30.3226,53.6147"
      />
      <line
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-miterlimit="10"
        x1="36.0036"
        y1="55.9637"
        x2="36.0036"
        y2="65.2727"
      />
    </g>
  </svg>
);
