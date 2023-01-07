import { useEffect, useState } from 'react';

import styles from './styles.module.css';
import Trash from '../../../assets/trash.svg';

interface ItemProps extends React.DOMAttributes<HTMLInputElement> {
  text: string;
  list: string[];
  handleDelete: (item: string) => void;
  completedTasks: number;
  setCompletedTasks: React.Dispatch<React.SetStateAction<number>>;
}

export function Item({
  text,
  handleDelete,
  setCompletedTasks,
  completedTasks,
}: ItemProps) {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
    if (!checked) setCompletedTasks((value) => value + 1);
    if (!(completedTasks === 0) && checked)
      setCompletedTasks((value) => value - 1);
  }

  return (
    <div className={styles.wrapperItem}>
      <label className={styles.containerInput}>
        <input type="checkbox" onClick={() => handleChecked()} />
        <span className={styles.checkmark}></span>
      </label>

      <span className={`${styles.containerText} ${checked && styles.containerTextChecked}`}>{text}</span>
      <button className={styles.delete} onClick={() => handleDelete(text)}>
        <Trash />
      </button>
    </div>
  );
}
