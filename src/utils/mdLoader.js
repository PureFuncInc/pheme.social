// eslint-disable-next-line @typescript-eslint/no-var-requires
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

module.exports = (source) => {
  const html = md.render(source);
  const template = (
    `<template>
      <div class="markdown-body">
        ${html}
      </div>
    </template>`
  );
  return template;
};
