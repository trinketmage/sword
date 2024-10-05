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

## Gesture
- **VirtualScroll**: Custom scroll handle for inertia.

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

<p>
  <a href="https://twitter.com/uwutrinket"><img src="https://img.shields.io/twitter/follow/uwutrinket?style=social" alt="Twitter"></a>
</p>
