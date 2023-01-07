import { useEffect, useState } from 'react';

import './global.css';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { List } from './components/List';

export function App() {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <Header />
      <main>
        <Form text={text} setText={setText} setList={setList} />
        <List list={list} setList={setList} />
      </main>
    </div>
  );
}
