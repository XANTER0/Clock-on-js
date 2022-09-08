let par = document.querySelector('#par');

function clock() {
    setInterval(function() {
        let date = new Date();
        let formatter = new Intl.DateTimeFormat('ru', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        par.textContent = formatter.format(date);
    }, 1000)
};

clock();