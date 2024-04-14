import PlaygroundButtons from "./_components/buttons/playground-buttons/playground-buttons";
import DynamicTitle from "@/_src/components/ui/titles/dynamic-title/dynamic-title";

const Playground = () => {
  return (
    <>
      <DynamicTitle tag={"h1"} text={"Playground"} />
      <PlaygroundButtons />
    </>
  )
}

export default Playground;