function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};
 
/*

https://stackoverflow.com/questions/23934656/javascript-copy-rich-text-contents-to-clipboard

https://jsfiddle.net/jdhenckel/km7prgv4/3/

*/
