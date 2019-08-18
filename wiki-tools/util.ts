export const delay = (second: number) => new Promise(r => {
  setTimeout(r, second * 1000);
});
