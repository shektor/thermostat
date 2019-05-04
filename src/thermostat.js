var Thermostat = function () {
  this._DEFAULT_TEMP = 20;
  this._temp = this._DEFAULT_TEMP;
  this._powerSaving = true;
  this._MIN_TEMP = 10;
  this._MAX_TEMP_POWERSAVING_ON = 25;
  this._MAX_TEMP_POWERSAVING_OFF = 32;
  this._MAX_LOW_USAGE_TEMP = 17;
  this._MAX_MEDIUM_USAGE_TEMP = 24;
};

Thermostat.prototype.getTemp = function () {
  return this._temp;
};

Thermostat.prototype.increaseTemp = function() {
  if (this._powerSaving === true && this._temp === this._MAX_TEMP_POWERSAVING_ON) {
    throw 'Maximum temperature is 25 with power saving on';
  };
  if (this._powerSaving === false && this._temp === this._MAX_TEMP_POWERSAVING_OFF) {
    throw 'Maximum temperature is 32 with power saving off';
  };
  this._temp++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this._temp === this._MIN_TEMP) {
    throw ('Minimum temperature is 10');
  };
  this._temp--;
};

Thermostat.prototype.setPowerSavingOn = function() {
  this._powerSaving = true;
};

Thermostat.prototype.setPowerSavingOff = function() {
  this._powerSaving = false;
};

Thermostat.prototype.getPowerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.resetTemp = function() {
  this._temp = this._DEFAULT_TEMP;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temp <= this._MAX_MEDIUM_USAGE_TEMP) {
    if (this._temp <= this._MAX_LOW_USAGE_TEMP) {
      return 'low-usage';
    } else {
      return 'medium-usage';
    };
  } else {
    return 'high-usage';
  };
};
