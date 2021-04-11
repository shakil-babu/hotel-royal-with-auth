import React from 'react';
import { rooms } from '../../utilities/data';
import Room from '../Room/Room';
const Book = () => {

    return (
        <section className="home-main-area">
        <div className="container">
        <div className="title-area">
            <h1>Choose  Room</h1>
            <p>For the best services</p>
            <div className="line"></div>
        </div>
            <div className='home-grid-layout'>
                {
                    rooms.map(room => <Room key={room.bedType} room={room}></Room>)
                }
            </div>
    </div>
    </section>
    );
};

export default Book;