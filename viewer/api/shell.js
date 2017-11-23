const { exec } = require('child_process')

const executeCustomCommand = (command, args, cb) => {
  let baseResponse = ''
  exec(`${command} ${args}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    baseResponse += stdout
    cb && cb(baseResponse)
  })
}

module.exports = {
  executeCustomCommand
}