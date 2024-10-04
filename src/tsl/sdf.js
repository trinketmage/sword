import {
    Fn,
    abs,
    length,
    min,
    max,
} from 'three/tsl';

export var sdBox = Fn(([st, b]) => {
    const d = abs(st).sub(b);
    return length(max(d, 0)).add(min(max(st.x, st.y), 0));
});
