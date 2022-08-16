function add(numArray = [5,2,8]) {
  let total = 0;
  numArray.forEach((element) => {
    total += element;
  });
  console.log(total);
}

add()