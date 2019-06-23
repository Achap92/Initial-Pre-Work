/*Used multiple conditional ternary operators to check if a number is zero,
positive, or negative.*/
function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

checkSign(-6);
