const uiForm = document.querySelector('.uiForm');
const newGame = document.querySelector('.newGame')
const textData = document.querySelector('.textData');
const textHosts = document.querySelector('.textHosts');
const textCheckGuests= document.querySelector('.textCheckGuests');
const textgGuests = document.querySelector('.textgGuests');



uiForm.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const dataValue = e.target.data.value;
        const hostsValue = e.target.hosts.value;
        const checkGuestsValue = e.target.checkGuests.value;
        const checkHostsValue = e.target.checkHosts.value;
        const guestsHostsValue = e.target.guests.value;
        const {id} = e.target;
        const response = await fetch(`/update/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ id, data: dataValue, hosts:hostsValue, checkGuests: checkGuestsValue, checkHosts: checkHostsValue, guests:guestsHostsValue })
        })
        const result =  await response.json();
        console.log(result);

        textData.innerHTML =  `${result.tableGame.data}`;
        textHosts.innerHTML =  `${result.tableGame.hosts}`;
        textCheckGuests.innerHTML =  `${result.tableGame.checkGuests} : ${result.tableGame.checkHosts}`;
        textgGuests.innerHTML =  `${result.tableGame.guests}`;
        
        

        
        e.target.data.value = null;
        e.target.hosts.value = null;
        e.target.checkGuests.value = null;
        e.target.checkHosts.value = null;
        e.target.guests.value = null;


    } catch (error) {
        console.log(error);
    }
})