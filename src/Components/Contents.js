import React from 'react'
import './Content.css'

function Contents() {
    return (
        <div className="contents-wrapper">
            <div className="event current-events">
                <div className="event-img">
                    <img src={require('../Images/red_panda3.jpg').default} />
                </div>
                <div className="event-info">
                    <div className="event-name">
                        <span className="name">
                            Experience With Red Panda
                        </span>
                    </div>
                    <div className="event-desc">
                        <span className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusantium illo eaque ducimus tempore praesentium, blanditiis nisi. Aliquid unde quis minima quaerat sint quos? Quae delectus quas aspernatur accusantium odio.
                        Magni saepe dolore excepturi? Modi quos aperiam porro est dolorem fugiat eligendi itaque ullam maxime dolore. Commodi numquam quisquam quae saepe nisi necessitatibus similique esse, ipsa quas eius et architecto!</span>
                    </div>
                </div>
            </div>
            <div className="event upcoming-events">
                <div className="event-img">
                    <img src={require('../Images/lion.jpg').default} />
                </div>
                <div className="event-info">
                    <div className="event-name">
                        Experience With Lion
                    </div>
                    <div className="event-desc">
                        <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto officia laborum consequuntur eveniet enim at? Blanditiis, saepe. Temporibus, nisi. Temporibus ratione adipisci rerum, architecto asperiores at fugit velit labore numquam.
                        Nemo repudiandae, architecto delectus ratione, cumque qui mollitia ullam earum esse culpa autem beatae laborum quibusdam velit itaque veritatis placeat repellendus optio ipsam voluptatum tenetur excepturi. Dolore vel fugit cumque?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents
