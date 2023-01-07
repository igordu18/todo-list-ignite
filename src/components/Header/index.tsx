import styles from './styles.module.css';

import ToDoList from '../../assets/toDoList-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <ToDoList />
    </header>
  );
}
