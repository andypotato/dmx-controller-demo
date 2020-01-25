import DMX from 'dmx';

export default class DMXController {

  // construction
  constructor(config) {

    // create universe
    const dmx = new DMX();
    this.universe = dmx.addUniverse('demo', config.driver, config.device);

    // let there be (no) light
    this.universe.updateAll(0);

    // in this example the RGB controller uses 3 channels,
    // starting from the given start channel.
    this.channels = [
      config.startChannel,
      config.startChannel+1,
      config.startChannel+2];
  }
  //----------------------------------------------------------------------------

  // accessors
  setColor(r, g, b) {
    this.universe.update({
      [this.channels[0]]: r,
      [this.channels[1]]: g,
      [this.channels[2]]: b
    });
  }
  //----------------------------------------------------------------------------
}
