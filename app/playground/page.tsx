import LayoutSectionInner from "@/_src/components/layouts/layout-secition-inner/layout-section-inner";
import LayoutSection from "@/_src/components/layouts/layout-section/layout-section";
import ButtonBase from "@/_src/components/ui/buttons/button-base/button-base";

const Playground = () => {
  return (
    <LayoutSection>
      <LayoutSectionInner>
        <ButtonBase
          text={'Button'}
          type={'rectangle'}
        />
      </LayoutSectionInner>
    </LayoutSection>
  )
}

export default Playground;