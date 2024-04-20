import ImageResp from "@/_src/components/elements/images/ImageResp/ImageResp";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/LayoutSection/LayoutSection";
import PlaygroundButtons from "./_components/buttons/playground-buttons/playground-buttons";
import PlaygroundLabelLinks from "./_components/links/PlaygroundLabelLinks";
import PlaygroundTitles from "./_components/titles/playground-titles";

const Playground = () => {

  return (
    <>
      <DynamicTitle tag={"h1"} text={"Playground"} />
      <LayoutSection>
        <LayoutSectionInner>
          <ImageResp
            srcPC={"/images/sample-images/sample_png_2560x1600.png"}
            srcSP={"/images/sample-images/sample_png_750x1334.png"}
            srcWebpPC={"/images/sample-images/sample_png_2560x1600.png.webp"}
            srcWebpSP={"/images/sample-images/sample_png_750x1334.png.webp"}
            widthPC={1920}
            heightPC={720}
            widthSP={375}
            heightSP={667}
            altText={"This is Sample Text for ImageResp"}
          />
        </LayoutSectionInner>
      </LayoutSection>
      <PlaygroundButtons />
      <PlaygroundTitles />
      <PlaygroundLabelLinks />
    </>
  )
}

export default Playground;