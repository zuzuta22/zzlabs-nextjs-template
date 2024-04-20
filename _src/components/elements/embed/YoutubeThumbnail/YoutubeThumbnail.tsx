import styles from './YoutubeThumbnail.module.scss';
import { YoutubeThumbnailType } from "./YoutubeThumbnail.type";

const YoutubeThumbnail = (props: YoutubeThumbnailType) => {
  const {id, type, title} = props;
  let srcPath = "https://img.youtube.com/vi/" + id + "/";
  let filename = "";
  if (type == 'default') {
    filename = 'default.jpg'
  } else if (type == 'middle') {
    filename = 'mqdefault.jpg'
  } else if ( type == 'high') {
    filename = 'hqdefault.jpg'; 
  } else if ( type == 'hq') {
    filename = 'sqdefault.jpg';
  } else if ( type == 'fullhd') {
    filename = 'maxresdefault.jpg';
  } else {
    filename = 'default.jpg';
  }

  const srcFile = srcPath + filename;
  const youtubeUrl = "https://www.youtube.com/watch?v=" + id;

  return (
    <div className={styles.youtube_wrapper}>
      <a href={youtubeUrl} target="_blank" rel="noopener noreferer">
        <img src={srcFile} alt={title} />
        {title ? (
          <span>{title}</span>
        ) : null}
      </a>
    </div>
  )
}

export default YoutubeThumbnail;