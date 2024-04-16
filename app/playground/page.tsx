import PlaygroundButtons from "./_components/buttons/playground-buttons/playground-buttons";
import DynamicTitle from "@/_src/components/ui/titles/dynamic-title/dynamic-title";
import PlaygroundTitles from "./_components/titles/playground-titles";

const Playground = () => {
  return (
    <>
      <DynamicTitle tag={"h1"} text={"Playground"} />
      <PlaygroundButtons />
      <PlaygroundTitles />
    </>
  )
}

export default Playground;