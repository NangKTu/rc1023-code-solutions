const business = {
  open: '9:00',
  close: '5:00',
  totalEmployees: 4,
  daysOpen: ['M', 'W', 'Th', 'F'],
  employees: {
    Leon: { position: 'CEO', daysOfWeekWorking: ['M', 'W', 'F'] },
    Helena: { position: 'Manager', daysOfWeekWorking: ['M', 'W', 'F'] },
    Mike: { position: 'Regular', daysOfWeekWorking: ['M', 'W', 'Th', 'F'] },
    Jim: { position: 'Regular', daysOfWeekWorking: ['M', 'W', 'Th', 'F'] },
  },
};

const weekend = ['S', 'Su'];

function addWeekends() {
  business.daysOpen = business.daysOpen.concat(weekend);
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking =
      business.employees[employee].daysOfWeekWorking.concat(weekend);
  }
}

addWeekends(business);
console.log(business);

function addEmployees() {
  const xhr = new XMLHttpRequest();
  const users = JSON.parse(xhr.responseText);
  for (let i = 0; i < 4; i++) {
    const user = users[i];
    const newEmployee = createEmployee(user);
    business.employees[user.name] = newEmployee;
  }
  business.totalEmployees += 4;
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhr.send();
}

function createEmployee(user) {
  const newEmployeeObj = {
    position: 'Tester',
    daysOfWeekWorking: randomWorkdays(),
    fullTime: checkFullTime(),
  };
  return { ...user, ...newEmployeeObj };
}

addEmployees();

function randomWorkdays() {}

function checkFullTime() {}
