import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);

    const amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next) => prev + next);
    const discount = amount / 10;
    const tax = (18/100)*amount;
  return (
    <>
      <div className='cart_main'>
      <div className='cart_page_container'>
           <table>
            <tr>
                <td>Name</td>
                <td>Color</td>
                <td>Price</td>
                <td>Brand</td>
                <td>Category</td>
            </tr>
            {
                cartData.map((item) => {
                    return  <tr key={item.id}>
                            <td> {item.name} </td>
                            <td> {item.color} </td>
                            <td> {item.price} </td>
                            <td> {item.brand} </td>
                            <td> {item.category} </td>
                        </tr>
                })
            }
           </table>
      </div>
      <div className='price_detail'>
           <div className='adjust_price'><span>Amount :</span><span> {amount} </span> </div>
           <div className='adjust_price'><span>GST<p>(18%)</p>:</span><span> {tax} </span> </div>
           <div className='adjust_price'><span>Discount<p>(10%)</p>:</span><span> {discount} </span> </div>
           <div className='adjust_price'><span>Total Rupees:</span><span> {(amount + tax) - discount} /-</span> </div>
      </div>
      </div>
    </>
  )
}

export default Cart;