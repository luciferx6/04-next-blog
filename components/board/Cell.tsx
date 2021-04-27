import { FC } from "react";

import styles from "./Cell.module.css";

export const Cell: FC<{ colIndex: number; rowIndex: number }> = ({
  rowIndex,
  colIndex,
}) => {
  return (
    <div
      className={styles.cell}
      onClick={() => {
        alert(`row: ${rowIndex}, col: ${colIndex}`);
      }}
    />
  );
};
