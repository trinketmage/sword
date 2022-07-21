vec2 backgroundCover(vec2 uv, vec2 res, float diffuseAspect) {
    float ratio = res.x / res.y / diffuseAspect;
    float direction = step(1.0, ratio);
    vec2 ratioPos = vec2(mix(ratio, 1.0, direction), mix(1.0, 1.0 / ratio, direction));
    return (uv) * (ratioPos) + ((1.0 - ratioPos) * 0.5);
}

#pragma glslify: export(backgroundCover)