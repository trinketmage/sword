import {
    Fn,
    min,
    max,
    fract,
    sin,
    dot,
    vec2
} from 'three/tsl';

export var median = Fn(([r, g, b]) => {
    return max(min(r, g), min(max(r, g), b));
});

export var random = Fn(([co]) => {
    return fract(sin(dot(co ,vec2(12.9898,78.233))).mul(43758.5453));
});
