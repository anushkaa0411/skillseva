<<<<<<< HEAD
// Future: add interactivity
document.querySelectorAll('.btn-helper, .btn-receiver').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This will redirect to signup/login page!');
    });
=======
/* Basic UI logic + tiny localStorage demo auth
   Replace these with real API calls when backend ready.
*/

document.addEventListener('DOMContentLoaded', () => {
  // elements
  const headerLogin = document.getElementById('headerLogin');
  const headerSignup = document.getElementById('headerSignup');
  const heroHelper = document.getElementById('heroHelper');
  const heroReceiver = document.getElementById('heroReceiver');
  const loginPanel = document.getElementById('loginPanel');
  const signupPanel = document.getElementById('signupPanel');
  const dashboardView = document.getElementById('dashboardView');
  const tasksView = document.getElementById('tasksView');
  const profileView = document.getElementById('profileView');
  const sidebar = document.getElementById('sidebar');
  const btnGotoSignup = document.getElementById('gotoSignup');
  const btnGotoLogin = document.getElementById('gotoLogin');
  const loginSubmit = document.getElementById('loginSubmit');
  const signupSubmit = document.getElementById('signupSubmit');
  const signOut = document.getElementById('signOut');
  const welcomeUser = document.getElementById('welcomeUser');
  const welcomeRole = document.getElementById('welcomeRole');

  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // demo data
  const demoTasks = {
    due: [
      'UPI setup for Mr. Sharma - Due Tomorrow',
      'Math tutoring for Rohan - Due in 2 days'
    ],
    active: [
      'Poster design for local NGO - In Progress',
      'Pension form assistance - Completed'
    ],
    certs: [
      'Digital Literacy Volunteer Certificate',
      'Community Service Excellence Award'
    ],
    perf: {
      completed: 15,
      rating: 4.8
    }
  };

  // utility to hide all major panels
  function hideAllPanels(){
    loginPanel.classList.add('hidden');
    signupPanel.classList.add('hidden');
    dashboardView.classList.add('hidden');
    tasksView.classList.add('hidden');
    profileView.classList.add('hidden');
  }

  // show dashboard (and populate)
  function showDashboard(role, name){
    hideAllPanels();
    dashboardView.classList.remove('hidden');
    sidebar.classList.remove('hidden');
    // fill data
    document.getElementById('dueTasks').innerHTML = demoTasks.due.map(i => `<li>${i}</li>`).join('');
    document.getElementById('activeTasks').innerHTML = demoTasks.active.map(i => `<li>${i}</li>`).join('');
    document.getElementById('certsList').innerHTML = demoTasks.certs.map(i => `<li>${i}</li>`).join('');
    document.getElementById('completedCount').textContent = demoTasks.perf.completed;
    document.getElementById('avgRating').textContent = demoTasks.perf.rating;
    document.getElementById('welcomeUser').textContent = name || 'Volunteer';
    welcomeRole.textContent = (role === 'receiver') ? 'Receiver Dashboard' : 'Helper Dashboard';
  }

  // show login
  function openLogin(){
    hideAllPanels();
    loginPanel.classList.remove('hidden');
    sidebar.classList.add('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // show signup
  function openSignup(){
    hideAllPanels();
    signupPanel.classList.remove('hidden');
    sidebar.classList.add('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // header & hero buttons
  headerLogin?.addEventListener('click', openLogin);
  headerSignup?.addEventListener('click', openSignup);
  heroHelper?.addEventListener('click', openSignup);
  heroReceiver?.addEventListener('click', openLogin);

  btnGotoSignup?.addEventListener('click', (e) => {
    e.preventDefault();
    openSignup();
  });
  btnGotoLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    openLogin();
  });

  // simple localStorage-based signup (demo only)
  signupSubmit?.addEventListener('click', () => {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const pass = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;

    if(!name || !email || !pass){
      alert('Please fill all fields');
      return;
    }
    // store user (simple demo; DO NOT use in production)
    const user = { name, email, role };
    localStorage.setItem('skillseva_user', JSON.stringify({user, pass}));
    alert('Signup successful — demo auth stored locally.');
    showDashboard(role, name);
  });

  // simple login demo (checks localStorage)
  loginSubmit?.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value;
    const stored = JSON.parse(localStorage.getItem('skillseva_user') || 'null');

    if(stored && stored.user.email === email && stored.pass === pass){
      showDashboard(stored.user.role, stored.user.name);
    } else {
      alert('Invalid login (demo). Try previous signup credentials.');
    }
  });

  // sign out
  signOut?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('skillseva_user');
    hideAllPanels();
    sidebar.classList.add('hidden');
    // show hero again
    document.getElementById('hero').scrollIntoView({behavior:'smooth'});
  });

  // side-menu navigation
  document.querySelectorAll('.side-menu a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const view = a.getAttribute('data-view');
      hideAllPanels();
      sidebar.classList.remove('hidden');
      if(view === 'dashboard') dashboardView.classList.remove('hidden');
      else if(view === 'tasks') tasksView.classList.remove('hidden');
      else if(view === 'profile') profileView.classList.remove('hidden');
    });
  });

  // if user already signed up/logged (demo), show dashboard
  const existing = JSON.parse(localStorage.getItem('skillseva_user') || 'null');
  if(existing){
    showDashboard(existing.user.role, existing.user.name);
  }
>>>>>>> 2272a26d7228622bd188929e2760aa824ba107c4
});
