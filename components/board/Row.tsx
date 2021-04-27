import { FC } from "react";

import { Cell } from "./Cell";

import styles from "./Row.module.css";

export const Row: FC<{ cellCount: number; rowIndex: number }> = ({
  cellCount,
  rowIndex,
}) => {
  return (
    <div className={styles.row}>
      {Array(cellCount)
        .fill(null)
        .map((_, key) => (
          <Cell {...{ key, colIndex: key, rowIndex }} />
        ))}
    </div>
  );
};
