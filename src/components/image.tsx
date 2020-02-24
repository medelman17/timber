/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import styled from "@emotion/styled";

export type ImageProps = {
  isSelected?: boolean;
  src: string;
  placeholder?: string;
  sx?: any;
  onLoad?: (e: any) => void;
  onLoadStart?: (e: any) => void;
  onLoadedData?: (e: any) => void;
};

const StyledContainer = styled("div")`
  width: 100%;
  flex-grow: 1;
`;

const StyledImage = styled("img")`
  width: 100%;
  max-height: 33vh;
`;

export const LazyImage: React.FC<ImageProps> = props => {
  const [isLoaded, toggleLoading] = React.useState(false);

  React.useEffect(() => {
    const image = new Image();
    image.src = props.src;
    return image.addEventListener("load", e => {
      toggleLoading(true);
    });
  }, [props.src]);

  return (
    <StyledContainer>
      <StyledImage
        src={isLoaded ? props.src : props.placeholder}
        onLoad={props.onLoad}
        onLoadStart={props.onLoadStart}
        onLoadedData={props.onLoadedData}
      />
    </StyledContainer>
  );
};
