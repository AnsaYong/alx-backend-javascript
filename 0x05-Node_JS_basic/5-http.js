const http = require('http');
const fs = require('fs');
const url = require('url');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const numberOfStudents = students.length;
    const fields = {};

    students.forEach((student) => {
      // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    let result = `Number of students: ${numberOfStudents}\n`;
    for (const field in fields) {
      // eslint-disable-next-line no-prototype-builtins
      if (fields.hasOwnProperty(field)) {
        const studentList = fields[field];
        result += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }
    }
    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    const databasePath = process.argv[2];
    try {
      const studentData = await countStudents(databasePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      res.end(studentData);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
