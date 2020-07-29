import React, { useReducer, useCallback, useRef } from 'react';
import './App.css';
import Input from './components/Input';
import UserList from './components/UserList';
import useInputs from './hooks/useInputs';

const initState = {
  users: [
    { id: '1', name: '전혜수', email: 'hyesu2@tnctec.co.kr', active: true },
    { id: '2', name: '김명진', email: 'kjpmj@tnctec.co.kr', active: false },
    { id: '3', name: '박태용', email: 'ty_park@tnctec.co.kr', active: false },
    { id: '4', name: '임진성', email: 'limjs@tnctec.co.kr', active: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'ADD':
      return {
        ...state,
        users: state.users.concat({
          id: action.id,
          name: action.name,
          email: action.email,
        }),
      };
    case 'RESET':
      return {
        ...state,
        inputs: {
          name: '',
          email: '',
        },
      };
    default:
      break;
  }
}

function App2() {
  const [{ name, email }, onInputChange, onReset] = useInputs({
    name: '',
    email: '',
  });

  const [state, dispatch] = useReducer(reducer, initState);
  const { users } = state;
  const nextId = useRef(5);

  // active 값 변경
  const onToggle = useCallback((id) => {
    // setUsers((users) => {
    //   return users.map((user) => {
    //     return user.id === id ? { ...user, active: !user.active } : user;
    //   });
    // });
    dispatch({
      type: 'TOGGLE',
      id,
    });
  }, []);

  // user 삭제
  const onRemove = useCallback((id) => {
    // setUsers((users) => {
    //   return users.filter((user) => user.id !== id);
    // });
    dispatch({
      type: 'REMOVE',
      id,
    });
  }, []);

  // user 추가
  const onAdd = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: 'ADD',
        id: nextId.current,
        name,
        email,
      });

      nextId.current += 1;

      onReset();
    },
    [name, email, onReset],
  );

  return (
    <>
      <Input
        name={name}
        email={email}
        onInputChange={onInputChange}
        onAdd={onAdd}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default App2;
