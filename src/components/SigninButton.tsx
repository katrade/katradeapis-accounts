import { FC } from "react";
import styled from "styled-components";
import { AccountAPIInstance } from "../accountsapi";
import { INTERFACE_BASE_URL } from "../constants";

interface SigninButtonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  apiInstance: AccountAPIInstance;
}

interface SigninButtonContainerProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const defaults = {
  width: "100%",
  height: "44px",
  borderRadius: "6px"
}

const SigninButtonContainer = styled.button<SigninButtonContainerProps>`
  width: ${(props) => props.width ? props.width : defaults.width};
  height: ${(props) => props.width ? props.width : defaults.height};
  border-radius: ${(props) => props.width ? props.width : defaults.borderRadius};
  background-color: #00de73;
  color: white;
  
`
export const SigninButton: FC<SigninButtonProps> = (props) => {

  const handleNavigateToSigninPage = () => {
    location.href = props.apiInstance.signinUrl("0", "base-ref")
  }

  return (
    <SigninButtonContainer {...props} onClick={handleNavigateToSigninPage}>
      Sign in with KU
    </SigninButtonContainer>
  )
}