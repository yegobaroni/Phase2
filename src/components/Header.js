import React from 'react';

// import { Link } from 'react-router-dom';

function Header() {
  return (
     <header>

   <nav className='nav'>
      <a href='/' >WatchList</a>
      <ul className='nav-ul'>
         <li>
           <a href='/watchlist'>Watch List</a></li>
           <li><a href='/watched'>Watched</a></li>
          <li> <a href='/add' className='btn'>Add</a>
         </li>
      </ul>
   </nav>

        {/* <div className='container'>
         <div className='inner-content'>
             <div className='brand'>
                 <Link to="/">WatchList</Link>
             </div>
             <nav>
             <ul className='nav-links'>
                <li> <Link to='/'>Watch List</Link></li>
                <li> <Link to='/watched'>Watched</Link></li>
                <li> <Link to='/add' className='btn'>Add</Link></li>
             </ul>
           </nav>  
         </div>
    /   </div>  */}
       {/* <div className='container'>
        <div className='inner-content' >
          <div className='brand'>
          WatchList
          </div>
          <ul className='nav-links'>
        <li>Watch List</li>
        <li>Watched</li>
        <li className='btn'> Add</li>
       </ul>
          </div>
          </div> */}

       
    </header>
  );
};

export default Header;