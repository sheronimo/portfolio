// Import Statement
import { projects } from './projects.js';

// Populate Projects
const container = document.querySelector('#projects-container');
const template = document.querySelector('#project-template');

projects.forEach((p) => {
	let clone = template.content.cloneNode(true);

	clone.querySelector('#live-link').href = p.live;
	clone.querySelector('#repo-link').href = p.repo;
	clone.querySelector('#thumbnail').src = `./img/projects/${p.id}.jpg`;
	clone.querySelector('.project-title').textContent = p.name;
	clone.querySelector('.project-stack').textContent = p.stack;
	clone.querySelector('.project-desc').textContent = p.summary;

	container.appendChild(clone);
});
