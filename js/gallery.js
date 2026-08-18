const photos = [
  { file: "1190392D-481D-4DC8-8192-A6D6ABE077D2_4_5005_c.jpeg", collection: "Traces of the city", date: "2026-02-13", caption: "After rain" },
  { file: "1DB2D072-AEDB-4FAB-9BE0-763A297910E3_4_5005_c.jpeg", collection: "Botanical interruptions", date: "2026-02-13", caption: "A small season" },
  { file: "FF44FA75-271C-4307-BC6A-A2254D02CF74_1_105_c.jpeg", collection: "Painted walls", date: "2025-11-22", caption: "Colour in passing" },
  { file: "CA9EEAAE-DD40-49FF-A556-F45074CF236E_1_105_c.jpeg", collection: "Painted walls", date: "2025-11-22", caption: "A wall remembers" },
  { file: "96B5CE7E-BC9C-4B65-944D-9739FE7EE7F4_4_5005_c.jpeg", collection: "Traces of the city", date: "2025-10-21", caption: "Upward lines" },
  { file: "C55019D3-1E8F-466B-A1BE-2BAB72C94055_4_5005_c.jpeg", collection: "Rooms of light", date: "2025-10-21", caption: "The reading room" },
  { file: "8597C4FA-564A-49BB-8CE6-B97A029EC0BF_4_5005_c.jpeg", collection: "Rooms of light", date: "2025-10-21", caption: "A seat by the window" },
  { file: "CE05A390-A06B-4503-B0B9-34B523AC20D8_4_5005_c.jpeg", collection: "Painted walls", date: "2025-03-27", caption: "Rose mural" },
  { file: "2F06917C-2B15-4D24-B190-C6BC1FCED00F_4_5005_c.jpeg", collection: "Botanical interruptions", date: "2025-03-27", caption: "Winter garden" },
  { file: "F7D584AD-5003-4021-8F9D-1083027F1396_1_102_o.jpeg", collection: "Traces of the city", date: "2025-01-28", caption: "A corner in time" },
  { file: "59152296-D8C1-4D89-9CFA-7C42049B3DE8_1_105_c.jpeg", collection: "Rooms of light", date: "2025-01-28", caption: "Ordinary theatre" },
  { file: "20220911-_DSC4660.jpg", collection: "Traces of the city", date: "2022-09-11", caption: "The city, turning gold" },
  { file: "20220911-_DSC4658.jpg", collection: "Traces of the city", date: "2022-09-11", caption: "Crossing" },
  { file: "20220911-_DSC4648.jpg", collection: "Traces of the city", date: "2022-09-11", caption: "Distant weather" },
  { file: "20220911-_DSC4659.jpg", collection: "Traces of the city", date: "2022-09-11", caption: "Stone and sky" },
  { file: "20220911-_DSC4661.jpg", collection: "Traces of the city", date: "2022-09-11", caption: "Last light" },
];

const imagePath = (file) => `photos/${file}`;
const recentPhotos = [...photos].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
const grid = document.querySelector('#recent-grid');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
let activePhotos = recentPhotos;
let activeIndex = 0;

function openLightbox(items, index) {
  activePhotos = items;
  activeIndex = index;
  renderLightbox();
  lightbox.showModal();
}

function renderLightbox() {
  const photo = activePhotos[activeIndex];
  lightboxImage.src = imagePath(photo.file);
  lightboxImage.alt = photo.caption;
  lightboxCaption.textContent = `${photo.caption} · ${photo.collection}`;
}

function createCard(photo, index, list) {
  const button = document.createElement('button');
  button.className = 'photo-card';
  button.type = 'button';
  button.innerHTML = `<img src="${imagePath(photo.file)}" alt="${photo.caption}" loading="lazy"><span><strong>${photo.caption}</strong><small>${photo.collection}</small></span>`;
  button.addEventListener('click', () => openLightbox(list, index));
  return button;
}

recentPhotos.forEach((photo, index) => grid.append(createCard(photo, index, recentPhotos)));
document.querySelector('#recent-count').textContent = String(recentPhotos.length).padStart(2, '0');
document.querySelector('#year').textContent = new Date().getFullYear();

const collections = [...new Set(photos.map((photo) => photo.collection))];
const collectionList = document.querySelector('#collection-list');
collections.forEach((name, index) => {
  const subset = photos.filter((photo) => photo.collection === name);
  const item = document.createElement('article');
  item.className = 'collection-item';
  item.innerHTML = `<p>${String(index + 1).padStart(2, '0')}</p><h2>${name}</h2><span>${subset.length} photographs</span><button type="button">View collection ↗</button>`;
  item.querySelector('button').addEventListener('click', () => openLightbox(subset, 0));
  collectionList.append(item);
});

document.querySelector('.close').addEventListener('click', () => lightbox.close());
document.querySelector('.next').addEventListener('click', () => { activeIndex = (activeIndex + 1) % activePhotos.length; renderLightbox(); });
document.querySelector('.previous').addEventListener('click', () => { activeIndex = (activeIndex - 1 + activePhotos.length) % activePhotos.length; renderLightbox(); });
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowRight') document.querySelector('.next').click();
  if (event.key === 'ArrowLeft') document.querySelector('.previous').click();
});

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
