const fs = require('fs');

// Read the content of the file
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line.length > 0);

    // Get the number of students
    let count = 0;
    const students = {};
    for (const line of lines.slice(1)) {
      count += 1;
      const student = line.split(',');
      if (!students[student[3]]) students[student[3]] = [];
      students[student[3]].push(student[0]);
    }

    // Display the number of students
    console.log(`Number of students: ${count}`);
    for (const field in students) {
      if (field) {
        const list = students[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }

    // Return the number of students
    return count;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
