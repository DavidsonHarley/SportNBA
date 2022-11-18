const React = require('react');
const Layout = require('./Layout');


module.exports = function MoreNews(){
    return(
 <Layout>
     <script defer src='/js/fetchMoreNews.js'></script>
 
 <div className='conatinerMoreNews'>
    <form className='formInputMoreNews' action="/moreNews">
            <div className='MoreNewsPoisk'>
                             News Category: <div></div>
            <input className='inputStyle' name='textCategory' type="text" /><button className='btn fourth' type='submit'>Search</button>
            </div>
    </form>
            
            <div className='lentaNewsMore'></div>
            

            </div>
 </Layout>

    );
}