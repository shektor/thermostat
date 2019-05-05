describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degress', function() {
    expect(thermostat._temp).toEqual(20);
  });

  it('Thermostat starts with Power Saving on by default', function() {
    expect(thermostat._powerSaving).toBe(true);
  });

  describe('getTemp', function() {
    it('returns the temperature', function() {
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('getPowerSaving', function() {
    it('returns the power saving setting', function() {
      expect(thermostat.getPowerSaving()).toEqual(true);
    });
  });

  describe('increaseTemp', function() {
    it('increase temperature by 1', function() {
      thermostat.increaseTemp();
      expect(thermostat.getTemp()).toEqual(21);
    });
    it('cannot increase temperature above 25 if power saving on', function() {
      thermostat.setPowerSavingOn();
      var error = 'Maximum temperature is 25 with power saving on';
      for (var i = 0; i < 4; i++) {
        thermostat.increaseTemp();
      };
      expect(function() { thermostat.increaseTemp() }).not.toThrow(error);
      expect(function() { thermostat.increaseTemp() }).toThrow(error);
    });
    it('cannot increase temperature above 32 if power saving off', function() {
      thermostat.setPowerSavingOff();
      var error = 'Maximum temperature is 32 with power saving off';
      for (var i = 0; i < 11; i++) {
        thermostat.increaseTemp();
      }
      expect(function() { thermostat.increaseTemp() }).not.toThrow(error);
      expect(function() { thermostat.increaseTemp() }).toThrow(error);
    });
  });

  describe('decreaseTemp', function() {
    it('decrease temperature by 1', function() {
      thermostat.decreaseTemp();
      expect(thermostat.getTemp()).toEqual(19);
    });
    it('cannot decrease temperature below minimum of 10', function() {
      var error = 'Minimum temperature is 10';
      for (var i = 0; i < 9; i++) {
        thermostat.decreaseTemp();
      }
      expect(function() { thermostat.decreaseTemp() }).not.toThrow(error);
      expect(function() { thermostat.decreaseTemp() }).toThrow(error);
    });
  });

  describe('resetTemp', function() {
    it('resets the temperature to 20', function() {
      thermostat.decreaseTemp();
      thermostat.resetTemp();
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('currentEnergyUsage', function() {
    it('returns low-usage if below 18', function() {
      for (var i = 0; i < 2; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.currentEnergyUsage()).not.toBe('low-usage');
      thermostat.decreaseTemp();
      expect(thermostat.currentEnergyUsage()).toBe('low-usage');
    });
    it('returns medium-usage if below 25', function() {
      for (var i = 0; i < 4; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
      thermostat.increaseTemp();
      expect(thermostat.currentEnergyUsage()).not.toBe('medium-usage');
    });
    it('returns high-usage if 25 or above', function() {
      for (var i = 0; i < 4; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentEnergyUsage()).not.toBe('high-usage');
      thermostat.increaseTemp();
      expect(thermostat.currentEnergyUsage()).toBe('high-usage');
    });
  });
});
