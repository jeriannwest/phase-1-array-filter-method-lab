// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, search) {
  return drivers.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === search.toLowerCase()
  );
}
function fuzzyMatch(drivers, names) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(names.toLowerCase()) === 0
  );
}
function matchName(drivers, searchName) {
  return drivers.filter((record) => record.name === searchName);
}
