import { InputAddress } from "@/_src/components/elements/forms/InputAddress/InputAddress"
import { InputCheckbox } from "@/_src/components/elements/forms/InputCheckbox/InputCheckbox"
import { InputEmail } from "@/_src/components/elements/forms/InputEmail/InputEmail"
import { InputPassword } from "@/_src/components/elements/forms/InputPassword/InputPassword"
import { InputRadio } from "@/_src/components/elements/forms/InputRadio/InputRadio"
import { InputSelect } from "@/_src/components/elements/forms/InputSelect/InputSelect"
import { InputTel } from "@/_src/components/elements/forms/InputTel/InputTel"
import { InputText } from "@/_src/components/elements/forms/InputText/InputText"
import { InputTextArea } from "@/_src/components/elements/forms/InputTextarea/InputTextarea"
import { InputZip } from "@/_src/components/elements/forms/InputZip/InputZip"
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle"
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner"
import LayoutSection from "@/_src/components/layouts/Sections/LayoutSection/LayoutSection"
import FormSample from "./formSample/FormSample"

const inputSelectItemsContext = [
  {valueText: "option_value_1", displayText: "Opption 1"},
  {valueText: "option_value_2", displayText: "Opption 2"},
  {valueText: "option_value_3", displayText: "Opption 3"},
  {valueText: "option_value_4", displayText: "Opption 4"},
  {valueText: "option_value_5", displayText: "Opption 5"},
]

const PlaygroundForm = () => {
  return (
    <LayoutSection>
      <DynamicTitle tag={"h2"} text={"Form"} />
      <LayoutSectionInner>
      <FormSample id={"form"} method={"post"}>
            <InputText id="name" name="name" labelText={"Input Your Name"} placeholder="Input your name" />
            <InputPassword name="password" placeholder="Input password" isRequired={true} labelText={"Input Password"} />
            <InputPassword name="confirm" placeholder="Confirm password" labelText={"Confirm Password"}  />
            <InputEmail name="email" labelText={"Input Email"}placeholder="Input your email"/>
            <InputZip name="zip code" labelText={"Input Zip code"}placeholder="Input your Zip code" />
            <InputAddress name="address" labelText={"Input Your Address"}placeholder="Input your address" />
            <InputTel name="tel" labelText={"Input Your Phone Number"} placeholder="Input your phone number" />
            <InputTextArea name="other" labelText={"Input Anything"}placeholder="Input anything" />
            <InputSelect id="option" name="option" labelText={"Choose Option"} selectItems={inputSelectItemsContext} />
            <InputCheckbox name="check" text={"checkbox choice 1"} value={"value1"} />
            <InputRadio  name="radio" text={"radio choice 1"} value={"value1"} />
          </FormSample>
      </LayoutSectionInner>
    </LayoutSection>
  )
}

export default PlaygroundForm;