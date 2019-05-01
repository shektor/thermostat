var Thermostat = function () {
  this._temp = 20;
  this._powerSaving = 'On';
};

Thermostat.prototype.getTemp = function () {
  return this._temp;
};

Thermostat.prototype.increaseTemp = function(value) {
  if (this._powerSaving === 'On') {
    if (this._temp + value > 25) {
      throw 'Maximum temperature is 25 with power saving on'
    } else {
      this._temp += value;
    };
  } else {
    if (this._temp + value > 32) {
      throw 'Maximum temperature is 32 with power saving off'
    } else {
      this._temp += value;
    };
  };
};

Thermostat.prototype.decreaseTemp = function(value) {
  if (this._temp - value < 10) {
    throw ('Minimum temperature is 10');
  } else {
    this._temp -= value;
  }
};

Thermostat.prototype.setPowerSaving = function(value) {
  this._powerSaving = value;
};

Thermostat.prototype.resetTemp = function() {
  this._temp = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temp < 25) {
    if (this._temp < 18) {
      return 'low-usage';
    } else {
      return 'medium-usage';
    };
  } else {
    return 'high-usage';
  };
};
