// ===================== Navbar shadow on scroll =====================
const navbar = document.getElementById('navbar');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  if (toTop) {
    if (window.scrollY > 500) toTop.classList.add('show');
    else toTop.classList.remove('show');
  }
});

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===================== Mobile menu toggle =====================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const closeMobileMenu = () => {
  navLinks?.classList.remove('open');
  burger?.classList.remove('active');
  burger?.setAttribute('aria-expanded', 'false');
  burger?.setAttribute('aria-label', 'Open menu');
  navbar?.classList.remove('mobile-menu-open');
};
burger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  navbar.classList.toggle('mobile-menu-open', isOpen);
});
navLinks?.querySelectorAll('a, .login-trigger').forEach(item => item.addEventListener('click', closeMobileMenu));
document.addEventListener('click', event => {
  if (navLinks?.classList.contains('open') && !navLinks.contains(event.target) && !burger?.contains(event.target)) {
    closeMobileMenu();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMobileMenu();
});

// ===================== Animated stat counters =====================
const counters = document.querySelectorAll('.num[data-count]');
function animateCounter(el) {
  const target = +el.dataset.count;
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString() + '+';
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => counterObserver.observe(c));

// ===================== Scroll reveal for cards/sections =====================
const revealTargets = document.querySelectorAll(
  '.course-card, .college-card, .service-card, .testi-card'
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => revealObserver.observe(el));

// ===================== Section reveal motion =====================
const motionTargets = document.querySelectorAll('.section-head, .dream-grid, .partners-head, .callback');
const motionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('motion-in');
      motionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
motionTargets.forEach(el => motionObserver.observe(el));

// ===================== Course and college search =====================
const siteSearch = document.getElementById('siteSearch');
const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');
siteSearch?.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const searchableCards = document.querySelectorAll('.course-card, .college-card');
  searchableCards.forEach(card => card.classList.remove('search-match'));
  if (!query) {
    searchResult.textContent = 'Please enter a course or college name.';
    return;
  }
  const matches = [...searchableCards].filter(card => {
    const keywords = `${card.textContent} ${card.dataset.keywords || ''}`.toLowerCase();
    return keywords.includes(query);
  });
  if (matches.length) {
    matches.forEach(card => card.classList.add('search-match'));
    searchResult.textContent = `${matches.length} matching result${matches.length > 1 ? 's' : ''} found.`;
    matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    window.location.href = `colleges.html?search=${encodeURIComponent(query)}`;
  }
});

// ===================== Login modal =====================
const loginModal = document.getElementById('loginModal');
const loginClose = document.getElementById('loginClose');
const loginForm = document.getElementById('loginForm');
const enquiryStatus = document.getElementById('enquiryStatus');
const loginTriggers = document.querySelectorAll('.login-trigger');
const budgetSelect = document.getElementById('enquiryBudget');
const customBudget = document.getElementById('customBudget');
budgetSelect?.addEventListener('change', () => {
  const isCustomBudget = budgetSelect.value === 'custom';
  customBudget.hidden = !isCustomBudget;
  customBudget.required = isCustomBudget;
  if (isCustomBudget) customBudget.focus();
});
const closeLoginModal = () => {
  if (!loginModal) return;
  loginModal.hidden = true;
  document.body.style.overflow = '';
};
const openLoginModal = () => {
  if (!loginModal) return;
  loginModal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('enquiryName')?.focus();
};
loginTriggers.forEach(trigger => trigger.addEventListener('click', openLoginModal));
document.addEventListener('click', event => {
  const trigger = event.target.closest('.btn-apply');
  if (!trigger) return;
  event.preventDefault();
  openLoginModal();
});
loginClose?.addEventListener('click', closeLoginModal);
loginModal?.addEventListener('click', event => {
  if (event.target === loginModal) closeLoginModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeLoginModal();
});
loginForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    return;
  }
  const name = document.getElementById('enquiryName').value.trim();
  const phone = document.getElementById('enquiryPhone').value.trim();
  const email = document.getElementById('enquiryEmail').value.trim();
  const course = document.getElementById('enquiryCourse').value.trim();
  const college = document.getElementById('enquiryCollege').value;
  const location = document.getElementById('enquiryLocation').value;
  const selectedBudget = document.getElementById('enquiryBudget').value;
  const budget = selectedBudget === 'custom'
    ? document.getElementById('customBudget').value.trim()
    : selectedBudget;
  const message = document.getElementById('enquiryMessage').value.trim() || 'No message provided';
  const enquiry = `New enquiry%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0ACourse: ${encodeURIComponent(course)}%0ACollege: ${encodeURIComponent(college || 'Not specified')}%0ALocation: ${encodeURIComponent(location || 'Not specified')}%0ABudget: ${encodeURIComponent(budget || 'Not specified')}%0AMessage: ${encodeURIComponent(message)}`;
  enquiryStatus.textContent = 'Enquiry submitted. Opening WhatsApp...';
  window.location.href = `https://wa.me/919599613282?text=${enquiry}`;
  loginForm.reset();
});

// ===================== College stream filter =====================
const applyFilter = document.getElementById('applyFilter');
const filterChecks = document.querySelectorAll('.filter-check input');
const collegePages = document.querySelectorAll('#pageOne, #pageTwo');
const collegeCards = document.querySelectorAll('.results-col .college-card');
const resultCount = document.getElementById('resultCount');
const filterStatus = document.getElementById('filterStatus');
const pagination = document.querySelector('.pagination');
const filterResults = (selectedStreams = []) => {
  const matches = [...collegeCards].filter(card => {
    if (!selectedStreams.length) return true;
    const streams = card.dataset.streams.split(',');
    return selectedStreams.some(stream => streams.includes(stream));
  });
  collegeCards.forEach(card => card.style.display = matches.includes(card) ? '' : 'none');
  collegePages.forEach(page => {
    const hasMatch = [...page.querySelectorAll('.college-card')].some(card => matches.includes(card));
    page.style.display = hasMatch ? 'grid' : 'none';
  });
  resultCount.textContent = `${matches.length} College${matches.length === 1 ? '' : 's'} Found`;
  if (!selectedStreams.length) {
    pagination.style.display = '';
    pages[current].style.display = 'grid';
    Object.keys(pages).filter(key => Number(key) !== current).forEach(key => pages[key].style.display = 'none');
    filterStatus.textContent = '';
  } else {
    pagination.style.display = 'none';
    filterStatus.textContent = matches.length ? 'Matching colleges are shown below.' : 'No colleges found for the selected stream.';
  }
};
applyFilter?.addEventListener('click', () => {
  const selectedStreams = [...filterChecks]
    .filter(check => check.checked)
    .map(check => check.parentElement.textContent.trim().toLowerCase());
  filterResults(selectedStreams);
});