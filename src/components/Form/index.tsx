import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

interface FormProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Form({ text, setText, setList }: FormProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (text === '') return;
    setList((value) => [...value, text]);
    setText('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
