import { useState } from 'react';

import styles from './styles.module.css';

import Clipboard from '../../assets/clipboard.svg';
import { Item } from './Item';

interface ListProps {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

export function List({ list, setList }: ListProps) {
  const [completedTasks, setCompletedTasks] = useState(0);

  function deleteItemList(item: string) {
    setList((value) => value.filter((text) => text !== item));
    if ((completedTasks === 0)) return;
    setCompletedTasks((value) => value - 1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasksCount}>
        <strong className={styles.createTasks}>
          Tarefas criadas <span>{list.length}</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas
          <span>
            {completedTasks} de {list.length}
          </span>
        </strong>
      </div>

      {list.length > 0 ? (
        <section>
          {list.map((value) => {
            return (
              <Item
                key={value}
                text={value}
                list={list}
                handleDelete={deleteItemList}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
              />
            );
          })}
        </section>
      ) : (
        <section className={styles['empty-list']}>
          <Clipboard />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </section>
      )}
    </div>
  );
}
