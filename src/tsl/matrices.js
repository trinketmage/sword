import {
    Fn,
    mat2,
    cos,
    sin,
} from 'three/tsl';

// be mindful of https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language#uv-utils
export var rotate2d = Fn(([ angle ]) => {
    return mat2(
        cos(angle), sin(angle).mul(-1),
        sin(angle), cos(angle),
    );
});