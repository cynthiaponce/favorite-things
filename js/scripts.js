$(document).ready(function(){
  $("form.form").submit(function(event){
    var favColor = $("input#color").val();
    var favAnimal = $("input#animal").val();
    var favDish = $("input#dish").val();
    var favCountry = $("input#travel").val();



    var myArray = [favColor, favAnimal, favDish, favCountry]
    alert(myArray);

//These are exercises to practice manipulating cloneArray
//    var cloneArray = myArray.slice();
//    cloneArray.reverse();
//    cloneArray[0];
//    cloneArray.push("hola")
//    alert(cloneArray);






    $("#responses").show();
    $("#color-response").text(favColor);
    $("#animal-response").text(favAnimal);
    $("#food-response").text(favDish);
    $("#country-response").text(favCountry);

    event.preventDefault();




  });
});
