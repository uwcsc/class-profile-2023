import { title } from "@/utils/title";
import React, { PropsWithChildren } from "react";

export const metadata = title("Full Time");

const Layout: React.FC<PropsWithChildren> = ({ children }) => children;
export default Layout;
