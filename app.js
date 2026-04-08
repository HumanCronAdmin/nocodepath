const grid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const complexityFilter = document.getElementById('complexity-filter');

function complexityClass(c) {
  return 'badge-' + c.toLowerCase();
}

function renderCard(tool) {
  const badges = [];
  if (tool.freeTier) badges.push('<span class="badge badge-free">Free Tier</span>');
  badges.push(`<span class="badge ${complexityClass(tool.complexity)}">${tool.complexity}</span>`);
  return `<article class="card">
    <div class="card-header">
      <h3><a href="${tool.url}" target="_blank" rel="noopener">${tool.name}</a></h3>
      <div class="badges">${badges.join('')}</div>
    </div>
    <span class="category-tag">${tool.category}</span>
    <p class="description">${tool.description}</p>
    <p class="best-for"><strong>Best for:</strong> ${tool.bestFor}</p>
    <p class="pricing">${tool.pricing}</p>
  </article>`;
}

function render() {
  const q = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;
  const comp = complexityFilter.value;

  const filtered = TOOLS.filter(t => {
    if (cat !== 'all' && t.category !== cat) return false;
    if (comp !== 'all' && t.complexity !== comp) return false;
    if (q && !(t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.bestFor.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty">No tools match your filters. Try broadening your search.</p>';
  } else {
    grid.innerHTML = filtered.map(renderCard).join('');
  }
}

searchInput.addEventListener('input', render);
categoryFilter.addEventListener('change', render);
complexityFilter.addEventListener('change', render);

render();
