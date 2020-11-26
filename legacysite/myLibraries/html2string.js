export function html2string(htm){
  let parser = new DOMParser();
  let text = parser.parseFromString(htm, 'text/html').documentElement.textContent;
  return text;
}
