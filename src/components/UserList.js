import React, { useEffect } from 'react';

const User = React.memo(({ user, onToggle, onRemove }) => {
  console.log('user ReRendering');

  useEffect(() => {
    console.log(`${user.name}이(가) 마운트됨!`);
    return () => {
      console.log(`${user.name}이(가) 언마운트됨!`);
    };
  }, [user]);
  // deps를 넣어놔야 최신버전이랑 비교해서 변경여부를 알 수 있음.

  const style = {
    color: user.active ? 'red' : 'black',
    cursor: 'pointer',
  };
  return (
    <>
      <li style={style} onClick={() => onToggle(user.id)}>
        이름 : {user.name} 이메일: {user.email}
      </li>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </>
  );
});

function UserList({ users, onToggle, onRemove }) {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default React.memo(UserList);
