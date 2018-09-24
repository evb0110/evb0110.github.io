const border = "(^|(?<=[\\p{L}\\p{M}])(?=[^\\p{L}\\p{M}])|(?<=[^\\p{L}\\p{M}])(?=[\\p{L}\\p{M}])|$)";
const letter = "(?:\\p{L}\\p{M}*)";

function toUnicode( str ) {
  str = str.replace( /\\w/g, letter);
  str = str.replace( /\\b/g, border);
  return str;
}


const vowel     =  "(?:A|E|I|O|U|Y|a|e|i|iͧ|o|u|y|Ä|Å|Ë|Ö|Ü|á|á̧|â|ä|å|é|ê|ë|í|î|ó|ô|ö|ú|û|ü|Ā|ā|ā́|ă|ą̂|ē|ĕ|ī|İ|ı|ō|ŏ|ū|ŭ|ŭ́|Ə|ǔ|ȧ|ȩ̄|ȯ|ə|ə́|и|о|ю|Ạ|ạ|ạ́|ậ|ắ|ẹ|ọ|ộ|ụ|ụ̂)";
const consonant =  "(?:B|B́|C|D|F|G|G̣|H|H̱|J|K|L|M|N|P|Q|R|R̅|S|S̍|T|V|W|X|Y|Z|b|b̧|c|c̄|d|f|f̣|g|h|j|k|k̇|l|m|n|n̄|p|p̄|p̣|q|q̣|r|r̄|r̄̄|s|s̄|t|t́|v|w|x|y|z|z̄|Ç|ß|ç|ć|Č|č|ğ|Ġ|ġ|ģ|ķ|ń|ň|ŕ|ś|ŝ|Ş|ş|ş́|ş̇|Š|š|Ţ|ţ|Ž|ž|Ǧ|ǧ|ǧ̣|Ɂ|ɧ|ʔ|ʕ|ʕ́|ʕ̣|ʾ|ʿ|в|й|к|п|р|с|т|х|Ҫ|ҫ|ҫ́|ҫ̂|ҫ̄|ع|ḅ|ḇ|ḉ|ḍ|Ḏ|Ḏ̣|ḏ|ḏ̣|ḏ̣̣|Ḥ|ḥ|ḳ|ḳ̇|ḷ|ṃ|ṅ|ṇ|ṗ|ṛ|ṝ|Ṡ|ṡ|Ṣ|ṣ|ṫ|Ṭ|ṭ|Ṯ|ṯ|ẓ|ẖ|ﻉ)";

function vowelConsonant( str ) {
  str = str.replace( /\\V/g, vowel);
  str = str.replace( /\\C/g, consonant);
  return str;
}

