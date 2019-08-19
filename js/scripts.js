$(document).ready(function() {
  $("form.form").submit(function(event) {
    var mySurvey = ["color", "animal", "dish", "travel"];

    mySurvey.forEach(function(survey) {
      // console.log("I am survey val: " + $("input#" + survey).val());
      console.log(survey);
      var userInput = $("input#" + survey).val();
      $("#" + survey).text(userInput);
      alert(userInput);
      $("#" + survey + "-response").text(userInput);

    });

    $("#responses").show();

    event.preventDefault();

/*    var myArray = [favColor, favAnimal, favDish, favCountry]
    alert(myArray); */

  });
});




    // This is the original method of collecting the user input and later displaying it (not DRY code)
    // $(document).ready(function(){
    //  $("form.form").submit(function(event) {
    // var favColor = $("input#color").val();
    //    var favAnimal = $("input#animal").val();
    //    var favDish = $("input#dish").val();
    //    var favCountry = $("input#travel").val();

    //    $("#responses").show();
    //    $("#color-response").text(favColor);
    //    $("#animal-response").text(favAnimal);
    //    $("#food-response").text(favDish);
    //    $("#country-response").text(favCountry);






//These are exercises to practice manipulating cloneArray
//    var cloneArray = myArray.slice();
//    cloneArray.reverse();
//    cloneArray[0];
//    cloneArray.push("hola")
//    alert(cloneArray);
