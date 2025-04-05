const findTheOldest = function(people) {
   let outPerson = new Object();
   let highestAgeIdx = -1;
   let highestAge = -1;
   let curYear = new Date().getFullYear();

   people.forEach((person, i) => {
      if('yearOfBirth' in person) {
         let curAge = 0;
         if('yearOfDeath' in person) {
            curAge = person.yearOfDeath - person.yearOfBirth;
         }
         else {
            curAge = curYear - person.yearOfBirth;
         }

         if (curAge > highestAge){
            highestAge = curAge;
            highestAgeIdx = i;
         }
      }
   });

   return people[highestAgeIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
