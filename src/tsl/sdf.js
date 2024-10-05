import {
    Fn,
    abs,
    length,
    min,
    max,
    select,
} from 'three/tsl';

export var sdBox = Fn(([st, b]) => {
    const d = abs(st).sub(b);
    return length(max(d, 0)).add(min(max(d.x, d.y), 0));
});

export const sdRoundedBox = Fn(([st, b, r]) => {
    r = r.toVar();
    r.xy = select(st.x.greaterThan(0.0), r.xy, r.zw);
    r.y = select(st.y.greaterThan(0.0), r.x, r.y);
    const q = abs(st).sub(b).add(r.x);
    return min(max(q.x,q.y),0.0).add(length(max(q,0.0))).sub(r.x);
});

export var sdCircle = Fn(([st, radius]) => {
    return length(st).sub(radius);
});