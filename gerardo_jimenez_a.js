
function fizzBuzz(number) {
  for (var i = 1; i < number + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

function fizzBuzz2(number) {
  var fizz = '';
  var buzz = '';
  for (var i = 1; i < number + 1; i++) {
    (i % 3 === 0) ? fizz = 'Fizz' : fizz = '';
    (i % 5 === 0) ? buzz = 'Buzz' : buzz = '';
    (fizz !== '' || buzz !== '') ? console.log(`${fizz}${buzz}`) : console.log(i);
  }
}

fizzBuzz2(30);
