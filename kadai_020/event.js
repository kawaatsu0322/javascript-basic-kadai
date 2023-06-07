const btnPush = document.getElementById('btn');
const text = document.getElementById('text');

btnPush.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});