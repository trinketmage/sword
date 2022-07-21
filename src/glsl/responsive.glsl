vec2 responsive(vec2 res, float diffuseAspect) {
    float ratio = res.x / res.y / diffuseAspect;
    float direction = step(1.0, ratio);
    return vec2(mix(ratio, 1.0, direction), mix(1.0, 1.0 / ratio, direction));
}

#pragma glslify: export(responsive)

