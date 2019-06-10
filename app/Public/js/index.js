//Get references to page elements

//Account references
var $userName = $("#userName");
var $password = $("#password");
var $organization = $("#organization");
var $address = $("#address");
var $state = $("#state");
var $zipCode = $("#zipCode");
var $contName = $("#contName");
var $phoneNum = $("#phoneNum");
var $faxNum = $("#faxNum");
var $email = $("#email");
var $submitAccountBtn = $("#submitAccountBtn");
var $signUp = $("#signUp");

//Supply references
var $item = $("#item");
var $quantity = $("#quantity");
var $unit = $("#unit");
var $charity = $("#charity");
var $submitSupplyBtn = $("#submitSupplyBtn");
var $supplies = $("#supplies");

// Account method for each kind of request
var Account = {
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
  getAccounts: function() {
    return $.ajax({
      url: "api/accounts",
      type: "GET"
    });
  },
  deleteAccount: function(id) {
    return $.ajax({
      url: "api/accounts/:id" + id,
      type: "DELETE"
    });
  }
};

//refreshAccounts gets new accounts from the db
var refreshAccounts = function() {
  Account.getAccounts(account).then(function() {
    $signUp.empty();
  });
};

// handleAccountSubmit is called whenever we submit a new account
// Save the new account to the db
var handleAccountSubmit = function(event) {
  event.preventDefault();
  var account = {
    userName: $userName.val().trim(),
    password: $password.val().trim(),
    organization: $organization.val().trim(),
    address: $address.val().trim(),
    state: $state.val().trim(),
    zipCode: $zipCode.val().trim(),
    contName: $contName.val().trim(),
    phoneNum: $phoneNum.val().trim(),
    faxNum: $faxNum.val().trim(),
    email: $email.val().trim()
  };

  if (
    !(
      account.userName &&
      account.password &&
      account.address &&
      account.state &&
      account.zipCode &&
      account.contName &&
      account.phoneNum &&
      account.faxNum &&
      account.email
    )
  ) {
    alert("You must complete entire form!");
    return;
  }

  Account.saveAccount(account).then(function() {
    refreshAccounts();
  });

  $userName.val("");
  $password.val("");
  $organization.val("");
  $address.val("");
  $state.val("");
  $zipCode.val("");
  $contName.val("");
  $phoneNum.val("");
  $faxNum.val("");
  $email.val("");
};

// Supply method for each kind of request
var Supplies = {
  saveSupplies: function(supplies) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/supplies",
      data: JSON.stringify(supplies)
    });
  },
  getSupplies: function() {
    return $.ajax({
      url: "api/supplies",
      type: "GET"
    });
  }
};
//refreshSupplies gets new supplies from the db
var refreshSupplies = function() {
  Supplies.getSupplies(supplies).then(function() {
    $supplies.empty();
  });
};

// handleSupplySubmit is called whenever we submit new supplies
// Save the new supplies to the db
var handleSupplySubmit = function(event) {
  event.preventDefault();
  var supply = {
    item: $item.val().trim(),
    quantity: $quantity.val().trim(),
    unit: $unit.val().trim(),
    charity: $charity.val().trim()
  };

  if (
    !(
      supply.item &&
      supply.quantity&&
      supply.unit &&
      supply.charity &&
    )
  ) {
    alert("You must complete entire form!");
    return;
  }

  Supplies.saveAccount(supply).then(function() {
    refreshSupplies();
  });

  $item.val("");
  $quantity.val("");
  $unit.val("");
  $charity.val("");
};


// Add event listeners to the submit buttons
$submitAccountBtn.on("click", handleAccountSubmit);
$submitSupplyBtn.on("click", handleSupplySubmit);