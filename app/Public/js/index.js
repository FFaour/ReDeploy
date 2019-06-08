// Get references to page elements
var $ = $("#submitBtn");

// The API object contains methods for each kind of request we'll make
var API = {
  saveAccount: function(account) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/accounts",
      data: JSON.stringify(account)
    });
  },
  getAccount: function() {
    return $.ajax({
      url: "api/accounts",
      type: "GET"
    });
  },
  deleteAccount: function(id) {
    return $.ajax({
      url: "api/accounts/" + id,
      type: "DELETE"
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var account = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
