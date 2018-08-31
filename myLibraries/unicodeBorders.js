const border = "(^|(?<=[\\p{L}\\p{M}])(?=[^\\p{L}\\p{M}])|(?<=[^\\p{L}\\p{M}])(?=[\\p{L}\\p{M}])|$)";
const letter = "(\\p{L}\\p{M}*)";

function toUnicode( str ){
  str = str.replace( /\\w/g, letter);
  str = str.replace( /\\b/g, border);
  return str;
}



