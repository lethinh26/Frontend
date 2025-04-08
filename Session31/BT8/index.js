let table = document.getElementById("employeeTable");
const employee = [
  {
    id: 1,
    name: "John",
    age: 14,
    address: "idk",
  },
  {
    id: 2,
    name: "John1",
    age: 14,
    address: "idk",
  },
  {
    id: 3,
    name: "John",
    age: 14,
    address: "idk",
  },
  {
    id: 4,
    name: "John",
    age: 14,
    address: "idk",
  },
  {
    id: 5,
    name: "John",
    age: 14,
    address: "idk",
  },
]

employee.forEach(employee => {
  let row = document.createElement("tr");
  row.innerHTML = `
  <td>${employee.id}</td>
<td>${employee.name}</td>
<td>${employee.age}</td>
<td>${employee.address}</td>`;
  table.append(row);
})