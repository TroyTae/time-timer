const renderHTML = (() => {
  const sandbox = document.createElement('DIV');
  return (html: string) => {
    sandbox.innerHTML = html;
    const child = sandbox.children[0];
    sandbox.innerHTML = '';
    return child;
  };
})();

export {renderHTML};
