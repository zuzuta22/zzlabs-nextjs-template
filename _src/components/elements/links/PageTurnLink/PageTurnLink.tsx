import Link from "next/link";
import styles from './PageTurnLink.module.scss';
import { PageTurnLinkType } from "./PageTurnLink.type";

const PageTurnLink = (props: PageTurnLinkType) => {
  const {linkTo, type} = props;

  const baseClass = 'page_turn_link';
  const modifierClass = baseClass + '__' + type;

  return (
    <Link href={linkTo} className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 64 19.41"><path d="m53.29 18 1.56 1.41 9.15-9V9l-9.15-9-1.48 1.41 7.22 7.3H0v2h60.59L53.29 18z" data-name="Page Turn Arrow"/></svg>
    </Link>
  )
}

export default PageTurnLink;