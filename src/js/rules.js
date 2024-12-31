import "../styles/index.scss";
import "../styles/rules.scss";

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const form = document.getElementById('registrationForm');

if (nextBtn && form) {
    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        const name = formObject.name.trim();
        const phone = formObject.phone.trim();

        if (!name || name.length < 5) {
            alert('Будь ласка, введіть ім\'я, яке містить щонайменше 5 символів.');
            return;
        }

        if (!phone || phone.length < 10) {
            alert('Будь ласка, введіть номер телефону, який містить щонайменше 10 символів.');
            return;
        }

        // formObject.id = generateUUID();

        try {
            localStorage.setItem('registrationData', JSON.stringify(formObject));
            console.log('Дані успішно збережені в localStorage:', formObject);
            window.location.href = 'puzzle.html';
        } catch (error) {
            console.error('Помилка при збереженні в localStorage:', error);
            alert('Помилка при збереженні даних. Спробуйте ще раз.');
        }
    });
}

if (skipBtn) {
    skipBtn.addEventListener('click', function () {
        localStorage.clear();
        window.location.href = 'puzzle.html';
    });
}
