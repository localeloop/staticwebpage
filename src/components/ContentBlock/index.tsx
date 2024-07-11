import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import MiddleContentBlock from "./MiddleContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlockTypes = {
  left: LeftContentBlock,
  right: RightContentBlock,
  middle: MiddleContentBlock,
}

const ContentBlock = (props: ContentBlockProps) => {
  const ContentBlock = props.type === "left"? LeftContentBlock : RightContentBlock;

  return (
    <ContentBlock {...props} />
  );
};

export default ContentBlock;
