/*function comparacaoNumero (num3, num6) {
    const primeiraFrase = criaPrimeiraFrase(num3, num6);
	  const segundaFrase = criaSegundaFrase(num3, num6);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num3, num6) {
	let primeiraFrase = `Os números ${num3} e ${num6}`;
	let simNao = 'não';

	if (num3 === num6) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num3, num6) {
	const soma = num3 + num6;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparacaoNumero(3, 6)); */

//atribuiçaõ
/*numberOne = 1

console.log(numberOne + 2);

var numberOne; */

/* var firstName = ('tiago');
  var lastName = 'souza';
if(firstName === 'tiago') {
  var firstName = 'pedro';
  let lastName = 'gomes';
}

console.log(firstName, lastName); */

/*const MY_NAME = ('tiago');
const SOBRENOME_ONE = 'gomes';
const SOBRE_TU = 'araujo';
if (MY_NAME === 'tiago') {
  const NAME_AM = 'mario';
  
  console.log(MY_NAME, NAME_AM); 
} */

// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('ovo');

//substituiNumerosPares

function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);


