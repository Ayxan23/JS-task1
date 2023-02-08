const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
];

// 1. Verilen arrayda id-e gore find  işini görün
function findById(num) {
  let result = persons.find((item) => item.id == num);
  return result;
}
console.log(findById(4));


// 2. Gender-ə əsasən filter işini görün
function findByGender(str) {
  let result = persons.filter((item) => item.gender == str);
  return result;
}
console.log(findByGender("male"));


// 3. Yeni bir object əlavə edin həm əvvələ həm sonuna
function addObj(obj) {
  persons.push(obj);
  persons.unshift(obj);
  return persons;
}
console.log(addObj({ name: "Ayxan" }));


// 4. Gender-ə əsasən hər birinin "male" ya da "female" olma ehtimalını yoxlayın (some vs every)
function checkByGender(str) {
  let result = persons.some((item) => item.gender == str);
  let result2 = persons.every((item) => item.gender == str);
  return {
    result,
    result2,
  };
}
console.log(checkByGender("male"));