const token = 'abc';
const loadedUser = {
  id: 'something',
  name: 'else'
}

const someObject = {
  token,
  userId: loadedUser.id,
  userName: loadedUser.email,
};

console.log(someObject);
console.log(JSON.stringify(someObject));
