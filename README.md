# astronomia

> An astronomical library

[![NPM version](https://badge.fury.io/js/astronomia.svg)](https://www.npmjs.com/package/astronomia/)
[![Build Status](https://secure.travis-ci.org/commenthol/astronomia.svg?branch=master)](https://travis-ci.org/commenthol/astronomia)

----

**The project is under development, and APIs will change.**

**Prior to the 1.0.0 release, breaking changes should result in a minor version bump.**

----

This library is a translation of [meeus][] from Go to Javascript and contains
selected algorithms from the book "Astronomical Algorithms" by Jean Meeus,
following the second edition, copyright 1998, with corrections as of
August 10, 2009.

## Usage

```
npm install --save astronomia@~0.0
```

For documentation of the different packages please take a look at the source code as well as at the tests.

## Packages

- _angle_: Angular Separation.
- _apparent_: Apparent Place of a Star.
- _apsis_: Perigee and apogee of the Moon.
- _base_: Basic constants and methods
- _binary_: Binary Stars.
- _circle_: Smallest Circle containing three Celestial Bodies.
- _conjunction_: Planetary Conjunctions.
- _coord_: Transformation of Coordinates. Ecliptic, Equatorial, Horizontal, Galactic coordinates.
- _elementequinox_: Reduction of Ecliptical Elements from one Equinox to another one.
- _globe_: Ellipsoid, Globe, Coordinates of Earth Observer
- _julian_: Julian Days, Gregorian, Julian calendar functions
- _interpolation_: Interpolation of equidistant values (linear, len3, len5); Lagrange Polynoms
- _iterate_: Iteration.
- _jm_: Jewish and Moslem Calendars.
- _kepler_: Equation of Kepler.
- _moon_: Ephemeris for Physical Observations of the Moon.
- _moonillum_: Illuminated Fraction of the Moon's Disk.
- _moonmaxdec_: Maximum Declinations of the Moon.
- _moonnode_: Passages of the Moon through the Nodes.
- _moonphase_: Phases of the Moon.
- _moonposition_: Position of the Moon.
- _nutation_: Nutation and the Obliquity of the Ecliptic.
- _parallax_: Correction for Parallax.
- _planetposition_: Ecliptic position of planets by full VSOP87 theory.
- _precess_: Precession
- _rise_: Rising, Transit, and Setting.
- _sexagesimal_: Sexagesimal classes
- _sidereal_: Sidereal Time at Greenwich.
- _solar_: Solar Coordinates.
- _solstice_: Equinoxes, Solstices and Solarterms.

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code to be distributed under the MIT license.

You are also implicitly verifying that all code is your original work or correctly attributed with the source of its origin and licence.

## License

MIT Licensed

See [LICENSE][] for more info.

## References

<!-- !ref -->

* [LICENSE][LICENSE]
* [meeus][meeus]
* [VSOP87 dataset][VSOP87 dataset]

<!-- ref! -->

[meeus]: https://github.com/soniakeys/meeus.git
[LICENSE]: ./LICENSE
[VSOP87 dataset]: ftp://cdsarc.u-strasbg.fr/pub/cats/VI/81
