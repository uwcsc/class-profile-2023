import { pageRoutes } from "@/data/routes";
import { basePath } from "@/utils/getBasePath";
import Link from "next/link";
import { useState } from "react";

import { Sections } from "./Sections";

import styles from "./Header.module.css";

export function Header() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  return (
    <>
      <div
        className={isShowingMenu ? styles.backgroundTintShow : styles.backgroundTintHidden}
        onClick={() => {
          setIsShowingMenu(false);
        }}
      />
      <div className={styles.headerWrapper}>
        <h1 className={styles.titleHeader}>
          <Link href="/">CS 2022</Link>
        </h1>
        <button
          onClick={() => {
            setIsShowingMenu(true);
          }}
          className={styles.menuIcon}>
          <img src={basePath + "/images/menuIcon.svg"} width="50" height="50" draggable="false" />
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
            <img src={basePath + "/images/rightArrow.svg"} className={styles.arrowIcon} width="50" height="50" draggable="false" />
          </button>
        </div>
        <div className={styles.sectionsWrapper}>
          <Sections data={pageRoutes} showHeader={false} />
        </div>
      </div>
    </>
  );
}
