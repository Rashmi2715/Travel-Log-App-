import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';
import ava06 from '../../assets/images/ava-6.jpg';
import ava07 from '../../assets/images/ava-7.jpg';
import ava08 from '../../assets/images/ava-8.jpg';
import ava09 from '../../assets/images/ava-9.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p> The booking process was smooth, and the guides were knowledgeable and passionate. The itinerary was well-organized, and I enjoyed the flexibility to explore the city at my own pace. Accommodations and meals were excellent, and transportation was convenient. Highly recommend for a memorable London trip!"</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>  Easy booking, knowledgeable guides, a flexible itinerary, and comfortable accommodations. An unforgettable Balinese experience. Highly recommended!"</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Maya</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p> The booking process was seamless, and from the moment I arrived in Paris, I was in awe of the city's beauty. The guides were passionate about Parisian culture and history, providing valuable insights at every turn. The well-structured itinerary allowed me to explore iconic landmarks and charming neighborhoods. The accommodations were not only comfortable but also strategically located. This tour made my visit to Paris an unforgettable experience </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Steffan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>  From the moment I booked, I knew I was in for a special experience. The tour guides were not only informative but also enthusiastic about sharing the beauty and culture of Thailand. The flexible itinerary allowed me to discover this magnificent country at my own pace, and the handpicked accommodations were comfortable and convenient. It was an extraordinary </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Devin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>The booking process was smooth, and I was met with a warm welcome upon arrival in India. The guides were incredibly knowledgeable, offering profound insights into India's rich history and culture. The well-crafted itinerary provided a perfect blend of historical sites, natural wonders, and vibrant markets. The accommodations were comfortable and added to the overall experience. </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Praneeth</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>The booking process was seamless, and I was immediately immersed in the captivating world of China upon arrival. The guides were not only knowledgeable but also passionate about showcasing China's rich heritage. The meticulously planned itinerary allowed me to explore iconic landmarks, breathtaking landscapes, and vibrant local markets. The accommodations were not just comfortable but strategically located for easy access.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava06} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Amith Reddy</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p> The booking process was straightforward, and upon landing in Australia, I was greeted with warmth and enthusiasm. The guides were a wealth of knowledge, sharing insights into Australia's unique culture, wildlife, and natural wonders. The well-structured itinerary allowed me to explore Australia's iconic destinations, from the Great Barrier Reef to the vibrant cities. The accommodations were comfortable and conveniently located.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava07} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Rakshitha</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>  The booking process was seamless, and I was greeted with a warm welcome upon my arrival. The guides were not only informative but also deeply passionate about Singapore's rich history and culture. The thoughtfully designed itinerary allowed me to experience Singapore's iconic landmarks, diverse cuisine, and stunning gardens. The accommodations were both comfortable and conveniently situated</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava08} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Kavya</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>Their seamless booking led to an extraordinary adventure. Passionate guides and an innovative itinerary seamlessly blended iconic landmarks with cutting-edge experiences. Comfortable accommodations and a deep immersion into French culture made my visit unforgettable. Eagerly awaiting my next journey with their innovative approach to travel."</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava09} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Rashmi</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

     
    </Slider>
  );
};

export default Testimonials;