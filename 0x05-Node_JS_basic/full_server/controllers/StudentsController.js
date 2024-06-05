// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studs = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const fds = Object.keys(studs).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of fds) {
        responseText += `Number of students in ${field}: ${studs[field].length}. List: ${studs[field].join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      if (!students[major]) {
        res.status(500).send('Cannot load the database');
        return;
      }

      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
