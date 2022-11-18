const React = require('react');
const Layout = require('./Layout');


module.exports = function Reg(){

    return(
 <Layout>


<form method='POST' action='/reg' class="decor">
<div class="form-left-decoration"></div>
<div class="form-right-decoration"></div>
<div class="circle"></div>
<div class="form-inner">
<h3>Authorization</h3>
<input name='name' type="text" placeholder="Username"/>
<input name='password' type="password" placeholder="Password"/>
<input name='email' type="text" placeholder="Email"/>
<button className='floating-button'>submit</button>
</div>
</form>

 </Layout>

    );
}