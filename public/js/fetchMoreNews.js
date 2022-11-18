const lentaNewsMore = document.querySelector('.lentaNewsMore');
const formInputMoreNews = document.querySelector('.formInputMoreNews')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2cbca2f76dmshb9c3958dcfac525p108228jsnf31473749338',
		'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
	}
};


formInputMoreNews.addEventListener('submit', async (e) => {
    try {
        e.preventDefault()
        const textCategory = e.target.textCategory.value;
        const urlCat = `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${textCategory}&country=US&lang=en`
        const response = await fetch(urlCat, options);
        const result = await response.json();
        const newMoreNews = result.data.map((el) => `
        <div style='background: rgba(17, 92, 153, 0.24); text-align: center; box-shadow:0 0 15px 4px rgba(0,0,0,0.06); border: 3px solid #edb64996; border-radius: 50px; padding: 20px; margin: 10px; overflow-x:hidden;'>
          <img style='width: 18rem; border-radius: 50px;' src=${el.photo_url} alt="img"  />
            <div style=' margin-top: 10px; font-size: 20px; width: 300px; font-family: 'Permanent Marker', cursive; overflow-x:hidden '>${el.title}</div>  
              <a href=${el.link} class="sliding-button">Detail</a>
        </div>
        `);
        newMoreNews.forEach(element => {
            lentaNewsMore.innerHTML += element
        });
        e.target.textCategory.value = null;
        console.log(result.data);

    } catch (error) {
        console.log(error);
    }
})
