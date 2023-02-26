import React, { FC, ReactNode } from "react";

interface PackageNameProps {
  children: ReactNode;
}

const PackageName: FC<PackageNameProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default PackageName;
