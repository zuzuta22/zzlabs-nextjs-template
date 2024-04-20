import ButtonBase from "@/_src/components/elements/buttons/ButtonBase/ButtonBase"
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle"
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner"
import LayoutSection from "@/_src/components/layouts/LayoutSection/LayoutSection"

const PlaygroundButtons = () => {
  return (
    <LayoutSection>
      <LayoutSectionInner>
        <DynamicTitle
          tag={"h2"}
          text={"Buttons"}
        />
        <DynamicTitle tag={"h3"} text={"ButtonBase"} />
        <ButtonBase
          text={'Button'}
          type={'rectangle'}
        />
      </LayoutSectionInner>
    </LayoutSection>
  )
}

export default PlaygroundButtons;