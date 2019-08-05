// Precise method. Source: https://en.wikipedia.org/wiki/Linear_interpolation
export function Lerp(v0, v1, t) {
	return (1 - t) * v0 + t * v1
}