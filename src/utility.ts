const renderHTML = (() => {
  const sandbox = document.createElement('DIV');
  return (html: string) => {
    sandbox.innerHTML = html;
    const child = sandbox.children[0];
    sandbox.innerHTML = '';
    return child;
  };
})();

const getRadian = (degree: number) => (Math.PI / 180 * degree);
const getTanDegree = (x: number, y: number) => (Math.atan(y / x) * 180 / Math.PI);

export {renderHTML, getRadian, getTanDegree};
