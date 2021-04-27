import { FC } from "react";

import { Row } from "./Row";

import styles from "./Board.module.css";

export const Board: FC<{ rowCount: number; cellCount: number }> = ({
  rowCount,
  cellCount,
}) => {
  return (
    <div className={styles.board}>
      {Array(rowCount)
        .fill(null)
        .map((_, index) => (
          <Row key={index} cellCount={cellCount} rowIndex={index} />
        ))}
    </div>
  );
};
