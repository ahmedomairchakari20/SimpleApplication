const fs = require('fs');
const ejs = require('ejs');
const cheerio = require('cheerio');
const { expect } = require('chai');

describe('EJS Template Tests', function() {
  it('should render the correct title', function() {
    const ejsContent = fs.readFileSync('./views/index.ejs', 'utf8');
    
    const renderedHtml = ejs.render(ejsContent, { title: 'Test Title' });

    const $ = cheerio.load(renderedHtml);
    
    const titleText = $('title').text();
    expect(titleText).to.equal('Test Title');
  });

  it('should render the correct heading', function() {
    const ejsContent = fs.readFileSync('./views/index.ejs', 'utf8');
    const renderedHtml = ejs.render(ejsContent, { title: 'Test Title' });
    const $ = cheerio.load(renderedHtml);
    const headingText = $('h1').text();
    expect(headingText).to.equal('Test Title');
  });
});
