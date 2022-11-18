const React = require('react');
const Layout = require('./Layout');


module.exports = function GameUser(){
    
  if (typeof window !== 'undefined') {  const nameUser = localStorage.getItem('key');
  console.log(nameUser); } 
 
    return(
 <Layout>
   <script defer src='js/fetchApi.js'></script>
        <div className='containerMainGameUser'>
         
            <div className='cardGameUser'>
            
                </div>

            </div>
        

 </Layout>

    );
}