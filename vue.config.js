module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'DMX Controller Demo',
        appId: 'xyz.andypotato.dmx-controller-demo',
        win: {
          icon: 'src/assets/app.ico',
          target: [
            {
              target: 'portable',
              arch: [
                'x64'
              ]
            }
          ]
        }
      }
    }
  }
}
