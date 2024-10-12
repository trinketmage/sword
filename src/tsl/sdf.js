import {
    Fn,
    abs,
    length,
    min,
    max,
    select,
    vec4,
    fwidth,
    clamp,
} from 'three/tsl';

import { median } from './math';

export var sdBox = Fn(([st, b]) => {
    const d = abs(st).sub(b);
    return length(max(d, 0)).add(min(max(d.x, d.y), 0));
});

export const sdRoundedBox = Fn(([st, b, r = vec4(0.)]) => {
    r = r.toVar();
    r.xy = select(st.x.greaterThan(0.0), r.xy, r.zw);
    r.y = select(st.y.greaterThan(0.0), r.x, r.y);
    const q = abs(st).sub(b).add(r.x);
    return min(max(q.x,q.y),0.0).add(length(max(q,0.0))).sub(r.x);
});

export var sdCircle = Fn(([st, radius]) => {
    return length(st).sub(radius);
});

export var sdGlyph = Fn(([sample]) => {
    var sd = median(sample.r, sample.g, sample.b).sub(0.5);
    return clamp(sd.div(fwidth(sd)).add(0.5), 0.0, 1.0);
});