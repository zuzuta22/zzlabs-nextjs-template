import LayoutSectionInner from "@/_src/components/layouts/layout-secition-inner/layout-section-inner"
import LayoutSection from "@/_src/components/layouts/layout-section/layout-section"
import ButtonBase from "@/_src/components/ui/buttons/button-base/button-base"
import DynamicTitle from "@/_src/components/ui/titles/dynamic-title/dynamic-title"

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