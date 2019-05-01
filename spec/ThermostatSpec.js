describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degress', function() {
    expect(thermostat._temp).toEqual(20);
  });

  it('Thermostat starts with Power Saving on by default', function() {
    expect(thermostat._powerSaving).toBe('On');
  });

  describe('getTemp', function() {
    it('returns the temperature', function() {
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('increaseTemp', function() {
    it('increase temperature by provided value', function() {
      thermostat.increaseTemp(2);
      expect(thermostat.getTemp()).toEqual(22);
    });
    it('cannot increase temperature above 25 if power saving on', function() {
      thermostat.setPowerSaving('On');
      var error = 'Maximum temperature is 25 with power saving on';
      expect(function() { thermostat.increaseTemp(6) }).toThrow(error);
      expect(function() { thermostat.increaseTemp(5) }).not.toThrow(error);
    });
    it('cannot increase temperature above 32 if power saving off', function() {
      thermostat.setPowerSaving('Off');
      var error = 'Maximum temperature is 32 with power saving off';
      expect(function() { thermostat.increaseTemp(13) }).toThrow(error);
      expect(function() { thermostat.increaseTemp(12) }).not.toThrow(error);
    });
  });

  describe('decreaseTemp', function() {
    it('decrease temperature by provided value', function() {
      thermostat.decreaseTemp(10);
      expect(thermostat.getTemp()).toEqual(10);
    });
    it('cannot decrease temperature below minimum of 10', function() {
      var error = 'Minimum temperature is 10';
      expect(function() { thermostat.decreaseTemp(11) }).toThrow(error);
      expect(function() { thermostat.decreaseTemp(10) }).not.toThrow(error);
    });
  });

  describe('resetTemp', function() {
    it('resets the temperature to 20', function() {
      thermostat.decreaseTemp(5);
      thermostat.resetTemp();
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('currentEnergyUsage', function() {
    it('returns low-usage if below 18', function() {
      thermostat.decreaseTemp(3);
      expect(thermostat.currentEnergyUsage()).toBe('low-usage');
      thermostat.increaseTemp(1);
      expect(thermostat.currentEnergyUsage()).not.toBe('low-usage');
    });
    it('returns medium-usage if below 25', function() {
      thermostat.increaseTemp(4);
      expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
      thermostat.increaseTemp(1);
      expect(thermostat.currentEnergyUsage()).not.toBe('medium-usage');
    });
    it('returns high-usage if 25 or above', function() {
      thermostat.increaseTemp(5);
      expect(thermostat.currentEnergyUsage()).toBe('high-usage');
      thermostat.decreaseTemp(1);
      expect(thermostat.currentEnergyUsage()).not.toBe('high-usage');
    });
  });
});
