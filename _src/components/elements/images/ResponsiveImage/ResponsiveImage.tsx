import { BREAKPOINT_FOR_IMG } from "@/_src/constants/breakpoints";
import { ResponsiveImageType } from "./ResponsiveImage.type";

const ResponsiveImage = (props: ResponsiveImageType) => {
  const {srcPC, srcSP, widthPC, widthSP, heightPC, heightSP, srcWebpPC, srcWebpSP, altText} = props;

  return (
    <picture>
      {srcWebpPC && <source srcSet={srcWebpPC} media={`(min-width: ${BREAKPOINT_FOR_IMG}px)`} type="image/webp" />}
      {srcWebpSP && <source srcSet={srcWebpSP} type="image/webp" />}
      <source srcSet={srcSP} media={`(min-width: ${BREAKPOINT_FOR_IMG}px)`} {...(widthSP && { width: widthSP })} {...(heightSP && { height: heightSP })}　/>
      <img src={srcPC} {...(widthPC && { width: widthPC })} {...(heightPC && { height: heightPC })} alt={altText} loading="lazy"/>
    </picture>
  )

}

export default ResponsiveImage;