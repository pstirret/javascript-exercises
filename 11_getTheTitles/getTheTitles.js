const getTheTitles = function(books) { 
   let outArr = [];
   
   books.forEach((book,i) => {
      outArr[i] = book.title;
   });

   return outArr;
};

// Do not edit below this line
module.exports = getTheTitles;
