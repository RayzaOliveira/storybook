import React from "react";

import { Container } from "./styles";
export interface Props {
  /**
   * This is my favorite prop
   */

  backgroundColor?: string;
  /**
   * The color of button
   */
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = "#7159c1",
  color = "#fff",
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };
