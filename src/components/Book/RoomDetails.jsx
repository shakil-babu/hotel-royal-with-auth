import React, { useContext, useState } from 'react'
import { rooms } from '../../utilities/data';
import { Link, useParams } from 'react-router-dom';
import './RoomDetails.css';
import { UserContext } from '../../App';
const RoomDetails = () => {
    const {bedType} = useParams();
    const findRoom = rooms.find(item => item.id === bedType); 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [showImg, setShowImg] = useState('');
    const [isShow, setIsShow] = useState(true);

    const imgs = findRoom.images ;
    const toggleHandler = (item) => {
        setIsShow(false);
        const findImg = imgs.find(img => img === item)
        setShowImg(findImg)
    }

    const [isDisable, setIsDisable] = useState(true); 
    const [date, setDate] = useState({start:'', end:''});


    const handleStart = (e) => {
        setDate({...date, start:e.target.value})

    }

    const handleEnd = (e) => {
        setIsDisable(false);
        setDate({...date, end:e.target.value})
    }


    const [isBooked, setIsBooked] = useState(false);
    const bookHandler = () => {
        setIsBooked(true)
    }

    return (
        <>
            {
                isBooked ? (
                    <div className="booked-info">
                        <div className="booked-details">

                            <h6>Congratulations {loggedInUser.name}, Your</h6>
                            <h1>Booking Process Completed!</h1>
                            <p>Waiting for <span>{date.start}</span></p>
                            <p style={{marginTop:'20px'}}><Link className='back' to='/rooms'>Back</Link></p>
                        </div>
                    </div>
                ):(
                    <section className="room-details-area">

                <div className="title-main-box">
                    <h5>{findRoom.title}</h5>
                </div>


                <div className="container">
                <Link className='backtoRoom' to='/book'>Back to Rooms</Link>

                <h5 className='greeting-user'>Hey <mark>{loggedInUser.name}</mark> , Let's book this room.</h5>
                    <div className="des-area-flex">
                     <div className="img">
                      {
                          isShow ? <img src={findRoom.imgUrl} alt=""/> : <img src={showImg} alt=""/>
                      }
                        <div className="images-flex-area">
                            {findRoom.images.map(item => {
                                return (
                                    <img onClick={() => toggleHandler(item)} src={item} alt=""/>
                                )
                            })}
                        </div>
                     </div>
                        <div className="desc-box">
                            <h1>{findRoom.title}</h1>
                            <p>{findRoom.exp}</p>
                            <h1>${findRoom.price}</h1>
                            <h5>Bed Type:  <span>{findRoom.bedType}</span></h5>
                            <h5>Bed:  <span>{findRoom.bed}</span></h5>
                            <h5>Capacity:  <span>{findRoom.capacity}</span></h5>
                            <h5>Brand:  <span>{findRoom.brand}</span></h5>
                          <div className="area-for-go">
                          <div className="destination-flex">
                                <div className='date'>
                                    <label htmlFor="checkin">Start:</label> <input onBlur={handleStart} type="date" placeholder='01-01-2021'/>
                                </div>
                                <div className='date'>
                                    <label htmlFor="checkout">End:</label> <input className='last' onChange={handleEnd} type="date" placeholder='01-01-2021'/>
                                </div>
                            </div>
                            <button onClick={bookHandler}  disabled={isDisable} className={isDisable ? 'book':'booktrue'}>Book Now</button>
                          </div>
                        </div>


                    </div>
                    
                </div>
            </section>   
                )
            }
        </>
    )
}

export default RoomDetails
