import FlexBox from "@/_src/components/layouts/Box/FlexBox/FlexBox";

type Props = {
  appleBadgeItem: {
    linkTo: string,
    src: string,
    alt: string
  },
  googleBadgeItem: {
    linkTo: string,
    src: string,
    alt: string
  };
}

const FooterBrandBoxRightContentBottom = (props: Props) => {
  const {appleBadgeItem, googleBadgeItem} = props;

  return (
    <FlexBox type="start" direction="row">
      <a href={appleBadgeItem.linkTo} target="_blank" rel="noopener noreferer">
        <img src={appleBadgeItem.src} alt={appleBadgeItem.alt} width={109} height={40} loading="lazy" />
      </a>
      <a href={googleBadgeItem.linkTo} target="_blank" rel="noopener noreferer">
        <img src={googleBadgeItem.src} alt={googleBadgeItem.alt} width={109} height={40} loading="lazy" />
      </a>
    </FlexBox>
  )
}

export default FooterBrandBoxRightContentBottom;