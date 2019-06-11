$(document).ready(function() {
  //Get references to account elements and assign variables for later processing
  var item = $("#item");
  // eslint-disable-next-line no-unused-vars
  var quantity = $("#quantity");
  var unit = $("#unitlist");
  var charity = $("#charitylist");

  // ****************************
  // ** Event Listener Section **
  // ****************************

  // Submit Supply Donation button handler
  $(document).on("click", "#submitSupplyBtn", handleSupplyFormSubmit);

  // **********************************
  // ** Function declaration section **
  // **********************************

  //Function to get supply values from form
  function handleSupplyFormSubmit(event) {
    event.preventDefault();
    console.log("supply submit pressed!");
    if (
      !item.val().trim() ||
      !quantity.val().trim() ||
      !unit.val().trim() ||
      !charity.val().trim()
    ) {
      return;
    }
    // Call the insertSupplyData function
    insertSupplyData({
      // eslint-disable-next-line camelcase
      item_description: item.val().trim(),
      quantity: quantity.val().trim(),
      unit: unit.val().trim(),
      charity: charity.val().trim()
    });
  }

  function insertSupplyData(supplyData) {
    $.post("/api/supplySubmit", supplyData).then(getSupplyDonations);
    $("#supplierform").empty();
  }

  function getSupplyDonations() {
    $.get("api/myDonations", function(data) {
      donationRows = [];
      for (i = 0; i < data.length; i++) {
        donationRows.push(createSupplyRow(data[i]));
      }
      console.log("Donation data: " + data);
      renderDonationPDF(rows);
      item.val("");
      quantity.val("");
      unit.val("");
      charity.val("");
    });
  }
});
