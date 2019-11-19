console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana 
for (let index = person.skills.length - 1; index >= 0; index--) {
  console.log(person.skills[index]);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//  In mod similar, afiseaza skillurile care incep cu c 
for (let index = person.skills.length - 1; index >= 0; index--) {
  if (person.skills[index].startsWith('c'))
    console.log(person.skills[index]);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//  Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."

var friends = '"Numele de familie ale prietenilor mei sunt';
for (let index = 0; index < person.friends.length; index++) {
  friends += person.friends[index].surname + ' ,';
}
console.log(friends.substring(0, friends.lastIndexOf(' ,')) + '.');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends 
var totalAge = 0;
for (let index = 0; index < person.friends.length; index++) {
  totalAge += person.friends[index].age;
}
console.log("numarul total de ani pe care il au persoanele din arrayul friends " + totalAge);
var suma=person.friends.reduce(function(sum,friend){
  sum+=friend.age;
  return sum;
},0);
console.log("numarul$$$$$$$$$$$$$$$$$ " + suma);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//  Folosind un for, afiseaza suma anilor  persoanelor. 

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
