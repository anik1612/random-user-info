async function fetchData() {
    try {
        let response = await fetch('https://randomuser.me/api/?results=1');
        let data = await response.json();
        let user = data.results[0];
        console.log(data);
        const ui = new UI();
        ui.displayUserInfo(user);
    } catch (error) {
        console.log(error);
    }

}
fetchData();

setInterval(fetchData, 10000);

let sec = 10;
function timer() {
    sec--;
    if (sec <= 0) {
        sec = 10;
    }
    const timer = document.getElementById('timer');
    timer.innerText = 'refresh after: ' + sec + ' seconds';
}

setInterval(timer, 1000);

