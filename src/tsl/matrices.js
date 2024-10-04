import {
    Fn,
    mat2,
    cos,
    sin,
} from 'three/tsl';

export var rotate2d = Fn(([ angle ]) => {
    return mat2(
        cos(angle), sin(angle).mul(-1),
        sin(angle), cos(angle),
    );
});