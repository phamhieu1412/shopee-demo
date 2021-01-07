import React, { useState, Fragment } from 'react';
// import axios from 'axios';
import ContentAddProduct from '../ContentAddProduct';
import Pagination from './Pagination';


const ProductPagination = (props) => {

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://5de902c2cb3e3800141b8c9d.mockapi.io/shopee/products');
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);
  const indexOfLastPost = currentPage * postsPerPage;//1*5=5
  const indexOfFirstPost = indexOfLastPost - postsPerPage;//5-5=0
  const currentPosts = props.products.slice(indexOfFirstPost, indexOfLastPost);//so spham render
  //paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // if (loading)
  //   return <h2>Loading...</h2>;

  return (
    <Fragment>
      <ul className="list-product">
        {currentPosts.map((post) => {
          return <ContentAddProduct key={post.id} product={post} />
        })
        }
      </ul>
      <div style={{ width: '100%' }}>
        <Pagination postsPerPage={postsPerPage} totalPosts={props.products.length} paginate={paginate} />
      </div>
    </Fragment>
  );
}

export default ProductPagination;