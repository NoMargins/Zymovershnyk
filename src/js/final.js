import "../styles/index.scss";
import "../styles/final.scss";

const itemsPerPage = 25;
let currentPage = 1;
let participants = [];

// Функція для отримання даних з API
function fetchParticipants() {
    fetch('https://api.zymovershnyk.fun/results.php', {
        method: 'GET'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Перевірка статусу відповіді
            if (data.status !== "success") {
                throw new Error('Сервер повернув статус помилки');
            }

            // Обробка масиву даних
            participants = data.results.map((item, index) => ({
                name: item.nickname,
                time: item.result
            }));

            // Сортуємо учасників за часом від найменшого до найбільшого
            participants.sort((a, b) => {
                const timeA = a.time.split(':').reduce((acc, time) => (60 * acc) + +time);
                const timeB = b.time.split(':').reduce((acc, time) => (60 * acc) + +time);
                return timeA - timeB;
            });

            renderPage(currentPage);
        })
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
        });
}


function renderPage(page) {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // Очищуємо попередні результати

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageParticipants = participants.slice(start, end);

    pageParticipants.forEach((participant, index) => {
        const li = document.createElement('li');
        li.textContent = `${start + index + 1}. ${participant.name} - ${participant.time}`;
        leaderboard.appendChild(li);
    });
}

window.onload = function() {
    console.log('Window loaded, fetching participants...'); // Для перевірки
    fetchParticipants(); 
};
