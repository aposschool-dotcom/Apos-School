import fs from 'node:fs';
const html = fs.readFileSync('dist/index.html', 'utf8');
const title = 'Future Ready Mentors Program | Teachers Training with AI | APOS School';
const desc = 'Learn to teach with AI and build your own online classes. Partner Program (2 months) and Full Program (3 months), certificate included. Register on WhatsApp.';
const url = 'https://aposschool.com/future-ready-mentors';
let out = html
  .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
  .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${desc}" />`)
  .replace(/<meta name="keywords" content=".*?" \/>/s, '<meta name="keywords" content="teachers training Pakistan, AI for teachers, online teaching, Future Ready Mentors, APOS School, teacher training course" />')
  .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`)
  .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="Future Ready Mentors Program | Teachers Training with AI" />`)
  .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${desc}" />`)
  .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
// the main-site course structured data does not belong on this page
out = out.replace(/<script type="application\/ld\+json">\s*\{"@context":"https:\/\/schema.org","@type":"Course".*?<\/script>/s, '');
fs.mkdirSync('dist/future-ready-mentors', { recursive: true });
fs.writeFileSync('dist/future-ready-mentors/index.html', out);
console.log('route page written');
