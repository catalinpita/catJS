for (var i = 0; i < 100; i++) {

  if (i === 3)
    continue;

  if (i % 2 !== 0)
    continue;


  console.log('i=' + i);

  if (i > 21)
    break;
}