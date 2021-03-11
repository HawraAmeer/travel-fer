import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return <BeatLoader color="grey" css={override} size={50} />;
};

export default Loading;
