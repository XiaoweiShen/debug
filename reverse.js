var input = process.argv[2];
if (input)
  console.log(reversews(input));

function reversews(original) {
  return original.split('').reverse().join('');
}
