const userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('Status:', xhr.status);
  console.log('Response:', xhr.response);
  xhr.response.forEach((user) => {
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    userList.appendChild(listItem);
  });
});

xhr.send();
