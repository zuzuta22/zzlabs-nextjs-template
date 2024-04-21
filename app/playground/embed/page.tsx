import GoogleMapIframe from "@/_src/components/elements/embed/GoogleMapIframe/GoogleMapIframe";
import YoutubeThumbnail from "@/_src/components/elements/embed/YoutubeThumbnail/YoutubeThumbnail";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/LayoutSection/LayoutSection";
import { TextContext } from "../texts/context";

const PlaygroundEmbed = () => {
  return (
    <>
      <LayoutSection>
        <DynamicTitle tag={"h2"} text={"Embed Elements"} />
        <LayoutSectionInner>
          <DynamicTitle tag={"h3"} text={"GoogleMapIframe"} />
          <GoogleMapIframe place={TextContext.irameQuery.place} />
        </LayoutSectionInner>
        <LayoutSectionInner>
          <DynamicTitle tag={"h3"} text={"YouTubeThumbnail"} />
          <YoutubeThumbnail id={"ZjHSWHhbWiU"} type={"middle"} title={"Pay money To my Pain - Rain"}/>
        </LayoutSectionInner>
      </LayoutSection>
    </>
  )
};

export default PlaygroundEmbed;