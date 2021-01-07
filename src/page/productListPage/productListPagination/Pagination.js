import React from 'react';
import '../../../myCSS/Pagination.scss';


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href="# " onClick={() => paginate(number)}  className='page-link' style={{fontSize:'150%'}}>
              {number}
            </a>
            {/* to={`pageNumbers=${number}`} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;