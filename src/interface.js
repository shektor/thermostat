$( document ).ready(function() {

  var thermostat = new Thermostat();

  function updateTemp() {
    $('#temperature').text(thermostat.getTemp());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  };

  updateTemp();
  $('#power-saving-status').text(thermostat.getPowerSaving());
  // document.getElementById("temperature").innerHTML = thermostat.getTemp();

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemp();
  });
  // document.getElementById("temperature-up").addEventListener("click", function() {
  //   thermostat.increaseTemp();
  //   document.getElementById("temperature").innerHTML = thermostat.getTemp();
  // });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemp();
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
