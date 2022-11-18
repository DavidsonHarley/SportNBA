const uiForm = document.querySelector('.uiForm');
const tableGame = document.querySelector('.tableGame');
const newGame = document.querySelector('.newGame');


uiForm?.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const dataValue = e.target.data.value;
        const hostsValue = e.target.hosts.value;
        const checkGuestsValue = e.target.checkGuests.value;
        const checkHostsValue = e.target.checkHosts.value;
        const guestsHostsValue = e.target.guests.value;

        const response = await fetch('/red', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data: dataValue, hosts:hostsValue, checkGuests: checkGuestsValue, checkHosts: checkHostsValue, guests:guestsHostsValue }),
      });
      const result = await response.json()
      console.log(result);
      
      const newTwit = document.createElement('tr');
      newTwit.classList.add('newGame');
      newTwit.innerHTML =`
                     <tr id={id} className='newGame'>
                    <td>${result.tableGame.data}</td>
                    <td>${result.tableGame.hosts}</td>
                    <td>${result.tableGame.checkGuests} : ${result.tableGame.checkHosts}</td>
                    <td>${result.tableGame.guests}</td>
                    <td><a href=${result.tableGame.id}>
                    <button>Редактировать</button>
                    </a>
                    <button id=${result.tableGame.id} className='btnDelete'>Удалить</button>
                    </td>
                </tr>
    `;

    tableGame.appendChild(newTwit)
    
    
        e.target.data.value = null;
         e.target.hosts.value = null;
         e.target.checkGuests.value = null;
         e.target.checkHosts.value = null;
         e.target.guests.value = null;


    } catch (error) {
        console.log(error);
    }
})


newGame?.addEventListener('click', async (e) => {
    try {
        e.preventDefault();
        if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Delete') {
            const { id } = e.target;
            console.log(id);
            const newGame = e.target.parentElement.parentElement
            const response = await fetch('/red', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id }),
            });
            if (response.status === 200) {
                newGame.remove()
            }
          }

    } catch (error) {
        console.log(error);
    }
})