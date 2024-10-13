import {
    Fn,
    abs,
    sign,
    min,
    max
} from 'three/tsl';

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L272
export var equal = Fn(([s, t]) => {
    return abs(sign(s.sub(t))).oneMinus();
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L273
export var notEqual = Fn(([s, t]) => {
    return abs(sign(s.sub(t)));
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L275
export var greater = Fn(([s, t]) => {
    return max(sign(s.sub(t)), 0.0);
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L274
export var lesser = Fn(([s, t]) => {
    return max(sign(t.sub(s)), 0.0);
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L277
export var greaterEqual = Fn(([s, t]) => {
    return lesser(s, t).oneMinus();
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L276
export var lesserEqual = Fn(([s, t]) => {
    return greater(s, t).oneMinus();
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L278
export var and = Fn(([s, t]) => {
    return s.mul(t);
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L279
export var or = Fn(([s, t]) => {
    return min(s.add(t), 1.0);
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L280
export var xor = Fn(([s, t]) => {
    return s.add(t).mod(2.0);
});

// be mindful of https://github.com/mrdoob/three.js/blob/1886e4b91cdeb0b80cc5ed7d0e2a6dff58b5f544/src/nodes/math/OperatorNode.js#L281
export var not = Fn(([s]) => {
    return s.oneMinus();
});