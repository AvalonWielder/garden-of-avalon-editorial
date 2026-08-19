const photos = [
  { file: "8343D2B7-2D33-48FA-B987-AA5670B4F000_1_102_o.jpeg", collection: "Between steel & sky", date: "2025-11-22", caption: "Study 01" },
  { file: "20220911-_DSC4659.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 02" },
  { file: "20220911-_DSC4653.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 03" },
  { file: "20220911-_DSC4652.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 04" },
  { file: "20220911-_DSC4650.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 05" },
  { file: "20220911-_DSC4649.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 06" },
  { file: "20220911-_DSC4648.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 07" },
  { file: "20220911-_DSC4638.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 08" },
  { file: "20220911-_DSC4636.jpg", collection: "Between steel & sky", date: "2022-09-11", caption: "Study 09" },
  { file: "20220910-_DSC4626.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 10" },
  { file: "20220910-_DSC4625.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 11" },
  { file: "20220910-_DSC4624.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 12" },
  { file: "20220910-_DSC4623.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 13" },
  { file: "20220910-_DSC4621.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 14" },
  { file: "20220910-_DSC4619.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 15" },
  { file: "20220910-_DSC4603.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 16" },
  { file: "20220910-_DSC4602.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 17" },
  { file: "20220910-_DSC4599.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 18" },
  { file: "20220910-_DSC4598.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 19" },
  { file: "20220910-_DSC4597.jpg", collection: "Between steel & sky", date: "2022-09-10", caption: "Study 20" },
  { file: "20220911-_DSC4651.jpg", collection: "Weather studies", date: "2022-09-11", caption: "Study 01" },
  { file: "20220911-_DSC4646.jpg", collection: "Weather studies", date: "2022-09-11", caption: "Study 02" },
  { file: "20220910-_DSC4635.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 03" },
  { file: "20220910-_DSC4628.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 04" },
  { file: "20220910-_DSC4585.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 05" },
  { file: "20220910-_DSC4584.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 06" },
  { file: "20220910-_DSC4583.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 07" },
  { file: "20220910-_DSC4582.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 08" },
  { file: "20220910-_DSC4579.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 09" },
  { file: "20220910-_DSC4576.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 10" },
  { file: "20220910-_DSC4575.jpg", collection: "Weather studies", date: "2022-09-10", caption: "Study 11" },
  { file: "20220904-_DSC4432.jpg", collection: "Weather studies", date: "2022-09-04", caption: "Study 12" },
  { file: "ED3A8904-914B-492E-9C62-C63C7FD85E07_1_102_o.jpeg", collection: "On the street", date: "2025-11-22", caption: "Study 01" },
  { file: "70FABC57-E1CC-4494-A258-E25D39AF3D3C_1_102_o.jpeg", collection: "On the street", date: "2024-12-20", caption: "Study 02" },
  { file: "5B96126C-E350-4005-BABB-23DF202C8A14_1_102_o.jpeg", collection: "On the street", date: "2024-12-20", caption: "Study 03" },
  { file: "D4AD113D-F9FB-4601-907A-F3CBB35DA11C_1_102_o.jpeg", collection: "On the street", date: "2024-12-20", caption: "Study 04" },
  { file: "5B33DE99-9772-4048-88D4-CEA2B713B50D_1_102_o.jpeg", collection: "On the street", date: "2024-12-20", caption: "Study 05" },
  { file: "20220911-_DSC4661.jpg", collection: "On the street", date: "2022-09-11", caption: "Study 06" },
  { file: "20220911-_DSC4658.jpg", collection: "On the street", date: "2022-09-11", caption: "Study 07" },
  { file: "20220910-_DSC4631.jpg", collection: "On the street", date: "2022-09-10", caption: "Study 08" },
  { file: "20220910-_DSC4620.jpg", collection: "Painted walls", date: "2022-09-10", caption: "Study 01" },
  { file: "20220910-_DSC4605.jpg", collection: "Painted walls", date: "2022-09-10", caption: "Study 02" },
  { file: "20220910-_DSC4604.jpg", collection: "Painted walls", date: "2022-09-10", caption: "Study 03" },
  { file: "F7D584AD-5003-4021-8F9D-1083027F1396_1_102_o.jpeg", collection: "Old stone & rooms", date: "2024-12-20", caption: "Study 01" },
  { file: "D5AD78CD-8BAB-4EA4-BD07-181B6D999238_1_102_o.jpeg", collection: "Old stone & rooms", date: "2025-11-22", caption: "Study 02" },
  { file: "20220911-_DSC4660.jpg", collection: "Old stone & rooms", date: "2022-09-11", caption: "Study 03" },
  { file: "20220911-_DSC4656.jpg", collection: "Old stone & rooms", date: "2022-09-11", caption: "Study 04" },
  { file: "20220911-_DSC4639.jpg", collection: "Old stone & rooms", date: "2022-09-11", caption: "Study 05" },
  { file: "20220911-_DSC4637.jpg", collection: "Old stone & rooms", date: "2022-09-11", caption: "Study 06" },
  { file: "20220910-_DSC4616.jpg", collection: "Old stone & rooms", date: "2022-09-10", caption: "Study 07" },
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
