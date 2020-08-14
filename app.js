async function fetchData(){
    try {
    let response = await fetch('https://randomuser.me/api/'); 
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


