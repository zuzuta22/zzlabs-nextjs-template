import Link from "next/link";
import ImageResp from "../ImageResp/ImageResp";
import styles from './SiteLogo.module.scss';
import { SiteLogoType } from "./SiteLogo.types";

const SiteLogo = (props: SiteLogoType) => {
  const {srcPC, srcSP, widthPC, heightPC, widthSP, heightSP, srcWebpPC, srcWebpSP, altText, linkTo} = props;

  const url = linkTo ? linkTo : '/';

  return (
    <Link href={url} className={styles.sitelogo}>
      <ImageResp
        srcPC={srcPC}
        srcSP={srcSP}
        widthPC={widthPC}
        heightPC={heightPC}
        altText={altText}
      />
    </Link>
  )
}

export default SiteLogo;