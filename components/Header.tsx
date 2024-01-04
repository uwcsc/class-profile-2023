"use client";

import { pageRoutes } from "@/data/routes";
import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { Sections } from "./Sections";

export function Header() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [state] = useWindowScroll();
  const verticalPadding = `${0.75 - Math.min(0.5, (state.y ?? 0) / 400)}rem`;

  return (
    <>
      <div
        className={isShowingMenu ? styles.backgroundTintShow : styles.backgroundTintHidden}
        onClick={() => {
          setIsShowingMenu(false);
        }}
      />
      <div
        className={styles.headerWrapper}
        style={{
          backgroundColor: `rgb(var(--navbar-background-rgb), ${(state.y ?? 0) / 200})`,
          paddingTop: verticalPadding,
          paddingBottom: verticalPadding,
        }}>
        <h1 className={styles.titleHeader} style={{ fontSize: `${3 - Math.min(0.5, (state.y ?? 0) / 400)}rem` }}>
          <Link href="/">CS 2023</Link>
        </h1>
        <button
          onClick={() => {
            setIsShowingMenu(true);
          }}
          className={styles.menuIcon}>
          <Image src="/images/menuIcon.svg" alt="Menu Icon" width="50" height="50" draggable="false" />
        </button>
      </div>

      <div className={isShowingMenu ? styles.sideBarShown : styles.sideBarHidden}>
        <h1 className={styles.menuHeader}>Sections</h1>
        <div className={styles.lineWrapper}>
          <button
            className={styles.closeMenuButton}
            onClick={() => {
              setIsShowingMenu(false);
            }}>
            <Image src="/images/rightArrow.svg" alt="Right Arrow" className={styles.arrowIcon} width="50" height="50" draggable="false" />
          </button>
        </div>
        <div className={styles.sectionsWrapper}>
          <Sections data={pageRoutes} showHeader={false} />
        </div>
      </div>
    </>
  );
}
