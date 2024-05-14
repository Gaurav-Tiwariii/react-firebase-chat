import {  signOut } from "firebase/auth"
import "./detail.css"
import { auth } from "../../firebase";
const Detail = () => {
    // const auth = getAuth(app);
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Ankur Tiwari</h2>
                <p>These properties collectively define the layout.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privvacy % help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://rukminim2.flixcart.com/image/850/1000/krgohow0/poster/e/v/f/medium-trending-marshmello-wallpaper-latest-poster-as-0011-original-imag59ahzz7pzeyc.jpeg?q=20&crop=false" alt="" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" alt="" className="dicon"/>
                        </div>
                        {/* <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://rukminim2.flixcart.com/image/850/1000/krgohow0/poster/e/v/f/medium-trending-marshmello-wallpaper-latest-poster-as-0011-original-imag59ahzz7pzeyc.jpeg?q=20&crop=false" alt="" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" alt="" className="dicon" />
                        </div> */}
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://rukminim2.flixcart.com/image/850/1000/krgohow0/poster/e/v/f/medium-trending-marshmello-wallpaper-latest-poster-as-0011-original-imag59ahzz7pzeyc.jpeg?q=20&crop=false" alt="" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" alt="" className="dicon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://rukminim2.flixcart.com/image/850/1000/krgohow0/poster/e/v/f/medium-trending-marshmello-wallpaper-latest-poster-as-0011-original-imag59ahzz7pzeyc.jpeg?q=20&crop=false" alt="" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" alt="" className="dicon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://rukminim2.flixcart.com/image/850/1000/krgohow0/poster/e/v/f/medium-trending-marshmello-wallpaper-latest-poster-as-0011-original-imag59ahzz7pzeyc.jpeg?q=20&crop=false" alt="" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" alt="" className="dicon" />
                        </div>



                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block user</button>
                <button className="logout" onClick={()=> auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}
export default Detail