import {
    Fn,
    abs,
    length,
    min,
    max,
} from 'three/tsl';

export var sdBox = Fn((params) => {
    const d = abs(params.p).sub(params.b);
    return length(max(d, 0)).add(min(max(d.x, d.y), 0));
});
