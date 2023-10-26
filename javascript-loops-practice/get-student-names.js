/* exported getStudentNames */
function getStudentNames(students) {
  const arr = [];
  for (const key in students) {
    arr.push(students[key].name);
  }
  return arr;
}
