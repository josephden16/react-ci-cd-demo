function capitalize(value) {
  let textArray = value.split(" ");
  let capitalizedText = "";
  let conjunctions = ["the", "of", "a"];
  for (var i = 0; i < textArray.length; i++) {
    if (conjunctions.includes(textArray[i])) {
      continue;
    }
    capitalizedText +=
      textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + " ";
  }
  return capitalizedText.trim();
}

function numberWithCommas(x) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


export {
  capitalize,
  numberWithCommas
}
