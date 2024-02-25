import React from 'react';

function App() {
  let func = function () {
    let foo = 'text';
    return foo;
  };

  var number = 10;
  var number2 = 20;

  if (number == number2) {
    console.log('Hello World');
  }

  return <div>App</div>;
}

export default App;
