$(function() {
    //Capturing the value inside in the input field on button click 
    
    $("#burgerBtn").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function(result) {
            console.log(result)
            console.log("new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".delburger").on("click", function(event) {
        var id = $(this).data("id");
        var devour = {
            devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devour
        }).then(
          function() {
            console.log("Gluttony");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


})

