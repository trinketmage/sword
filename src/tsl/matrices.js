import {
    Fn,
    cos,
    sin,
} from 'three/tsl';

export var rotate2d = Fn((params) => {
    return mat2(
        cos(params.angle), sin(params.angle).mul(-1),
        sin(params.angle), cos(params.angle),
    );
});