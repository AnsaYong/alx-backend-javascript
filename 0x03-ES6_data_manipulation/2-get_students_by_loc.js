export default function getStudentsByLocation(students, city) {
  if (city.trim() === '') {
    return [];
  }
  return students.filter((student) => student.location.includes(city));
}
