(() => {
  let number = parseInt(prompt(`Enter a number between 1 and 7`));
  if (number === 1) {
    console.log(`Monday`);
  } else if (number === 2) {
    console.log(`Tuesday`);
  } else if (number === 3) {
    console.log(`Wednesday`);
  } else if (number === 4) {
    console.log(`Thursday`);
  } else if (number === 5) {
    console.log(`Friday`);
  } else if (number === 6) {
    console.log(`Saturday`);
  } else if (number === 7) {
    console.log(`Sunday`);
  }
})();

//  ou
/* const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let number = prompt(`Enter a number between 1 and 7`);
    console.log(day[number - 1]); */
