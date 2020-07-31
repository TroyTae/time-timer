const getRadian = (degree: number) => (Math.PI / 180 * degree);

const getTanDegree = (x: number, y: number) => (Math.atan(y / x) * 180 / Math.PI);

export {getRadian, getTanDegree};
