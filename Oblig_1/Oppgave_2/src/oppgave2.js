// List of users
const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// Creating variables for getting the HTML-elements
const userUl = document.getElementById("users");
const inputSearch = document.getElementById("name");
const inputAge = document.getElementById("age");
const buttonFilter = document.getElementById("filter");

// Table for user-list
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const main = () => {
  createTableUI(users);
};

main();

// Function for search name input field
const searchFunction = () => {
  const name = inputSearch.value;
  if (name) {
    const result = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    if (result) {
      createTableUI([result]);
    } else {
      userUl.innerHTML = `Ingen treff på navnet ${name}`;
    }
  } else {
    createTableUI(users);
  }
};

// Function for age filter input field
const filterFunction = () => {
  const ageValue = inputAge.value;
  if (ageValue && Number(ageValue)) {
    const result = users.filter((user) => user.age > ageValue);
    if (result && result.length > 0) {
      createTableUI(result);
    } else {
      userUl.innerHTML = `Ingen treff på personer over ${ageValue} år`;
    }
  } else {
    createTableUI(users);
  }
};

// Adding listeners on the inputfield and button
inputSearch.addEventListener("keyup", searchFunction);
buttonFilter.addEventListener("click", filterFunction);
