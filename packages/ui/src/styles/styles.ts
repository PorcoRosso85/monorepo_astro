import { css } from "@acab/ecsstatic";
import { Red } from "open-props/src/colors";

export const wrapper = css`
  display: grid;
  place-items: center;
`;

const accent = Red["--red-6"];

export const logo = css`
  font-size: 6rem;
  line-height: 1;
  will-change: filter;
  transition: filter 300ms;
`;
