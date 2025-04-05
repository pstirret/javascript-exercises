const fibonacci = function(memberNum) {
   let fibSead = 1
   
   if (typeof memberNum == "string") {
      memberNum = parseInt(memberNum);
   }
   
   // Check for 0th or 1st member
   if (memberNum == 0) {
      return 0;
   } else if(memberNum < 0) {
      return "OOPS"
   }
   
   let curMember = fibSead;
   let prevMember = 0;
   
   let tmp = 0;
   for (let i = 2; i < memberNum; i++) {
      tmp = prevMember;
      prevMember = curMember
      curMember = curMember + tmp;
   }

   return curMember + prevMember;

};

// Do not edit below this line
module.exports = fibonacci;
