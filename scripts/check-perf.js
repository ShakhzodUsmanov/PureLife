const fs = require('fs');

if (fs.existsSync('.next/server/app/index.html')) {
  const html = fs.readFileSync('.next/server/app/index.html', 'utf8');
  const links = html.match(/<link[^>]+>/g) || [];
  console.log('--- ALL <link> tags in index.html ---');
  links.forEach(l => console.log(l));
  
  const scripts = html.match(/<script[^>]+src=[^>]+>/g) || [];
  console.log('--- ALL external <script> tags ---');
  scripts.forEach(s => console.log(s));
} else {
  console.log('index.html not found');
}
