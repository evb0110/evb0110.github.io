function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html",  str);
    let parser = new DOMParser();
    let text = parser
       .parseFromString(str, 'text/html')
       .documentElement
       .textContent
       ;
    text = text.replace(/\n\n\n/gm, "");
    text = text.replace(/^\s*\n/, "");
    e.clipboardData.setData("text/plain", text);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};
 
/*

https://stackoverflow.com/questions/23934656/javascript-copy-rich-text-contents-to-clipboard

https://jsfiddle.net/jdhenckel/km7prgv4/3/

a better solution:
https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html

*/
