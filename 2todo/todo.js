const todo = {
   list: [], 
   add: function (item) {
    console.log(this.list);
    this.list.push(item);
   },
   remove: function (item) {
    this.list = this.list.filter((listItem) => listItem !== item)
   },
   game: function (a) {
      if ((a % 3 === 0) && (a % 5 !==0)) {
         return "Fizz";
      } 
      if ((a % 3 !== 0) && (a % 5 ===0)) {
         return "Buzz";
      }
      if ((a % 3 === 0) && (a % 5 === 0)) {
         return "FizzBuzz";
      }
      if ((a % 3 !== 0) && (a % 5 !== 0)) {
         return a;
      }
   
}
};

module.exports = todo;