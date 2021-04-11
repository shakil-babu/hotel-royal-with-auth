import React from 'react';
import { rooms } from '../../utilities/data';
import Header from '../Header/Header';
import Room from '../Room/Room';
import './Home.css';
const Home = () => {
    const Rooms = rooms.slice(0,8);
    return (
        <>
            <Header/>
            <section className="home-main-area">
                <div className="container">
                <div className="title-area">
                    <h1>Choose  Room</h1>
                    <p>For the best services</p>
                    <div className="line"></div>
                </div>
                    <div className='home-grid-layout'>
                        {
                            Rooms.map(room => <Room key={room.bedType} room={room}></Room>)
                        }
             </div>
            </div>
            </section>
        </>
    );
};

export default Home;