export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  const employees = [];
  for (const department of departments) {
    employees.push(...department);
  }

  let current = 0;
  return {
    next() {
      return current < employees.length
        ? { value: employees[current++], done: false }
        : { done: true };
    },
  };
}
