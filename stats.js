document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('productivityChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'],
            datasets: [{
                label: 'תפוקה יומית',
                data: [85, 88, 80, 90, 92, 75, 70],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        }
    });

    const ctx2 = document.getElementById('departmentChart').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['שיווק', 'פיתוח', 'משאבי אנוש', 'תפעול'],
            datasets: [{
                data: [30, 40, 15, 15],
                backgroundColor: ['red', 'green', 'blue', 'orange']
            }]
        }
    });
});
