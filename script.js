// Future: add interactivity
document.querySelectorAll('.btn-helper, .btn-receiver').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This will redirect to signup/login page!');
    });
});
