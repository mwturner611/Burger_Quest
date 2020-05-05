$(function() {
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