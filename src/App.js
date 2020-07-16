import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello, Hello2, Hello3 } from './components/Hello';
import Counter from './components/Counter';

function App() {
  // const [value, setValue] = useState(); // state를관리하는hook;
  const valueArr = useState();
  const value = valueArr[0];

  return (
    <>
      <Hello name={true} /> {/* Boolean */}
      <Hello name={'문자열'} /> {/* 문자열 */}
      <Hello name="안녕" hello="안녕하세요" />
      <Hello2 name="안녕" hello="안녕하세요" />
      <Hello3 isValid />
      <Counter />
    </>
  );
}

export default App;
