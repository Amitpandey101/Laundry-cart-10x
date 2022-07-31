
import Header2 from '../header-2/header2'
import Sidebar from '../sidebar/sidebar'
import { useState } from 'react'


const Pastorder = () => {
    const [order,setorder] = useState('')

  return (
    <>

    <Header2></Header2>
    <Sidebar></Sidebar>

    <span className='order'>Orders | 0</span>
    <span className='box-create'></span>
    <span className='create'>Create</span>
    <div>
      <span className='search'></span>
      <span className='Search-box'></span>
      
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Order id</th>
      <th scope="col">Order Date & Time</th>
      <th scope="col">Store Location</th>
      <th scope="col">City</th>
      <th scope="col">Store Phone</th>
      <th scope="col">Total Items</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">#</th>
      <th scope="col">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>order1</td>
      <td>10 OCT 2021, 10:15</td>
      <td>Jp Nagar</td>
      <td>Bangalore</td>
      <td>+919988667755</td>
      <td>10</td>
      <td>430 Rs</td>
      <td>Ready to pickup</td>
      <td>Cancel Order</td>
      <td>#</td>
    </tr>
  </tbody>
</table>
</div>

  
    </>
  )
}

export default Pastorder;