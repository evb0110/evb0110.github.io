const border = "(^|(?<=\\p{L})(?=[^\\p{L}])|(?<=[^\\p{L}])(?=\\p{L})|$)";
const letter = "\\p{L}";

function toUnicode( str ){
  str = str.replace( /\\w/g, letter);
  str = str.replace( /\\b/g, border);
  return str;
}



