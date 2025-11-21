function HelloBtn2() {

  const message = (name) => {
    alert("Hello" + name + "!!!");
  };
  return (
    <>
      <button onClick={() => { message("1234") }}>버튼2입니다.</button>
    </>
  );
}

export default HelloBtn2;