
// .sort numerically exersize 

// var array = [10, 2, 5, 1, 9];
// array.sort(function(a, b){
//    return a - b;
// });
// console.log(array);

// Advanced sorting exersice
//Say we have a list of students that we would like to sort in alphabetical order. If students have the same name, then we prioritize the older student first.

//Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

var students = [
   { id: 1, name: "bruce",    age: 40 },
   { id: 2, name: "zoidberg", age: 22 },
   { id: 3, name: "alex",     age: 22 },
   { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
   var nameA = a.name.toUpperCase(); 
   var nameB = b.name.toUpperCase(); 
   if (nameA < nameB) {
      return -1;
   }
   if (nameA > nameB) {
      return 1 ;
   }
   if (nameA === nameB) {
      if (a.age < b.age) {    
      return 1;
      }
   }
   return 0;
});
console.log(students);