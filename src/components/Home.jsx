import styles from '../styles/home.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { setCategory } from "../redux/CategorySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const offers = [
  { id: 1, title: "Flat 20% off on Electronics", desc: "Top brands included", image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png" },
  { id: 2, title: "Buy 2 Get 1 Free", desc: "Apparel storewide", image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png" },
  { id: 3, title: "Free Shipping above ₹1999", desc: "Select pin codes" , image:"https://png.pngtree.com/recommend-works/png-clipart/20250101/ourmid/pngtree-orange-delivery-man-on-motorcycle-png-image_15017922.png" },
];



function Home(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleCategoryClick = (category) => {
      dispatch(setCategory(category));
      navigate("/products");
  }
    return(
        <div className={styles.homePage}>
            <Carousel className="mb-5  shadow-lg mt-5 m-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/705dfcfcdffd2671.jpg?q=60"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/78c3cfa787e8acbe.jpg?q=60"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/edd13e546319db37.jpeg?q=60"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

       <section className='m-4'>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4>Popular Categories</h4>
          <Link className={styles.seeAll} to="/products">
            See all →
          </Link>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card p-3 text-center">
              {/* <Link className={styles.link} onClick={() => handleCategoryClick("electronics")}>Electronics</Link> */}
              <span className={styles.link} onClick={() => handleCategoryClick("electronics")}>Electronics</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 text-center">
              {/* <Link className={styles.link} to="/products">Clothing</Link> */}
               <span className={styles.link} onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 text-center">
              {/* <Link className={styles.link} to="/products">Home</Link> */}
               <span className={styles.link} onClick={() => handleCategoryClick("women's clothing")}>women's Clothing</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 text-center">
              {/* <Link className={styles.link} to="/products">Sports</Link> */}
               <span className={styles.link} onClick={() => handleCategoryClick("jewelery")}>Jewelery</span>
            </div>
          </div>
        </div>
      </section>

      <section className=" m-4">
        <h4>Today's Offers</h4>
        <div className="row">
          {offers.map((o) => (
            <div key={o.id} className="col-md-4">
              <div className={`card p-3 text-center mb-2 ${styles.bigCard}`}>
                <img src={o.image} className={styles.image}/>
                <h6>{o.title}</h6>
                <p>{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      </div>


    )
}
export default Home;