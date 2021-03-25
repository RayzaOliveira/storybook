import React from "react";

const style: React.CSSProperties = {
  background: "#7159c1",
  color: "#fff",
};

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>;
};
