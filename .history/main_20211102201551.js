function checkPositiveInteger(number) {
  if (Number.isInteger(number) == 'true' && number > 0) {
    return true;
  } else {
    return false;
  }
}

checkPositiveInteger(-1)