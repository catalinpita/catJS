var i;

var number=prompt('Numarul pentru care afisej multimplii:'||10);

for (i = 0; i <= 100; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acestnumar este divizibil cu ${number}`);
}

// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” 

// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000. 
for (i = 0; i <= 1000; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acestnumar este divizibil cu ${number}`);
}
var upperLimit=prompt('Limita pana la care calculez multiplii')||100;
// Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli. 
for (i = 0; i <= upperLimit; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acestnumar este divizibil cu ${number}`);
}