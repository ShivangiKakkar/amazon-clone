import React from 'react';
import './Home.css'; 
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
              className="home__image"
              src="https://www.amazon.in/images/G/31/img17/AmazonDevices/2019/pushnotification/PD_GW_Teaser-PC-hero_2x._CB409675246_.jpg"
              alt=""/>

              {/* Product id, title, price, rating, img */}
              <div className="home__row">
                <Product 
                  id={12321341} 
                  title="Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future"
                  price={11.96}
                  rating={5}
                  image="https://www.amazon.in/images/I/91CyhdaumeL.jpg"
                />
                <Product 
                  id={49538094} 
                  title="AKASO V50Elite 4K 60fps WiFi Action Camera Touch Screen Voice Control EIS 40m Waterproof Underwater Camera Adjustable View Angle 8X Zoom Remote Control Sports Camera with Helmet Accessories Kit"
                  price={165.12}
                  rating={4}
                  image="https://www.amazon.in/images/I/61j2gU3e6LL._SL1001_.jpg"
                />
              </div>
              <div className="home__row">
                <Product 
                  id={33432983} 
                  title="BLACK+DECKER HD455KA 10mm 550 Watt Impact Drill Kit (Orange, 41-Pieces)"
                  price={54.14}
                  rating={2}
                  image="https://www.amazon.in/images/I/91036JF0tXL._SL1500_.jpg"
                />
                <Product 
                  id={77865502} 
                  title="Pampers Diaper Pants, XL, 56 Count"
                  price={10.99}
                  rating={4}
                  image="https://www.amazon.in/images/I/81z2EphWLdL._SL1500_.jpg"
                />
                <Product 
                  id={11388505} 
                  title="AELOMART Men's Regular Fit T-Shirt"
                  price={6.41}
                  rating={4}
                  image="https://www.amazon.in/images/I/71qwnRAujEL._UL1500_.jpg"
                />
              </div>
            {/* THE GIF */}
              <div className="home__gif">
                <img src="https://www.amazon.in/images/G/31/IMG19/Furniture/WFH/Header/PC_Banner_1500x350.gif" alt=""/>
              </div>
              <div className="home__row">
                <Product 
                  id={34509812} 
                  title="BG Furniture Sheesham Wood Writing Study Table for Students with Chair Computer Desk for Home Study Desk Table for Home and Office (Honey Finish)"
                  price={221.41}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/41JnEHR2OFL.jpg"
                />
                <Product 
                  id={98798756} 
                  title="Lenovo Ideapad C340 Intel Core i5 10th Gen 14 inch FHD 2 in 1 Convertible Laptop (8GB/512GB SSD/Window/Office/Gray/1.6Kg), 81TK00GTIN"
                  price={940.0}
                  rating={3}
                  image="https://www.amazon.in/images/I/81nLe576p%2BL._SL1500_.jpg"
                />
                <Product 
                  id={45342312} 
                  title="Deckup Versa Office Table and Study Desk (Dark Wenge, Matte Finish)"
                  price={999.0}
                  rating={4}
                  image="https://www.amazon.in/images/I/81Y2RsCa34L._SL1500_.jpg"
                />
              </div>
              <div className="home__gif home__bottomAd">
                <img src="https://www.amazon.in/images/G/31/img17/AmazonBusiness/Anniversary2019/B2Ccustomer_Strip_1500_100_0705_1._CB1588869535_.jpg" alt=""/>
              </div>
              {/* Product  */}
        </div>
    );
}
export default Home;
