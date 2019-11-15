for (var i = 0; i < 100; i++) {
  if (i === 3)
    continue;

  console.log('i=' + i);

  if (i > 10)
    break;
}