$( document ).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.getTemp());
  $('#power-saving-status').text(thermostat.getPowerSaving());
  // document.getElementById("temperature").innerHTML = thermostat.getTemp();

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.getTemp());
  });
  // document.getElementById("temperature-up").addEventListener("click", function() {
  //   thermostat.increaseTemp();
  //   document.getElementById("temperature").innerHTML = thermostat.getTemp();
  // });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.getTemp());
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    $('#temperature').text(thermostat.getTemp());
  });

  $('#powersaving-on').click(function() {
    thermostat.setPowerSavingOn();
    $('#power-saving-status').text(thermostat.getPowerSaving());
  });

  $('#powersaving-off').click(function() {
    thermostat.setPowerSavingOff();
    $('#power-saving-status').text(thermostat.getPowerSaving());
  });
});
