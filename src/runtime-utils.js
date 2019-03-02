import F from './filters'
import * as Sqrl from './runtime' // So we can pass Sqrl as a parameter to Render()
import H from './helpers'
import P from './partials'

export function defineFilter (name, callback) {
  F[name] = callback
}

export function defineHelper (name, callback) {
  H[name] = callback
}

export function Render (template, options) {
  // If the template parameter is a function, call that function with (options, Sqrl)
  // If it's a string, first compile the string and then call the function
  if (typeof template === 'function') {
    return template(options, Sqrl)
  } else {
    return 'Err: Function must be 1st arg'
  }
}

export function definePartial (name, str) {
  P[name] = str
}