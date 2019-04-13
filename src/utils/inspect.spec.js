import {
  toType,
  toRawType,
  toRawTypeLC,
  isUndef,
  isDef,
  isNull,
  isFunction,
  isBoolean,
  isString,
  isNumber,
  isPrimitive,
  isRegExp,
  isPromise
} from './inspect'

describe('utils/inspect', () => {
  it('toType', async () => {
    expect(toType(123)).toEqual('number')
    expect(toType('123')).toEqual('string')
    expect(toType(true)).toEqual('boolean')
    expect(toType({})).toEqual('object')
    expect(toType([])).toEqual('object')
    expect(toType(/abc/)).toEqual('object')
    expect(toType(() => {})).toEqual('function')
    expect(toType(Date)).toEqual('function')
    expect(toType(new Date())).toEqual('object')
    expect(toType(undefined)).toEqual('undefined')
    expect(toType(null)).toEqual('object')
  })

  it('toRawType', async () => {
    expect(toRawType(123)).toEqual('Number')
    expect(toRawType('123')).toEqual('String')
    expect(toRawType(true)).toEqual('Boolean')
    expect(toRawType({})).toEqual('Object')
    expect(toRawType([])).toEqual('Array')
    expect(toRawType(/abc/)).toEqual('RegExp')
    expect(toRawType(() => {})).toEqual('Function')
    expect(toRawType(Date)).toEqual('Function')
    expect(toRawType(new Date())).toEqual('Date')
    expect(toRawType(undefined)).toEqual('Undefined')
    expect(toRawType(null)).toEqual('Null')
  })

  it('toRawTypeLC', async () => {
    expect(toRawType(123)).toEqual('number')
    expect(toRawType('123')).toEqual('string')
    expect(toRawType(true)).toEqual('boolean')
    expect(toRawType({})).toEqual('object')
    expect(toRawType([])).toEqual('array')
    expect(toRawType(/abc/)).toEqual('regexp')
    expect(toRawType(() => {})).toEqual('function')
    expect(toRawType(Date)).toEqual('function')
    expect(toRawType(new Date())).toEqual('date')
    expect(toRawType(undefined)).toEqual('undefined')
    expect(toRawType(null)).toEqual('null')
  })

  it('isUndef', async () => {
    expect(isUndef(123)).toEqual(false)
    expect(isUndef('123')).toEqual(false)
    expect(isUndef(true)).toEqual(false)
    expect(isUndef({})).toEqual(false)
    expect(isUndef([])).toEqual(false)
    expect(isUndef(/abc/)).toEqual(false)
    expect(isUndef(() => {})).toEqual(false)
    expect(isUndef(Date)).toEqual(false)
    expect(isUndef(new Date())).toEqual(false)
    expect(isUndef(undefined)).toEqual(true)
    expect(isUndef(null)).toEqual(false)
  })

  it('isDef', async () => {
    expect(isDef(123)).toEqual(true)
    expect(isDef('123')).toEqual(true)
    expect(isDef(true)).toEqual(true)
    expect(isDef({})).toEqual(true)
    expect(isDef([])).toEqual(true)
    expect(isDef(/abc/)).toEqual(true)
    expect(isDef(() => {})).toEqual(true)
    expect(isDef(Date)).toEqual(true)
    expect(isDef(new Date())).toEqual(true)
    expect(isDef(undefined)).toEqual(false)
    expect(isDef(null)).toEqual(true)
  })

  it('isNull', async () => {
    expect(isNull(123)).toEqual(false)
    expect(isNull('123')).toEqual(false)
    expect(isNull(true)).toEqual(false)
    expect(isNull({})).toEqual(false)
    expect(isNull([])).toEqual(false)
    expect(isNull(/abc/)).toEqual(false)
    expect(isNull(() => {})).toEqual(false)
    expect(isNull(Date)).toEqual(false)
    expect(isNull(new Date())).toEqual(false)
    expect(isNull(undefined)).toEqual(false)
    expect(isNull(null)).toEqual(true)
  })

  it('isFunction', async () => {
    expect(isFunction(123)).toEqual(false)
    expect(isFunction('123')).toEqual(false)
    expect(isFunction(true)).toEqual(false)
    expect(isFunction({})).toEqual(false)
    expect(isFunction([])).toEqual(false)
    expect(isFunction(/abc/)).toEqual(false)
    expect(isFunction(() => {})).toEqual(true)
    expect(isFunction(Date).toEqual(true)
    expect(isFunction(new Date())).toEqual(false)
    expect(isFunction(undefined)).toEqual(false)
    expect(isFunction(null)).toEqual(false)
  })

  it('isBoolean', async () => {
    expect(isBoolean(123)).toEqual(false)
    expect(isBoolean('123')).toEqual(false)
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean({})).toEqual(false)
    expect(isBoolean([])).toEqual(false)
    expect(isBoolean(/abc/)).toEqual(false)
    expect(isBoolean(() => {})).toEqual(false)
    expect(isBoolean(Date)).toEqual(false)
    expect(isBoolean(new Date())).toEqual(false)
    expect(isBoolean(undefined)).toEqual(false)
    expect(isBoolean(null)).toEqual(false)
  })

  it('isString', async () => {
    expect(isString(123)).toEqual(false)
    expect(isString('123')).toEqual(true)
    expect(isString(true)).toEqual(false)
    expect(isString({})).toEqual(false)
    expect(isString([])).toEqual(false)
    expect(isString(/abc/)).toEqual(false)
    expect(isString(() => {})).toEqual(false)
    expect(isString(Date)).toEqual(false)
    expect(isString(new Date())).toEqual(false)
    expect(isString(undefined)).toEqual(false)
    expect(isString(null)).toEqual(false)
  })

  it('isNumber', async () => {
    expect(isNumber(123)).toEqual(true)
    expect(isNumber('123')).toEqual(false)
    expect(isNumber(true)).toEqual(false)
    expect(isNumber({})).toEqual(false)
    expect(isNumber([])).toEqual(false)
    expect(isNumber(/abc/)).toEqual(false)
    expect(isNumber(() => {})).toEqual(false)
    expect(isNumber(Date)).toEqual(false)
    expect(isNumber(new Date())).toEqual(false)
    expect(isNumber(undefined)).toEqual(false)
    expect(isNumber(null)).toEqual(false)
  })

  it('isPrimitive', async () => {
    expect(isPrimitive(123)).toEqual(true)
    expect(isPrimitive('123')).toEqual(true)
    expect(isPrimitive(true)).toEqual(true)
    expect(isPrimitive({})).toEqual(false)
    expect(isPrimitive([])).toEqual(false)
    expect(isPrimitive(/abc/)).toEqual(false)
    expect(isPrimitive(() => {})).toEqual(false)
    expect(isPrimitive(Date)).toEqual(false)
    expect(isPrimitive(new Date())).toEqual(false)
    expect(isPrimitive(undefined)).toEqual(false)
    expect(isPrimitive(null)).toEqual(false)
  })

  it('isRegExp', async () => {
    expect(isRegExp(123)).toEqual(false)
    expect(isRegExp('123')).toEqual(false)
    expect(isRegExp(true)).toEqual(false)
    expect(isRegExp({})).toEqual(false)
    expect(isRegExp([])).toEqual(false)
    expect(isRegExp(/abc/)).toEqual(true)
    expect(isRegExp(() => {})).toEqual(false)
    expect(isRegExp(Date)).toEqual(false)
    expect(isRegExp(new Date())).toEqual(false)
    expect(isRegExp(undefined)).toEqual(false)
    expect(isRegExp(null)).toEqual(false)
  })

  it('isPromise', async () => {
    expect(isPromise(123)).toEqual(false)
    expect(isPromise('123')).toEqual(false)
    expect(isPromise(true)).toEqual(false)
    expect(isPromise({})).toEqual(false)
    expect(isPromise([])).toEqual(false)
    expect(isPromise(/abc/)).toEqual(false)
    expect(isPromise(() => {})).toEqual(false)
    expect(isPromise(Date)).toEqual(false)
    expect(isPromise(new Date())).toEqual(false)
    expect(isPromise(undefined)).toEqual(false)
    expect(isPromise(null)).toEqual(false)
    expect(isPromise(new Promise((resolve, reject) => {}))).toEqual(true)
    expect(isPromise(Promise.resolve(1))).toEqual(true)
    expect(isPromise(Promise.reject(new Error('test')))).toEqual(true)
    expect(isPromise({ then() {}, catch() {} })).toEqual(true)
  })
})