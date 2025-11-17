import './Hello.css';

/*
컴포넌트 활용
Arrow function 실습

function Hello(props) {
  return (
    <h1 className="hello_h1">Hello World!!!</h1>
  );
}
*/

const Hello = (props) => {
  return (
    <h1>Hello World!!! {props.name}~~</h1>
  );
}

export default Hello;