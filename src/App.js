import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello, Hello2, Hello3 } from './components/Hello';
import Counter from './components/Counter';
import Wrapper from './components/Wrapper';
import Input from './components/Input';
import UserList from './components/UserList';

function App() {
  // const [value, setValue] = useState(); // state를관리하는hook;
  const valueArr = useState();
  const value = valueArr[0];

  const nextId = useRef(5);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  const [users, setUsers] = useState([
    { id: '1', name: '전혜수', email: 'hyesu2@tnctec.co.kr' },
    { id: '2', name: '김명진', email: 'kjpmj@tnctec.co.kr' },
    { id: '3', name: '박태용', email: 'ty_park@tnctec.co.kr' },
    { id: '4', name: '임진성', email: 'limjs@tnctec.co.kr' },
  ]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onAdd = (e) => {
    e.preventDefault();
    const { name, email } = inputs;

    setUsers(users.concat({ id: nextId.current, name, email }));

    setInputs({ name: '', email: '' });

    nextId.current += 1;
  };

  return (
    <>
      {/* <Hello name={true} />  Boolean 
      /*<Hello name={'문자열'} />  문자열 */
      /* <Hello name="안녕" hello="안녕하세요" />
      <Hello2 name="안녕" hello="안녕하세요" />
      <Hello3 isValid />
      <Wrapper>
        <Counter />
      </Wrapper>*/}
      <Input inputs={inputs} onInputChange={onInputChange} onAdd={onAdd} />
      <UserList users={users} />
    </>
  );
}

export default App;
