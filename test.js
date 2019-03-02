/* global Sqrl */
window.onload = function () {
  Sqrl.defineFilter('reverse', function (str) {
    var out = ''
    for (var i = str.length - 1; i >= 0; i--) {
      out += String(str).charAt(i)
    }
    return out || str
  })

  Sqrl.defineHelper('customhelper', function (args, content, blocks, options) {
    var returnStr = 'Custom Helper speaking! \n'
    for (var key in blocks) {
      if (typeof blocks[key] === 'function') {
        returnStr += 'Block found named ' + key + ', with value: ' + blocks[key]()
      }
    }
    return returnStr
  })

  Sqrl.definePartial('mypartial', 'Partial content: the value of arr is {{arr}}')

  function escape (str) { // To handle escaping for the function result
    var escMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;'
    }

    function replaceChar (s) {
      return escMap[s]
    }
    var newStr = String(str)
    if (/[&<>"'/]/.test(newStr)) {
      return newStr.replace(/[&<>"'/]/g, replaceChar)
    } else {
      return newStr
    }
  }

  function render () {
    console.clear()
    var options = JSON.parse('{' + document.getElementById('data').value + '}')
    console.log(JSON.stringify(options))
    var template = document.getElementById('template').value
    var functionResult = Sqrl.Compile(template).toString()
    document.getElementById('function').innerHTML = escape(functionResult)
    document.getElementById('result').innerHTML = Sqrl.Render(template, options)
    console.log(Sqrl.Render(template, options))
  }
  render()
  document.getElementById('template').addEventListener('input', render)
  document.getElementById('data').addEventListener('input', render)
}
