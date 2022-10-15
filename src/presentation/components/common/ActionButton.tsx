import {
  ActionButtonStyled,
  ActionButtonWrapper,
} from "../../styled_components/ActionButtonStyled";

type ActionButtonProps = {
  text: string;
  onPressed: Function;
};

const ActionButton = (props: ActionButtonProps) => {
  return (
    <ActionButtonWrapper>
      <ActionButtonStyled onClick={() => props.onPressed()}>
        {props.text}
      </ActionButtonStyled>
    </ActionButtonWrapper>
  );
};

export default ActionButton;
