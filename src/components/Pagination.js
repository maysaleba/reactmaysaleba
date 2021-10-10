import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './Pagination.css'

const Pagination1 = ({postsPerPage, totalPosts, paginate, pageNumberLimit, maxPageNumberLimit, minPageNumberLimit}) => {
		const pageNumber = [];

	for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<nav>

		
			<ul className="pagination">
			{pageNumber.map(number => (
				<li key={number} className="page-item">
					<a onClick={()=> paginate(number)} href="!#" className="page-link">
					{number}
					</a>
				</li>

				))}
			</ul>
		</nav>
		)
}

export default Pagination1

// 		<Pagination>
//   <Pagination.First />
//   <Pagination.Prev />
//   <Pagination.Item>{1}</Pagination.Item>
//   <Pagination.Ellipsis />

//   <Pagination.Item>{10}</Pagination.Item>
//   <Pagination.Item>{11}</Pagination.Item>
//   <Pagination.Item active>{12}</Pagination.Item>
//   <Pagination.Item>{13}</Pagination.Item>
//   <Pagination.Item disabled>{14}</Pagination.Item>

//   <Pagination.Ellipsis />
//   <Pagination.Item>{20}</Pagination.Item>
//   <Pagination.Next />
//   <Pagination.Last />
// </Pagination>