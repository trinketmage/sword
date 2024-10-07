import {
    Fn,
    min,
    max,
} from 'three/tsl';

export var median = Fn(([r, g, b]) => {
    return max(min(r, g), min(max(r, g), b));
});