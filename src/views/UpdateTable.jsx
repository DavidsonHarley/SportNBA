const React = require('react');
const Layout = require('./Layout');


module.exports = function Update({newUser, tableGame}){

    return(
 <Layout newUser={newUser}>
<script defer src='/js/fetchUpdate.js'></script>

<div className='containerUpdate'>
<form className="uiForm" id={tableGame.id}>
<h3>Update:</h3>
<div className="form-row">
<input name='data' type="text" required autocomplete="off"/><label for="Data">Data</label>
</div>
<div className="form-row">
<input name='hosts' type="text"  required autocomplete="off"/><label for="Hosts">Hosts</label>
</div>
<div className="form-row">
<input name='checkHosts' type="text"  required autocomplete="off"/><label for="ScoreHosts">ScoreHosts</label>
</div>
<div className="form-row">
<input name='checkGuests' type="text"  required autocomplete="off"/><label for="ScoreGuests">ScoreGuests</label>
</div>
<div className="form-row">
<input name='guests' type="text"  required autocomplete="off"/><label for="Guests">Guests</label>
</div>
<button className='floating-button'>submit</button>
</form>
<div className='tableUpdate'>
<div className='containerTable'>  
<div>
  <img className='imgGifUpdate' src="/img/lastdance.gif" alt="gif" />
</div>
      <table className='tableGame' border="1">
    <tr>
        <th>Дата</th>
        <th>Хозяева</th>
        <th>Счет</th>
        <th>Гости</th>
    </tr>
        <tr className='newGame'>
        <td className='textData'>{tableGame.data}</td>
        <td className='textHosts'>{tableGame.hosts}</td>
        <td className='textCheckGuests'>{tableGame.checkGuests} : {tableGame.checkHosts}</td>
        <td className='textgGuests'>{tableGame.guests}</td>
        </tr>
 </table>
</div>
</div>

</div>


 </Layout>

    );
}