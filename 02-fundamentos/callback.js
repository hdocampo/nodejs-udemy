// console.log('******* USO DE CALLBACKS ******');

// let getUserById = (id, callback) => {
//   let user = {
//     name: 'Fernando',
//     id
//   }

//   if (id === 20) {
//     callback(`User with id ${id} does not exists`);
//   } else {
//     callback(null, user);
//   }
// }

// getUserById(10, (err, user) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('User of bd founded', user)
// })

console.log('******* PROBLEMAS DE CALLBACKS ******');

let employeeList = [{
  id: 1,
  name: 'Hugo'
}, {
  id: 2,
  name: 'Bruno'
}, {
  id: 3,
  name: 'Agustin'
}, {
  id: 4,
  name: 'Leo'
}];

let salaryList = [{
  id: 1,
  payment: 45000
}, {
  id: 2,
  payment: 60000
}, {
  id: 3,
  payment: 80000
}, {
  id: 5,
  payment: 55000
}]

const getEmployeeById = (id, callback) => {
  const employeeDB = employeeList.find(employee => employee.id === id)

  if (!employeeDB) {
    callback(`Employee with id ${id} was not founded in DB`)
  } else {
    callback(null, employeeDB)
  }
}

getPaymentByEmployee = (employee, callback) => {

  const salary = salaryList.find(salary => salary.id === employee.id);
  
  if (!salary) {
    callback(`Not found a salary for employe ${employee.name}`)
  } else {
    callback(null, {
      name: employee.name,
      salary: salary.payment,
      id: employee.id
    })
  }
}

getEmployeeById(4, (err, employeeInfo) => {
  if (err) {
    return console.log(err)
  }
  
  getPaymentByEmployee(employeeInfo, (err, response) => {
    if (err) {
      return console.log(err)
    }

    console.log(`The total salary of ${response.name} is ${response.salary}`)
  })
})