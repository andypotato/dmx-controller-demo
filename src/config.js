// Win: COM3
// OSX: /dev/tty.usbserial-AD0JLFXK	
// LIN: /dev/ttyUSB0

const config = {
  dmx: {
    driver: 'enttec-open-usb-dmx',
    device: '/dev/tty.usbserial-AD0JLFXK',
    startChannel: 1
  }
};

module.exports = config;
