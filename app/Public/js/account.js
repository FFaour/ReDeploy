$(document).ready(function() {
  //Get references to account elements and assign variables for later processing
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // **********************************
  // ** Function declaration section **
  // **********************************

  //Function to get account values from form
  function getAccountEntry(event) {
    event.preventDefault();
    userName = $("#userName")
      .val()
      .trim();
    password = $("#password")
      .val()
      .trim();
    organization = $("#organization")
      .val()
      .trim();
    address = $("#address")
      .val()
      .trim();
    state = $("#state")
      .val()
      .trim();
    zipCode = $("#zipCode")
      .val()
      .trim();
    contName = $("#contName")
      .val()
      .trim();
    phoneNum = $("#phoneNum")
      .val()
      .trim();
    faxNum = $("#faxNum")
      .val()
      .trim();
    email = $("#email")
      .val()
      .trim();

    accountData =
      "api/accountSubmit/" +
      userName +
      "/" +
      password +
      "/" +
      organization +
      "/" +
      address +
      "/" +
      state +
      "/" +
      zipCode +
      "/" +
      contName +
      "/" +
      phoneNum +
      "/" +
      faxNum +
      "/" +
      email;
    console.log("getAccountEntry returned :" + accountData);
  }

  // ****************************
  // ** Event Listener Section **
  // ****************************

  // Submit Account button handler
  $("submitAccountBtn").on("click", function(event) {
    event.preventDefault();
    getAccountEntry().then(
      $.post({ url: "api/accountSubmit", data: AccountData })
    );
    console.log("Account POST using URL : " + accountData);
  });
});
