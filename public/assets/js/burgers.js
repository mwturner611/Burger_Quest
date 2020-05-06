$(function() {
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newEatState = {
            devoured: newDevoured
        }

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                location.reload();
            }
        )
    })




    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#bu").val().trim(),
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                location.reload();
            }
        )
    });
});