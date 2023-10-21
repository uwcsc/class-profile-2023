import React, { ReactNode } from "react";

import styles from "./CenterWrapper.module.css";

export interface TextboxProps {
  children: ReactNode;
}

export function CenterWrapper({ children }: TextboxProps) {
  return <section className={styles.textbox}>{children}</section>;
}
