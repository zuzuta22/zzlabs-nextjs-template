import { SITE_INFO } from "@/_src/constants/siteInfo";
import Copyright from "../../elements/texts/Copyright/Copyright";

const FooterInner = () => {
  return (
    <>
      <Copyright
        text={SITE_INFO.copyright}
      />
    </>
  )
}

export default FooterInner;