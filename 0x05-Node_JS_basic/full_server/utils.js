import fs from 'fs';

// eslint-disable-next-line arrow-body-style
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      // eslint-disable-next-line no-unused-vars
      const header = lines.shift().split(',');
      const students = lines.filter((line) => line.trim() !== '').map((line) => line.split(','));

      const fields = {};
      for (const student of students) {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }

      resolve(fields);
    });
  });
};

export default readDatabase;
