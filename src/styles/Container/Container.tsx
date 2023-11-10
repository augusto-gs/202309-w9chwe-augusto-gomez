import ContainerStyled from "./ContainerStyled";
import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <ContainerStyled className="container">{children}</ContainerStyled>;
};

export default Container;
