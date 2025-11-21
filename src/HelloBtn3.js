function HelloBtn3() {
  const message = (name, event) => {
    alert("[" + event.target.id + "] Hello " + name + " !!!" + event.type);
  }
  return (
    <button id="btn_hello3" onClick={(e) => { message("123456", e) }}>Click Me</button>
  );
}

export default HelloBtn3;