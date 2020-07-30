const {getTemplate} = require('troyjs/webpack');

module.exports = function() {
  return getTemplate({
    title: 'Time Timer',
    keywords: 'time,timer,life,productivity',
    description: 'Web timer for productivity',
    bodyHTML: `
      <article id="app">
        <header class="header">
          60 Min Timer
        </header>
        <section id="clock">
          <div class="circle"></div>
        </section>
        <footer id="timer"></footer>
      </article>
    `
  });
};
