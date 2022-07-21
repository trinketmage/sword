#pragma glslify: responsive = require(./responsive)

vec2 backgroundCenter(vec2 uv, vec2 res, float diffuseAspect) {
    float resp = responsive(res, diffuseAspect);
    return = (uv) * (resp) + ((1.0 - resp) * 0.5);
}

#pragma glslify: export(responsive)

