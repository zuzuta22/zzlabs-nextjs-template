import LinkLabelWithRightArrow from "@/_src/components/elements/links/LinkLabelWithRightArrow/LinkLabelWithRightArrow";
import SectionTitleCombo from "@/_src/components/objects/Titles/SectionTitleCombo/SectionTitleCombo";
import styles from './TitleElementWithLinkLabel.module.scss';
import { TitleElementWithLinkLabelType } from "./TitleElementWithLinkLabel.types";

const TitleElementWithLinkLabel = (props: TitleElementWithLinkLabelType) => {
  const {titleItem, linkLabelItem} = props;
  return (
    <div className={styles['l-title-element-with-link-label']}>
      <SectionTitleCombo
        title={titleItem.title}
        subText={titleItem.subText}
      />
      <div className={styles['l-title-element-with-link-label__label']}>
        <LinkLabelWithRightArrow
          text={linkLabelItem.text}
          linkTo={linkLabelItem.linkTo}
          isExternal={linkLabelItem.isExternal}
          colorMode={linkLabelItem.colorMode}
        />
      </div>
    </div>
  )
}

export default TitleElementWithLinkLabel;