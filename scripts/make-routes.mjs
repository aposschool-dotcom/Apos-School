import fs from 'node:fs';
const html = fs.readFileSync('dist/index.html', 'utf8');
const title = 'Start Your AI School | Teachers Training with AI | APOS School';
const desc = 'Learn to teach with AI and start your own online school. Partner Program (2 months) and Full Program (3 months), certificate included. Register on WhatsApp.';
const url = 'https://aposschool.com/start-your-ai-school';
let out = html
  .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
  .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${desc}" />`)
  .replace(/<meta name="keywords" content=".*?" \/>/s, '<meta name="keywords" content="start your AI school, teachers training Pakistan, AI for teachers, online teaching, APOS School, teacher training course" />')
  .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`)
  .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="Start Your AI School | Teachers Training with AI" />`)
  .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${desc}" />`)
  .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
// the main-site course structured data does not belong on this page
out = out.replace(/<script type="application\/ld\+json">\s*\{"@context":"https:\/\/schema.org","@type":"Course".*?<\/script>/s, '');
fs.mkdirSync('dist/start-your-ai-school', { recursive: true });
fs.writeFileSync('dist/start-your-ai-school/index.html', out);

// old address (earlier name) keeps working: it forwards to the new page
const old = `<!doctype html><html lang="en"><head><meta charset="utf-8" /><title>Start Your AI School | APOS School</title>
<meta name="robots" content="noindex" /><link rel="canonical" href="${url}" />
<meta http-equiv="refresh" content="0; url=/start-your-ai-school" />
<script>location.replace('/start-your-ai-school' + location.search);</script></head>
<body><a href="/start-your-ai-school">Start Your AI School</a></body></html>`;
fs.mkdirSync('dist/future-ready-mentors', { recursive: true });
fs.writeFileSync('dist/future-ready-mentors/index.html', old);
console.log('route pages written');
