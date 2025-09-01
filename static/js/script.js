// ===== Theme Toggle (persisted) =====
(function() {
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');


const btn = document.getElementById('themeToggle');
if (btn) btn.addEventListener('click', () => {
root.classList.toggle('light');
localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
})();


// ===== Mobile Nav Toggle =====
(function() {
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('show'));
})();


// ===== Projects Data -> Cards =====
const PROJECTS = [
{ title: 'Cloth Folding Machine', desc: 'Computer vision + mechatronics prototype using Python and Raspberry Pi.', tags: ['Python', 'OpenCV', 'Raspberry Pi'], link: '#' },
{ title: 'Economic Forecasting', desc: 'VAR/ARMAX experiments forecasting CPI & sentiment; visualization dashboards.', tags: ['EViews', 'Python', 'Econometrics'], link: '#' },
{ title: 'Portfolio Website', desc: 'This site—Flask + vanilla HTML/CSS/JS with responsive design.', tags: ['Flask', 'HTML/CSS', 'JS'], link: '#' },
];


function renderProjects() {
const grid = document.getElementById('projectsGrid');
if (!grid) return;
grid.innerHTML = PROJECTS.map(p => `
<article class="card">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
${p.link ? `<p style="margin-top:10px"><a class="btn btn-ghost" href="${p.link}">Details</a></p>` : ''}
</article>
`).join('');
}
renderProjects();


// ===== Skills Chips =====
const SKILLS = ['Python', 'Flask', 'Pandas', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'Linux', 'Data Viz'];
function renderSkills() {
const box = document.getElementById('skillsChips');
if (!box) return;
box.innerHTML = SKILLS.map(s => `<span class="chip">${s}</span>`).join('');
}
renderSkills();


// ===== Contact Form (demo toast) =====
(function() {
const form = document.getElementById('contactForm');
const btn = document.getElementById('sendBtn');
if (!form || !btn) return;
btn.addEventListener('click', () => {
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const msg = document.getElementById('message').value.trim();
if (!name || !email || !msg) { alert('Please fill all fields.'); return; }
alert('Thanks! This is a demo—wire it to a backend later.');
form.reset();
});
})();


// ===== Year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();


console.log('Portfolio loaded.');
