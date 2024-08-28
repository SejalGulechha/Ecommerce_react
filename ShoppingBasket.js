import './ShoppingBasket.css';

const ShoppingBasket = () => {
  return(
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr/>
      <ul className='list'>
        <li>
          <div className='imageHolder'>
            <img src="https://www.bookishadda.com/cdn/shop/files/230_f298f5c0-c116-4280-bef6-5d00db25b743.png?v=1701690525&width=713" alt="" />
          </div>
          <div className='itemDeatils'>
            <div>Atomic Habits: The life-changing million-copy bestseller by James Clear (Paperback</div>
            <p><strong>₹159.00</strong></p>
            <div>Rating</div>
            <button>Remove from Cart</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ShoppingBasket;