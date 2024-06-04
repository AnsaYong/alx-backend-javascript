const express = require('express');
const fs = require('fs');
// const path = require('path');
// const countStudents = require('./3-read_file_async');

const app = express();

const countStudents = async (database) => new Promise((resolve, reject) => {
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.length > 0);
    const headers = lines.shift().split(',');
    const students = lines.map((line) => {
      const student = line.split(',');
      return headers.reduce((obj, header, index) => {
        // eslint-disable-next-line no-param-reassign
        obj[header] = student[index];
        return obj;
      }, {});
    });

    const fields = {};
    for (const student of students) {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    }

    let output = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      if (names) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
    }

    resolve(output);
  });
});

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const database = process.argv[2];
  try {
    const studentList = await countStudents(database);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
