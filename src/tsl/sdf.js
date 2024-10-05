import {
    Fn,
    abs,
    length,
    min,
    max,
} from 'three/tsl';

export var sdBox = Fn(([st, b]) => {
    const d = abs(st).sub(b);
    return length(max(d, 0)).add(min(max(d.x, d.y), 0));
});

export var sdCircle = Fn(([st, radius]) => {
    return length(st).sub(radius);
});