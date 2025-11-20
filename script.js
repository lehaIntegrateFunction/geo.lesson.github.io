const sections = document.querySelectorAll('.section');
const navBtns = document.querySelectorAll('.nav-btn');

function showSection(index) {
    // Барлық секцияларды жасыру
    sections.forEach(section => section.classList.remove('active'));
    // Барлық кнопкаларды "active" класстан шығару
    navBtns.forEach(btn => btn.classList.remove('active'));

    // Таңдалған секцияны көрсету
    sections[index].classList.add('active');
    // Таңдалған кнопканы көрсету
    navBtns[index].classList.add('active');

    // Бетті жоғарғы жағына жылжыту
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
