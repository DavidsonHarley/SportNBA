const React = require('react');
const Layout = require('./Layout');


module.exports = function Home({tableGameWin, newUser, newUserID,}){
    return(
 <Layout newUser={newUser}>
 <script defer src='js/fetchApiNews.js'></script>

<div className='containerImg'>
      <img className='imgMain' src="/img/猛烈-fierce-animapptw-動畫社群-in-2021-background-hd-wallpaper-fantastic-wallpapers-animal-wallpaper.gif" alt="img" />
</div>
<div className='titleTable'>Table of Upcoming matches:</div>

<div className='containerNewTable' >
    <div >
        
        <img className='imgGifTable' src="/img/tracy13_full.gif" alt="gif" />
    </div>
    
<div className='containerTableHome table_dark'> 
            
      <table className='tableGame' border="1">
    <tr>
        <th>Date</th>
        <th>Hosts</th>
        <th>Score</th>
        <th>Guests</th>
    </tr>
   {tableGameWin && tableGameWin.sort((a,b) => b.data.length - a.data.length).map(({ id, data, hosts, checkGuests, checkHosts, guests}) => 
        <tr className='newGame'>
            <td>{data}</td>
            <td>{hosts}</td>
            <td>{checkGuests} : {checkHosts}</td>
            <td>{guests}</td>
    
    </tr>
    )}
  
 </table>
 </div>
 <div>
 <img className='imgGifTable' src="/img/048d409585ddebeb18693dfb78e75b8b.gif" alt="gif" />
 </div>
</div>

    <div className='containerMainNews'>
        <div className='newComand'>
                <form className='formInput' action="/">
            <div className='PoiskTeam'>
                Find news by Team: <div></div>
            <input className='inputStyle' name='text' type="text" /><button className='btn fourth' type='submit'>Search</button>
            </div>
            </form>
        </div>
            <div className='containerNews'>
                   <div className='PoiskTeamNews' > The Latest News :</div>
            </div>
            <div className='containerNewPlayer'>
    <form className='formInputNewPlayer' action="/">
            <div className='PoiskTeam'>
                Find news by player: <div></div>
            <input className='inputStyle' name='textPlayer' type="text" /><button className='btn fourth' type='submit'>Search</button>
            </div>

           
            </form>
    </div>
    </div>

    



 </Layout>

    );
}