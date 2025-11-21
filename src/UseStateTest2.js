import React from 'react'

import { useState } from 'react';

export default function UseStateTest2() {
  const [color, setColor] = useState("RED");
  const changeColor = (c) => {
    console.log("changeColor" + color);
    setColor(c); // 항상 set으로 해야 함
    // color = "Green"; // 이렇게 하면 안됨
  }

  console.log(color);

  return (
    <>
      <div class='colorgroup'>
        <h3>Color is {color}</h3>
        <button type='button' onClick={() =>
          changeColor('Red')}>Red</button>
        <button type='button' onClick={() =>
          setColor('Blue')}>Blue</button>
      </div>
    </>
  );
}