const React = require('react');
const Layout = require('./Layout');


module.exports = function CreateTable({newUser, tableGameWin}){

    return(
 <Layout newUser={newUser}>



<script defer src='/js/fetchCreate.js'></script>


<div className='containerUpdate'>
<form method='POST' action='/red' className="uiForm">
<h3>Add Data To The Table:</h3>
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

<div className='containerTable'> 
<div className='containerGifCreate'>
  <img className='imgGifCreate' src="/img/chance.gif" alt="" />
</div> 
      <table className='tableGame' border="1">
   <tr>
        <th>Date</th>
        <th>Hosts</th>
        <th>Score</th>
        <th>Guests</th>

   </tr>
   <tr className='containerDelete '>
    
   {tableGameWin && tableGameWin.map(({ id, data, hosts, checkGuests, checkHosts, guests}) => 
    <tr id={id} className='newGame'>
    <td>{data}</td>
    <td>{hosts}</td>
    <td>{checkGuests} : {checkHosts}</td>
    <td>{guests}</td>
    <td><a href={`/update/${id}`}>
    <button className='floating-buttonRed'>Edit</button>
    </a>
    <button id={id} className='floating-buttonRed btnDelete'>Delete</button>
    </td>
    </tr>
    )}
  </tr>
 </table>

</div>
</div>

 </Layout>

 

    );
}