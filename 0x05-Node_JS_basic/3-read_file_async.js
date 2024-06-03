const fs = require('fs');

// Read the content of the file asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.length > 0);
      console.log(`Number of students: ${lines.length - 1}`);
      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        if (lines.indexOf(line) !== 0) {
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          fields[student[3]].push(student[0]);
        }
      }
      for (const field in fields) {
        if (field) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
