import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const endRef= useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    },[]);

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false)
    }

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Ankur</span>
                        <p>this is just a demo card.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="avatar.png" alt="" />
                    <div className="texts">
                        <p>TCS NextStep</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">

                    <div className="texts">
                        <img src="https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI=" alt="" />

                        <p>TCS NextStep kiya</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="avatar.png" alt="" />
                    <div className="texts">
                        <p>abhi krunga</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">

                    <div className="texts">
                        <p>jaldi kar le time ni h</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="avatar.png" alt="" />
                    <div className="texts">
                        <p>rat ko krunga</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                        onClick={() => setOpen(prev => !prev)}
                    />
                    <div className="piker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>

                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}
export default Chat 