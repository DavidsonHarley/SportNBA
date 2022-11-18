// const cardGameUser = document.querySelector('.cardGameUser');


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2cbca2f76dmshb9c3958dcfac525p108228jsnf31473749338',
// 		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
// 	}
// };
//   async function fetchApi(){
//     try {
         
//          const response = await fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=45', options);
//          const result = await response.json();
//          const firstName = result.data
//          console.log(firstName);
//          const gameUser = firstName.map((el) => `
         
//          <div className='cardGameUser'>
//                   <div class="card" style={{width: '18rem'}}>
//                   <div class="card-body">
//                       <h5 class="card-title">${el.first_name} ${el.last_name}</h5>
//                       <p class="card-text">Team: ${el.team.full_name}</p>
//                       <p class="card-text">City: ${el.team.city}</p>
//                   </div>
//                   </div>
//                    </div>

//                    ` )

//         gameUser.forEach(element => {
//           cardGameUser.innerHTML += element  
//         });                                                      
                        
      
//     } catch (error) {
//         console.log(error);
//     } 
// }

// fetchApi()







