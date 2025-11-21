/*
컴포넌트 내에서 컴포넌트 사용
*/
function Car(props) {
  return (
    <h2>I'm a {props.brand}!</h2>
  );
}

function Car2(props) {
  return (
    <h2>I'm a {props.brand.model}!</h2>
  );
}

function Car3(props) {
  return (
    <li>I'm a {props.brand}!</li>
  );
}

function Garage(props) {
  let carinfo = { name: "Ford3", model: "Mustang" };
  let carName = "Ford1";
  let cars = ['Ford', 'BMW', 'Audi'];
  let array_car = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "Audi" },
    { id: 3, brand: "BMW" }
  ];
  /*
    <ol>
      {cars.map((car) => <Car3 brand={car} />)}
    </ol>
  */
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />
      <Car brand='Ford2' />
      <Car2 brand={carinfo} />
      <ol>
        {array_car.map((array_car) => <Car3 key={array_car.id} brand={array_car.brand} />)}
      </ol>
    </div>
  );
}

export default Garage;