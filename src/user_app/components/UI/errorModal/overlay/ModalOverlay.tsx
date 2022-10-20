import { ReactNode } from "react";

export const ModalOverlay: React.FC<{ children: ReactNode }> = (props) => {
  return <>{props.children}</>;
};
