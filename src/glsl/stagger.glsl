float stagger(float duration, float stagger, float total, float index, float progress) {
    float staggers = (total * stagger);
    float maxDuration = duration + staggers;
    float space = duration / maxDuration;
    float offset = (index * stagger) / maxDuration;    
    return smoothstep(offset, offset + space, progress);
}

#pragma glslify: export(stagger)