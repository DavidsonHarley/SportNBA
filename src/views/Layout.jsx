const React = require('react');

module.exports = function Layout({children, newUser }){
    return(
    <html lang="en">
<head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Pacifico&family=Rubik+Distressed&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/styleHome.css" />
    <link rel="stylesheet" href="/css/styleGameUser.css" />
    <link rel="stylesheet" href="/css/styleCreate.css" />
    <link rel="stylesheet" href="/css/styleReg.css" />
    <link rel="stylesheet" href="/css/styleAvt.css" />
    <link rel="stylesheet" href="/css/styleCreateTable.css" />
    <link rel="stylesheet" href="/css/styleUpdate.css" />
    <link rel="stylesheet" href="/css/styleMoreNews.css" />

    <title>NBA News</title>
</head>
<body>
      <nav className='nav'>
         <div className='containerLogo'>
            <a href="/">
            <img className='logoGif' src="/img/10402202242022223.gif" alt="logo" />
            </a>
            <div className='titleLogo'>
                   NBA News
            </div>
       </div>

       {newUser ? (
          <div className='containerUser'>
           
            <div >  
            <a className='double-border-button' href="/moreNews">More News</a>  
         </div>
          <div>
             <a className='double-border-button'  href="/red">
             Redaction
             </a>
          </div>
          
          <div className='userLogin'>
          <a className='double-border-button'  href="/logout">Exit</a>
          </div>
          <div>
               <a href="https://www.youtube.com/@NBA">
                  <img className='imgNavGifYoutube' src="/img/youtube-channel.gif" alt="youtube" />
               </a>
            </div>
       </div>

       ) : (
         <div className='containerUser'>
         {/* <div className='UserReg'>  
            <a className='double-border-button' href="/reg">Registration</a>  
         </div> */}
         <div className='UserReg'>  
            <a className='double-border-button' href="/moreNews">More News</a>  
         </div>
         <div>
         </div>
         <div className='userLogin'>
         <a className='double-border-button'  href="/avt">Authorization</a>
         </div>
         <div>
               <a href="https://www.youtube.com/@NBA">
                  <img className='imgNavGifYoutube' src="/img/youtube-channel.gif" alt="youtube" />
               </a>
            </div>
      </div>
        
       )}
      </nav>
    {children}
</body>
</html>

    );
}