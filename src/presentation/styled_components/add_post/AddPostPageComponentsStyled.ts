import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const AddPostWrapperStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  background: white;
`;

const AddPostInputWrapperStyled = styled.div`
  width: 50%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 500px) {
    width: 92%;
    backgeound: red;
  }

  @media (max-width: 800px) {
    width: 70%;
    margin: 10px auto;
  }
`;

const AddPostInputStyled = styled.input`
  width: 92%;
  height: 60px;
  border: 1px solid lightgray;
  border-radius: 15px;
  background: white;
  color: black;
  outline: none;
  padding-inline: 20px;
  font-size: 20px;
  line-height: 1;

  ::placeholder {
    color: grey;
  }

  @media (max-width: 800px) {
    height: 45px;
    font-size: 16px;
    border-radius: 10px;
  }
  
  @media (max-width: 500px) {
    height: 30px;
    font-size: 14px; 
    border-radius: 5px;
  }

`;

const AddPostDesciptionInputStyled = styled.textarea`
  width: 92%;
  height: 150px;
  border: 1px solid lightgray;
  border-radius: 15px;
  background: white;
  color: black;
  outline: none;
  padding: 20px;
  font-size: 20px;

  ::placeholder {
    color: grey;
  }

  @media (max-width: 800px) {
    font-size: 16px;
    border-radius: 10px;
  }
  
  @media (max-width: 500px) {
    font-size: 14px; 
    border-radius: 5px;
  }
`;

const AddPostActionButtonsWrapperStyled = styled.div`
  width: 92%;
  display: flex;
  justify-content: center;
  gap: 1%;
  margin-block: 25px;
`;

const AddPostActionButtonStyled = styled.button<{ isOutlined?: boolean }>`
  width: 49%;
  height: 60px;
  font-size: 20px;
  border-radius: 15px;
  outline: none;
  background: ${(props) => (props.isOutlined ? "white" : PRIMARY_COLOR)};
  border: 1px solid ${(props) => (props.isOutlined ? PRIMARY_COLOR : "white")};
  color: ${(props) => (props.isOutlined ? PRIMARY_COLOR : "white")};
  
  @media (max-width: 800px) {
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
  }
  
  @media (max-width: 500px) {
    height: 40px;
    font-size: 14px;
    border-radius: 5px;
  }
`;

export {
  AddPostWrapperStyled,
  AddPostInputWrapperStyled,
  AddPostInputStyled,
  AddPostDesciptionInputStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostActionButtonStyled,
};
