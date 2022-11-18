const containerNews = document.querySelector('.containerNews');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2cbca2f76dmshb9c3958dcfac525p108228jsnf31473749338',
		'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
	}
};

  async function fetchApiNews(){
    try {
         const response = await fetch('https://nba-latest-news.p.rapidapi.com/news', options);
         const result = await response.json();
         const cardNewsPlayer = result.map((el) => `
         <div style='background: rgba(17, 92, 153, 0.24); box-shadow:0 0 15px 4px rgba(0,0,0,0.06); border: 3px solid #edb64996; border-radius: 50px; padding: 20px; margin: 10px;'>
         <img style='width: 18rem; border-radius: 50px;' src="/img/large.jpg" alt="img"  />
         <div className='h3Title'>${el.title}</div>  
            <a href=${el.url} class="sliding-button">Detail</a>
             </div>
         `)
         console.log(result);
         cardNewsPlayer.forEach(element => {
          containerNews.innerHTML += element 
         });
    } catch (error) {
        console.log(error);
    } 
}
console.log(fetchApiNews());


const formInput = document.querySelector('.formInput');
const newComand = document.querySelector('.newComand');

formInput.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const textValue = e.target.text.value
    const urlCommand = `https://nba-latest-news.p.rapidapi.com/news/team/${textValue}`;
    const response = await fetch(urlCommand, options);
    const result = await response.json();
    const newComandPlayer = result.map((el) => `
    <div style='background: rgba(17, 92, 153, 0.24); box-shadow:0 0 15px 4px rgba(0,0,0,0.06); border: 3px solid #edb64996; border-radius: 50px; padding: 20px; margin: 10px;'>
    <img style='width: 18rem; border-radius: 50px;' src="/img/large.jpg" alt="img"  />
    <div className='h3Title'>${el.title}</div>  
       <a href=${el.url} class="sliding-button">Detail</a>
        </div>
    `);
    newComandPlayer.forEach(element => {
      newComand.innerHTML += element 
     });

    e.target.text.value = null;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})

const formInputNewPlayer = document.querySelector('.formInputNewPlayer');
const containerNewPlayer = document.querySelector('.containerNewPlayer');


formInputNewPlayer.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const textNewPlayer = e.target.textPlayer.value;
    const urlCommand = `https://nba-latest-news.p.rapidapi.com/news/player/${textNewPlayer}`;
    const response = await fetch(urlCommand, options);
    const result = await response.json();
    const newPlayer = result.map((el) => `
    <div style='background: rgba(17, 92, 153, 0.24); box-shadow:0 0 15px 4px rgba(0,0,0,0.06); border: 3px solid #edb64996; border-radius: 50px; padding: 20px; margin: 10px;'>
         <img style='width: 18rem; border-radius: 50px;' src="/img/large.jpg" alt="img"  />
         <div className='h3Title'>${el.title}</div>  
            <a href=${el.url} class="sliding-button">Detail</a>
             </div>
    `);
    newPlayer.forEach(element => {
      containerNewPlayer.innerHTML += element 
     });


    e.target.textPlayer.value = null;
  } catch (error) {
    console.log(error);
  }
})
