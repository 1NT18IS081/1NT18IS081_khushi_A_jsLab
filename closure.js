let m = "everyone";
function cat(a) {
  return function (b) {
    return function (c) {
      return a + b + c + m;
    }
  }

}

console.log("Output= ");
console.log(cat('h')('e')('y '))


let r;
function disp() {
  let msg = "hfhfh";
  r = msg;
  return function () {
    msg = msg + " " + "india";
    return msg;
  }

}
console.log(r);
console.log(disp()());
console.log(r);