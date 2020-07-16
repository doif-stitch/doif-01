import React, { useState } from 'react';

export function Hello(value) {
  //   const [text, setText] = useState(() => 1);
  const [text, setText] = useState('apple');

  const onClickFunction = () => {
    setText('Click!');
  };

  console.log(value);
  return (
    <>
      <span>{text}</span>
      <button onClick={onClickFunction}>Button</button>
    </>
  );
}

export function Hello2({ name, hello }) {
  //   const [text, setText] = useState(() => 1);
  const [text, setText] = useState('apple');

  const onClickFunction = () => {
    setText('Click!');
  };

  console.log(name);
  console.log(hello);
  return (
    <>
      <span>{text}</span>
      <button onClick={onClickFunction}>Button</button>
    </>
  );
}

export function Hello3({ isValid }) {
  //   const [text, setText] = useState(() => 1);
  const [text, setText] = useState('apple');

  console.log(isValid);

  const customStyle = {
    color: 'red',
  };

  return (
    <>
      {isValid ? <div>안녕</div> : null}
      {isValid && <div style={customStyle}>헬로</div>}
    </>
  );
}
