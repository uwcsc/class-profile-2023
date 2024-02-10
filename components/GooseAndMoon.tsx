import Image from "next/image";
import styles from "./GooseAndMoon.module.css";

export function GooseAndMoon() {
  return (
    <div className={styles.group}>
      <Image className={styles.moon} src="/images/big-moon.svg" alt="" width={500} height={500}></Image>
      <Image className={styles.goose} src="/images/goose1.svg" alt="" width={320} height={320}></Image>
    </div>
  );
}
