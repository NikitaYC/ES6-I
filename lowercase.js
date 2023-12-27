let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const uppertolower = (char) => {
  let newChar = "";
  for (let i = 0; i < lowercase.length; i++) {
    if (char == uppercase[i]) {
      newChar = lowercase[i];
    }
  }
  return newChar;
};

const main = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let bag = "";
    for (let j = 0; j < str.length; j++) {
      let eachChar = uppertolower(str[j]);
      bag += eachChar;
    }
    result.push(bag);
  }
  console.log(result);
};

main(["MA", "SA", "I", "SCH", "OOL"]);
