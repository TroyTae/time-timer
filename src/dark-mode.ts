const root = document.createElement('style');

root.innerHTML = `
  :root {
    --primary: #FF9500;
    --secondary: #545456;
    --background: #F2F2F7;
    --on-background: #FFF;
  }
`;

// TODO 별도 UI로 만들기
(window as any).toggleColor = (() => {
  let toggled = false;
  return () => {
    if (toggled) {
      document.head.removeChild(root);
    } else {
      document.head.appendChild(root);
    }
    toggled = !toggled;
  };
})();
