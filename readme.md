# sword.js


<p>
  <a href="https://www.npmjs.com/package/@trinketmage/sword"><img src="https://img.shields.io/npm/v/@trinketmage/sword" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@trinketmage/sword"><img src="https://img.shields.io/npm/dy/@trinketmage/sword" alt="Downloads"></a>
  <a href="https://github.com/trinketmage/sword/issues"><img src="https://img.shields.io/github/issues/trinketmage/sword" alt="Issues"></a>
</p>
It's dangerous to go alone! Take this.

[![It's dangerous to go alone! Take this.](https://www.zeldadungeon.net/wp-content/uploads/2013/04/tumblr_mlkpzij6T81qizbpto1_1280.gif)](https://magicalgametime.com/post/48470399171)

## Getting started
```
npm i --save @trinketmage/sword
```

## Mathematics

- **lerp**: Linear interpolation.
- **angleToVector**: Calculate a 2d vector on unit circle from an angle in degree.
- **vectorToAngle**: Calculate an angle in degree from a 2d vector (with optional pivot).

## 3d
- **getScreenPos**: Screen position (2d vector) of position (3d vector).
- **getFovHeigth**: Get height of frustrum (y) at a specific depth (z).

## glsl
- **stagger**: glsl implementation of [staggers](https://greensock.com/docs/v3/Staggers)
``` glsl
#pragma glslify: stagger = require(@trinketmage/sword/src/glsl/stagger)
```
- **backgroundCover**: glsl UV calculation for background cover for fullscreen texture
``` glsl
#pragma glslify: backgroundCover = require(@trinketmage/sword/src/glsl/backgroundCover)
```

## tsl
- **rotate2d**: [rotate matrix2d](https://thebookofshaders.com/08/) (be mindful of [rotateUV](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language#uv-utils))
``` js
const rotatedUV = rotate2d(rotation).mul(uv);
```
- **responsive**: homothetic helper to match two ratios
``` js
// example center an image
const res = responsive(ratio1, ratio2);
let st = uv().mul(res).add(res.oneMinus().mul(0.5));
```
- **sdBox** ..
- **sdRoundedBox** ..
- **sdCircle** ..
- **sdGlyph** render a glyph from a sdf/msdf texture
``` js
// render a glyph from an msdf atlas
// luv is local uv computed in geometry attribute
var sample = texture(atlas, luv);
var alpha = sdGlyph(sample);
```

<p>
  <a href="https://twitter.com/remuemeninge"><img src="https://img.shields.io/twitter/follow/remuemeninge?style=social" alt="Twitter"></a>
</p>
