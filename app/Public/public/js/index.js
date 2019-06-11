//Get references to supply donation elements and assign variables for later processing
var supplyURL = "";
var item = "";
var quantity = 0;
var unit = "";
var charity = "";

// Get references to account page elements and assign variables for later processing
var accountURL = "";
var userName = "";
var password = "";
var organization = "";
var address = "";
var state = "";
var zipCode = "";
var contName = "";
var phoneNum = "";
var faxNum = "";
var email = "";

// **********************************
// ** Function declaration section **
// **********************************

//Function to get supply values from form
function getSupplyEntry() {
  item = $("#item")
    .val()
    .trim();
  quantity = $("#quantity")
    .val()
    .trim();
  unit = $("#unit")
    .val()
    .trim();
  charity = $("#charity")
    .val()
    .trim();

  supplyURL =
    "/api/supplySub/" + item + "/" + quantity + "/" + unit + "/" + charity;
  console.log("getSupplyEntry returned :" + supplyURL);
}

//Function to get account values from form
function getAccountEntry() {
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

  accountURL =
    "/api/accSubmit/" +
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
  console.log("getAccountEntry returned :" + accountURL);
}

// ****************************
// ** Event Listener Section **
// ****************************

// Submit Account button handler
submitAccountBtn.on("click", function() {
  getAccountEntry().then(
    $.ajax({
      url: accountURL,
      method: "POST"
    })
  );
  console.log("Account POST using URL : " + accountURL);
});

// Submit Supply Donation button handler
submitSuppliesBtn.on("click", function() {
  getSupplyEntry().then(
    $.ajax({
      url: supplyURL,
      method: "POST"
    })
  );
  console.log("Account POST using URL : " + supplyURL);
});
