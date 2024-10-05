import {
    Fn,
    mix,
    step,
    reciprocal,
} from 'three/tsl';

export var responsive = Fn(([st, aspect]) => {
    var ratio = st.x.div(st.y).div(aspect);
    var direction = step(1.0, ratio);
    return vec2(mix(ratio, 1.0, direction), mix(1.0, reciprocal(ratio), direction));
});