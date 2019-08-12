export function getScreenPos(mesh, sizes, vector3) {
	var widthHalf = 0.5 * sizes.viewport.width;
	var heightHalf = 0.5 * sizes.viewport.height;
	vector3.setFromMatrixPosition(mesh.matrixWorld);
	vector3.project(this.camera);
	vector3.x = Math.round(((vector3.x * widthHalf) + widthHalf) * 100) / 100;
	vector3.y = Math.round((-(vector3.y * heightHalf) + heightHalf) * 100) / 100;
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