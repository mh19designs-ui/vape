const branches = [
  {
    id: 1,
    name: "الكرادة",
    address: "شارع الواثق - مقابل مصرف الأنصاري الاسلامي",
    phone: "07743510001",
    map: "https://maps.app.goo.gl/o9FAyFTKqWsXSZZN6?g_st=ac"
  },
  {
    id: 2,
    name: "الداوودي",
    address: "شارع التانكي - مقابل معجنات شيبك",
    phone: "07743510002",
    map: "https://maps.app.goo.gl/1Cg9W3moA6tnH2D48?g_st=ac"
  },
  {
    id: 3,
    name: "حي الجامعة",
    address: "شارع بسكولاته (الشارع الخدمي) - مقابل الجامعة العراقية",
    phone: "07743510003",
    map: "https://maps.app.goo.gl/Rms3nXLKYWHbtu8x6?g_st=ac"
  },
  {
    id: 4,
    name: "الدورة",
    address: "شارع ابو طيارة - مقابل مدرسة بلادي الأهلية",
    phone: "07743510004",
    map: "https://maps.app.goo.gl/9Nmfenw879UW3h6w6?g_st=ac"
  },
  {
    id: 5,
    name: "الاعظمية",
    address: "شارع الضباط - مجاور مأكولات غرناطة",
    phone: "07743510005",
    map: "https://maps.app.goo.gl/PALLe3t6d7Kn9nNg7?g_st=ac"
  },
  {
    id: 6,
    name: "بارك السعدون",
    address: "تقاطع الجوازات",
    phone: "07743510006",
    map: "https://maps.app.goo.gl/8JsjihuLoCCghbbZ9?g_st=ac"
  },
  {
    id: 7,
    name: "كربلاء",
    address: "حي النقيب - مجاور معهد المعلمين",
    phone: "07743510007",
    map: "https://maps.app.goo.gl/Z4D3VrUHbyrjEjv6A?g_st=ac"
  },
  {
    id: 8,
    name: "زيونة",
    address: "شارع دار الأزياء - مجاور مطعم بس دولمة",
    phone: "07743510008",
    map: "https://maps.app.goo.gl/ZutXAi3GDvRTMJc67?g_st=ac"
  },
  {
    id: 9,
    name: "السيدية",
    address: "الشارع التجاري - فلكة الامن - مدخل شارع الصناعة",
    phone: "07743510009",
    map: "https://maps.app.goo.gl/mG7Msr4J5nqxV5ao6?g_st=ac"
  },
  {
    id: 10,
    name: "شارع فلسطين",
    address: "تقاطع النخلة - مقابل مصرف الطيف",
    phone: "07743510010",
    map: "https://maps.app.goo.gl/DoKHUFtkrDeeBuDB6?g_st=ac"
  },
  {
    id: 11,
    name: "العطيفية",
    address: "مجاور مستشفى القمة",
    phone: "07743510011",
    map: "https://maps.app.goo.gl/xDyXBeLrbyfvYsKFA?g_st=ac"
  },
  {
    id: 12,
    name: "البنوك",
    address: "الشارع التجاري - مجاور مطعم فروالة",
    phone: "07743510012",
    map: "https://maps.app.goo.gl/EAxrXgGdRuXUqDH59?g_st=ac"
  }
];

const pinIcon = `<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3 4.5 8.5 4.5 8.5s4.5-5.5 4.5-8.5A4.5 4.5 0 0 0 8 1.5z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" stroke-width="1.3"/></svg>`;
const phoneIcon = `<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M3 2.5h3l1 3-1.5 1a8 8 0 0 0 3 3L10 8l3 1v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.3"/></svg>`;
const arrowIcon = `<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M2 8l10-6-6 10-.5-4.5L2 8z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;

function createCard(branch) {
  return `
    <div class="card">
      <div class="card-header">
        <div class="branch-num">${branch.id}</div>
        <div class="branch-name">${branch.name}</div>
      </div>
      <div class="divider"></div>
      <div class="address">${pinIcon} ${branch.address}</div>
      <div class="phone">${phoneIcon} ${branch.phone}</div>
      <a class="map-btn" href="${branch.map}" target="_blank">
        ${arrowIcon} فتح الخريطة
      </a>
    </div>
  `;
}

function renderBranches() {
  const grid = document.getElementById('branches-grid');
  grid.innerHTML = branches.map(createCard).join('');
}

document.addEventListener('DOMContentLoaded', renderBranches);
