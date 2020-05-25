function capital_letter(str) {
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

console.log(capital_letter("you don't have the wifi password"));

console.log(capital_letter("debugging is a part of development"));
