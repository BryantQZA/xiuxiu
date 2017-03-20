var datas = require('./datas.json')
var dataones = require('./datasone.json')
var lbts = require('./lbt.json')
module.exports = function () {
  return {
    'datas.php': datas,
    'lbts.php': lbts,
    'dataones.php': dataones
  }
}

