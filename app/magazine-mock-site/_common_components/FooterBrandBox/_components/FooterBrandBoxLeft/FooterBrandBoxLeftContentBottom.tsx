import ResponsiveImage from "@/_src/components/elements/images/ResponsiveImage/ResponsiveImage";
import { ResponsiveImageType } from "@/_src/components/elements/images/ResponsiveImage/ResponsiveImage.type";

type Props = {
  linkTo: string;
  imageItem: ResponsiveImageType
}

const FooterBrandBoxLeftContentBottom = (props: Props) => {
  const {linkTo, imageItem} = props;

  return (
    <a href={linkTo}>
      <ResponsiveImage
        srcPC={imageItem.srcPC}
        srcSP={imageItem.srcSP}
        srcWebpPC={imageItem.srcWebpPC}
        srcWebpSP={imageItem.srcWebpSP}
        widthPC={imageItem.widthPC}
        heightPC={imageItem.heightPC}
        widthSP={imageItem.widthSP}
        heightSP={imageItem.heightSP}
        altText={imageItem.altText}
      />
    </a>
  )
}

export default FooterBrandBoxLeftContentBottom;