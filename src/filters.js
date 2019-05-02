var escMap = {
  '&': '&amp;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#39;'
}

function replaceChar (s) {
  return escMap[s]
}

var escapeRegEx = /[&<"']/g
var escapeRegExTest = /[&<"']/

export var filters = {
  e: function (str) {
    // To deal with XSS. Based on Escape implementations of Mustache.JS and Marko, then customized.
    var newStr = String(str)
    if (escapeRegExTest.test(newStr)) {
      return newStr.replace(escapeRegEx, replaceChar)
    } else {
      return newStr
    }
  }
}
// Don't need a filter for unescape because that's just a flag telling Squirrelly not to escape

export var defaultFilters = {
  /*
  All strings are automatically passed through each of the default filters the user
  Has set to true. This opens up a realm of possibilities.
  */
  // somefilter: false
}

export var defaultFilterCache = {
  // This is to prevent having to re-calculate default filters every time you return a filtered string
  start: '',
  end: ''
}

export function setDefaultFilters (obj) {
  if (obj === 'clear') { // If someone calls Sqrl.setDefaultFilters('clear') it clears all default filters
    defaultFilters = {}
  } else {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        defaultFilters[key] = obj[key]
      }
    }
  }
  cacheDefaultFilters()
}

export var autoEscape = true

export function autoEscaping (bool) {
  autoEscape = bool
  return autoEscape
}

export function cacheDefaultFilters () {
  defaultFilterCache = {
    start: '',
    end: ''
  }
  for (var key in defaultFilters) {
    if (!defaultFilters.hasOwnProperty(key) || !defaultFilters[key]) continue
    defaultFilterCache.start += 'Sqrl.F.' + key + '('
    defaultFilterCache.end += ')'
  }
}
export function parseFiltered (initialString, filterString) {
  console.log(filterString)
  var filtersArray
  var safe = false
  var filterStart = defaultFilterCache.start
  var filterEnd = defaultFilterCache.end
  if (filterString && filterString !== '') {
    filtersArray = filterString.split('|')
    console.log(filtersArray)
    for (var i = 0; i < filtersArray.length; i++) {
      console.log(i)
      // I need to store filtersArray[i] in a variable
      var filter = filtersArray[i].trim() // Removing the spaces just in case someone put | filter| or | filter | or something similar
      console.log('filter: ' + filter)
      if (filter === '') { continue }
      if (filter === 'safe') {
        console.log('safe')
        // If 'safe' is one of the filters, set safe to true but don't add Sqrl.F.safe
        // Essentially, 'safe' is a flag telling Squirrelly not to autoEscape
        safe = true
        continue
      }
      filterStart = 'Sqrl.F.' + filter + '(' + filterStart
      filterEnd += ')'
    }
  }
  if (!safe && autoEscape) {
    filterStart += 'Sqrl.F.e('
    filterEnd += ')'
  }

  return filterStart + initialString + filterEnd
}

function defineFilter (name, callback) {
  filters[name] = callback
}

export { filters as default, defineFilter }
