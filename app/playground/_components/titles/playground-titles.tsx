import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/Sections/LayoutSection/LayoutSection";

const PlaygroundTitles = () => {
  return (
    <LayoutSection>
      <DynamicTitle tag={"h2"} text={"Dynamic Title"} />
      <LayoutSectionInner>
        <DynamicTitle tag={"h1"} text={"H1 Title"} />
        <DynamicTitle tag={"h2"} text={"H2 Title"} />
        <DynamicTitle tag={"h3"} text={"H3 Title"} />
        <DynamicTitle tag={"h4"} text={"H4 Title"} />
        <DynamicTitle tag={"h5"} text={"H5 Title"} />
        <DynamicTitle tag={"h6"} text={"H6 Title"} />
        <DynamicTitle tag={"div"} text={"div Title"} />
      </LayoutSectionInner>
    </LayoutSection>
  )
}

export default PlaygroundTitles;