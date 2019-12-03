const calculateSurface = (L, l) => {
  if (l) {
    return l * L;
  } else {
    return Math.pow(L, 2);
  };
}

console.log(`Suprafata patrat=${calculateSurface(6)}.`);
console.log(`Suparfata dreptunghi=${calculateSurface(6,7)}`);