const NOT_PUBLISHED = 'Not available / Not officially published';

function makeEngineeringCollege(id, name, shortName, city, state, category, website, extra = {}) {
  return {
    id,
    name,
    shortName,
    universityType: extra.universityType || NOT_PUBLISHED,
    location: { city, state, campus: extra.campus || `${city}, ${state}` },
    website,
    logo: 'images/engineering.png',
    bTechAvailable: true,
    branches: [NOT_PUBLISHED],
    fees: { annual: NOT_PUBLISHED, total: NOT_PUBLISHED, hostel: NOT_PUBLISHED },
    admission: {
      exams: ['Check official admission notice'],
      eligibility: 'Check the current official eligibility notice.',
      process: 'Check the official admissions page for the current process.',
      applicationLink: website,
      admissionLink: website
    },
    placements: { averagePackage: NOT_PUBLISHED, highestPackage: NOT_PUBLISHED, placementPercentage: NOT_PUBLISHED, recruiters: [] },
    rankings: { nirf: NOT_PUBLISHED },
    accreditation: [NOT_PUBLISHED],
    campusType: NOT_PUBLISHED,
    category,
    scholarships: [NOT_PUBLISHED],
    description: `Engineering and technology programmes at ${name}. Verify current programmes, fees and admission requirements from the official website before applying.`,
    officialSources: [website],
    ...extra
  };
}

const EngineeringColleges = [
  makeEngineeringCollege('rvce', 'R.V. College of Engineering', 'RVCE', 'Bengaluru', 'Karnataka', 'Autonomous private college', 'https://rvce.edu.in/'),
  makeEngineeringCollege('rv-university', 'RV University', 'RVU', 'Bengaluru', 'Karnataka', 'Private university', 'https://rvu.edu.in/'),
  makeEngineeringCollege('bmsce', 'BMS College of Engineering', 'BMSCE', 'Bengaluru', 'Karnataka', 'Autonomous private college', 'https://bmsce.ac.in/'),
  makeEngineeringCollege('msrit', 'M.S. Ramaiah Institute of Technology', 'MSRIT', 'Bengaluru', 'Karnataka', 'Autonomous private college', 'https://www.msrit.edu/'),
  makeEngineeringCollege('dayananda-sagar-university', 'Dayananda Sagar University', 'DSU', 'Bengaluru', 'Karnataka', 'Private university', 'https://www.dsu.edu.in/'),
  makeEngineeringCollege('nmit', 'Nitte Meenakshi Institute of Technology', 'NMIT', 'Bengaluru', 'Karnataka', 'Autonomous private college', 'https://nmit.ac.in/'),
  makeEngineeringCollege('reva-university', 'REVA University', 'REVA', 'Bengaluru', 'Karnataka', 'Private university', 'https://www.reva.edu.in/'),
  makeEngineeringCollege('jain-university', 'JAIN (Deemed-to-be University)', 'JAIN', 'Bengaluru', 'Karnataka', 'Deemed university', 'https://www.jainuniversity.ac.in/'),
  makeEngineeringCollege('sharda-university', 'Sharda University', 'SU', 'Greater Noida', 'Uttar Pradesh', 'Private university', 'https://www.sharda.ac.in/'),
  makeEngineeringCollege('vit', 'Vellore Institute of Technology', 'VIT', 'Vellore', 'Tamil Nadu', 'Private deemed university', 'https://vit.ac.in/'),
  makeEngineeringCollege('srmist', 'SRM Institute of Science and Technology', 'SRMIST', 'Chennai', 'Tamil Nadu', 'Private deemed university', 'https://www.srmist.edu.in/'),
  makeEngineeringCollege('amrita', 'Amrita Vishwa Vidyapeetham', 'Amrita', 'Coimbatore', 'Tamil Nadu', 'Private deemed university', 'https://www.amrita.edu/'),
  makeEngineeringCollege('bits-pilani', 'Birla Institute of Technology and Science, Pilani', 'BITS Pilani', 'Pilani', 'Rajasthan', 'Private deemed university', 'https://www.bits-pilani.ac.in/'),
  makeEngineeringCollege('shiv-nadar', 'Shiv Nadar University', 'SNU', 'Dadri', 'Uttar Pradesh', 'Private university', 'https://snu.edu.in/'),
  makeEngineeringCollege('nmims', 'SVKM\'s Narsee Monjee Institute of Management Studies', 'NMIMS', 'Mumbai', 'Maharashtra', 'Deemed university', 'https://www.nmims.edu/'),
  makeEngineeringCollege('kiit', 'Kalinga Institute of Industrial Technology', 'KIIT', 'Bhubaneswar', 'Odisha', 'Private deemed university', 'https://kiit.ac.in/'),
  makeEngineeringCollege('iem-kolkata', 'Institute of Engineering and Management', 'IEM', 'Kolkata', 'West Bengal', 'Private autonomous college', 'https://iem.edu.in/'),
  makeEngineeringCollege('heritage-kolkata', 'Heritage Institute of Technology', 'HITK', 'Kolkata', 'West Bengal', 'Private autonomous college', 'https://www.heritageit.edu/'),
  makeEngineeringCollege('techno-india', 'Techno India University, West Bengal', 'TIU', 'Kolkata', 'West Bengal', 'Private university', 'https://technoindiaeducation.com/'),
  makeEngineeringCollege('soa-bhubaneswar', 'Siksha \"O\" Anusandhan', 'SOA', 'Bhubaneswar', 'Odisha', 'Private university', 'https://www.soa.ac.in/'),
  makeEngineeringCollege('nsut', 'Netaji Subhas University of Technology', 'NSUT', 'New Delhi', 'Delhi', 'State university', 'https://nsut.ac.in/'),
  makeEngineeringCollege('glbajaj', 'GL Bajaj Institute of Technology and Management', 'GL Bajaj', 'Greater Noida', 'Uttar Pradesh', 'Private college', 'https://www.glbajaj.org/'),
  makeEngineeringCollege('pccoe', 'Pimpri Chinchwad College of Engineering', 'PCCOE', 'Pune', 'Maharashtra', 'Private autonomous college', 'https://www.pccoepune.com/'),
  makeEngineeringCollege('jpiet', 'J.P. Institute of Engineering and Technology', 'JPIET', 'Meerut', 'Uttar Pradesh', 'Private college', 'https://www.jpiet.com/'),
  makeEngineeringCollege('niet', 'Noida Institute of Engineering and Technology', 'NIET', 'Greater Noida', 'Uttar Pradesh', 'Private autonomous college', 'https://www.niet.co.in/'),
  makeEngineeringCollege('msit-delhi', 'Maharaja Surajmal Institute of Technology', 'MSIT', 'New Delhi', 'Delhi', 'Private affiliated college', 'https://www.msit.in/'),
  makeEngineeringCollege('mait', 'Maharaja Agrasen Institute of Technology', 'MAIT', 'New Delhi', 'Delhi', 'Private affiliated college', 'https://mait.ac.in/'),
  makeEngineeringCollege('jssaten', 'JSS Academy of Technical Education', 'JSSATE', 'Noida', 'Uttar Pradesh', 'Private affiliated college', 'https://www.jssaten.ac.in/'),
  makeEngineeringCollege('galgotias-university', 'Galgotias University', 'GU', 'Greater Noida', 'Uttar Pradesh', 'Private university', 'https://www.galgotiasuniversity.edu.in/'),
  makeEngineeringCollege('dtu', 'Delhi Technological University', 'DTU', 'New Delhi', 'Delhi', 'State university', 'https://dtu.ac.in/'),
  makeEngineeringCollege('bharati-vidyapeeth', 'Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune', 'BVCOEP', 'Pune', 'Maharashtra', 'Deemed university college', 'https://bvdu.ac.in/'),
  makeEngineeringCollege('abes', 'ABES Engineering College', 'ABES', 'Ghaziabad', 'Uttar Pradesh', 'Private autonomous college', 'https://abes.ac.in/'),
  makeEngineeringCollege('bpit', 'Bhagwan Parshuram Institute of Technology', 'BPIT', 'New Delhi', 'Delhi', 'Government-aided affiliated college', 'https://www.bpitindia.com/'),
  makeEngineeringCollege('upes', 'University of Petroleum and Energy Studies', 'UPES', 'Dehradun', 'Uttarakhand', 'Private university', 'https://www.upes.ac.in/'),
  makeEngineeringCollege('uttaranchal', 'Uttaranchal University', 'UU', 'Dehradun', 'Uttarakhand', 'Private university', 'https://www.uudoon.in/'),
  makeEngineeringCollege('coep', 'COEP Technological University', 'COEP', 'Pune', 'Maharashtra', 'State public university', 'https://www.coeptech.ac.in/'),
  makeEngineeringCollege('pict', 'Pune Institute of Computer Technology', 'PICT', 'Pune', 'Maharashtra', 'Private autonomous college', 'https://pict.edu/'),
  makeEngineeringCollege('spit', 'Sardar Patel Institute of Technology', 'SPIT', 'Mumbai', 'Maharashtra', 'Private autonomous college', 'https://www.spit.ac.in/'),
  makeEngineeringCollege('djsce', 'Dwarkadas J. Sanghvi College of Engineering', 'DJSCE', 'Mumbai', 'Maharashtra', 'Private autonomous college', 'https://www.djsce.ac.in/'),
  makeEngineeringCollege('mit-wpu', 'MIT World Peace University', 'MIT-WPU', 'Pune', 'Maharashtra', 'Private university', 'https://mitwpu.edu.in/'),
  makeEngineeringCollege('rait', 'Ramrao Adik Institute of Technology', 'RAIT', 'Navi Mumbai', 'Maharashtra', 'Private autonomous college', 'https://www.rait.ac.in/'),
  makeEngineeringCollege('thapar', 'Thapar Institute of Engineering and Technology', 'TIET', 'Patiala', 'Punjab', 'Private deemed university', 'https://www.thapar.edu/'),
  makeEngineeringCollege('bit-mesra', 'Birla Institute of Technology, Mesra', 'BIT Mesra', 'Ranchi', 'Jharkhand', 'Private deemed university', 'https://www.bitmesra.ac.in/')
];

const UnclearEngineeringEntries = [
  'Entry 17 from the handwritten list: image/name not available in the workspace, so it was not guessed.',
  'Entry 30 from the handwritten list: image/name not available in the workspace, so it was not guessed.',
  'Entry 33 from the handwritten list: image/name not available in the workspace, so it was not guessed.'
];

function renderEngineeringColleges() {
  const pageOne = document.getElementById('pageOne');
  if (!pageOne) return;
  const existingEngineering = [...document.querySelectorAll('.college-card[data-streams*="engineering"]')];
  existingEngineering.forEach(card => card.remove());
  EngineeringColleges.forEach(college => {
    const card = document.createElement('div');
    card.className = 'college-card engineering-data-card';
    card.dataset.streams = 'engineering';
    card.dataset.collegeId = college.id;
    card.innerHTML = `<div class="college-media"><img class="photo" src="${college.logo}" alt="${college.name}"><div class="rating">Engineering</div><div class="name-strip"><span class="logo-chip">${college.shortName}</span><div><h4>${college.name}</h4><div class="loc"><i class="fa-solid fa-location-dot"></i> ${college.location.city}, ${college.location.state}</div></div></div></div><div class="college-body"><div class="row"><span class="k">Type</span><span class="v">${college.category}</span></div><div class="row"><span class="k">B.Tech</span><span class="v">Available; verify branches</span></div><div class="row"><span class="k">Annual Fees</span><span class="v">${college.fees.annual}</span></div><div class="row"><span class="k">Admission</span><span class="v">${college.admission.exams[0]}</span></div><a class="btn-apply" href="${college.website}" target="_blank" rel="noopener noreferrer">View Details</a></div>`;
    pageOne.append(card);
  });
}
