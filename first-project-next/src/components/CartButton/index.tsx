import { ComponentProps } from "@stitches/react";
import { Handbag } from "phosphor-react";
import { Counter } from "../Counter";
import { ButtonContainer } from "./index.style";
type CartButtonContainer = ComponentProps<typeof ButtonContainer> & {
  showCounter: boolean;
};
export function CartButton({
  showCounter = true,
  ...rest
}: CartButtonContainer) {
  return (
    <ButtonContainer {...rest}>
      <Handbag weight="bold" />
      {showCounter && <Counter />}
    </ButtonContainer>
  );
}
