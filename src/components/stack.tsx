/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

export type StackProps = {};

export const Stack: React.FC<StackProps> = props => {
  return (
    <div>
      <style jsx global>
        {`
          .layout {
            background-color: blue !important;
          }
        `}
      </style>
    </div>
  );
};
