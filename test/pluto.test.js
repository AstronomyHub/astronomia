import assert from 'assert'
import float from './support/float.js'
import { planetposition, data, pluto, sexagesimal as sexa } from '..'

describe('#pluto', function () {
  it('heliocentric()', function () {
    // Example 37.a, p. 266
    var res = pluto.heliocentric(2448908.5)
    assert.strictEqual(float(res.lon * 180 / Math.PI).toFixed(5), 232.74071)
    assert.strictEqual(float(res.lat * 180 / Math.PI).toFixed(5), 14.58782)
    assert.strictEqual(float(res.range).toFixed(6), 29.711111)
  })

  it('astrometric()', function () {
    // Example 37.a, p. 266
    var earth = new planetposition.Planet(data.earth)
    var res = pluto.astrometric(2448908.5, earth)
    assert.strictEqual(new sexa.RA(res.ra).toString(1), '15ʰ31ᵐ43.8ˢ')
    assert.strictEqual(new sexa.Angle(res.dec).toString(0), '-4°27′29″')
  })
})
