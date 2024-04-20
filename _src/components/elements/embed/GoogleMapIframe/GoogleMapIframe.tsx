import styles from './GoogleMapIframe.module.scss';
import { GoogleMapIframeType } from "./GoogleMapIframe.types";

const GoogleMapIframe = (props: GoogleMapIframeType) => {
  const {place} = props;
  const query = 'https://maps.google.co.jp/maps?output=embed&q=' + place + 'allowfullscreen=""';
  
  return (
    <div className={styles.googlemap_iframe}>
      <iframe src={query}></iframe>
    </div>
  )
}

export default GoogleMapIframe;