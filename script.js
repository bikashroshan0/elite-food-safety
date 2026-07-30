const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = `New FoodAdda enquiry\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nEmail: ${form.get('email')}\nCompany: ${form.get('company') || 'Not provided'}\nService Required: ${form.get('service')}\n\nMessage:\n${form.get('message') || 'Not provided'}`;
  window.location.href = `mailto:bikashroshan000@gmail.com?subject=${encodeURIComponent('New FoodAdda Enquiry')}&body=${encodeURIComponent(body)}`;
});
