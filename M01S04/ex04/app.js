for (var i = 0; i < 100; i++) {

  if (i === 3)
    continue;

  if (i % 2 !== 0)
    continue;


  console.log('i=' + i);

  if (i > 21)
    break;
}

// 6
for (var i = 0; i < 99; i++) {
  console.log(i);
}

// 7
for (var i = 0; i <= 99; i++) {
  console.log(i);
}

// 8
for (var i = 0; i < 99; i++) {
  if (i === 42)
    break;
  console.log(i);
}

// 9
for (var i = 0; i < 99; i++) {
  if (i % 2 !== 0)
    continue;
  console.log(i);
}

// 10
for (var i = 0; i <= 99; i+=3) {
  console.log(i);
}