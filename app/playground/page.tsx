import BackToTopLink from "@/_src/components/elements/links/BackToTopLink/BackToTopLink";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import PlaygroundButtons from "./_components/buttons/playground-buttons/playground-buttons";
import PlaygroundLabelLinks from "./_components/links/playground-label-links";
import PlaygroundTitles from "./_components/titles/playground-titles";

const Playground = () => {

  return (
    <>
      <DynamicTitle tag={"h1"} text={"Playground"} />
      <PlaygroundButtons />
      <PlaygroundTitles />
      <PlaygroundLabelLinks />
      <BackToTopLink />
    </>
  )
}

export default Playground;