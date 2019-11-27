export function getScreenPos(mesh, sizes, camera, vector3) {
	const halfWidth = sizes.viewport.halfWidth;
	const halfHeight = sizes.viewport.halfHeight;
	vector3.setFromMatrixPosition(mesh.matrixWorld);
	vector3.project(camera);
	vector3.x = Math.round(((vector3.x * halfWidth) + halfWidth) * 100) / 100;
	vector3.y = Math.round((-(vector3.y * halfHeight) + halfHeight) * 100) / 100;
	return {
		x: vector3.x,
		y: vector3.y
	}
}
export function getFovHeigth(camera, distance) {
	const vFOV = camera.fov * Math.PI / 180
	const minY = 2 * Math.tan(vFOV / 2) * distance
	return minY
}