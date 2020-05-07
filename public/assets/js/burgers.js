
// nest all functions in $(function(){})
$(function() {
    // on click event for all the devour buttons next to burgers.  
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newEatState = {
            devoured: newDevoured
        }

        // send ajax call to server sending specific id of burger to be changed
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                location.reload();
            }
        )
    })



// on click event to add a new burger to the database
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#bu").val().trim(),
        };
        // ajax call to post the burger name to database
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