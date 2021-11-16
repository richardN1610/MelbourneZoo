import React from 'react'
import './Content.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Contents() {
    return (
        <div className="contents-wrapper">
            <div className="block event-wrapper">
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
                                <br /><br />
                                Magni saepe dolore excepturi? Modi quos aperiam porro est dolorem fugiat eligendi itaque ullam maxime dolore. Commodi numquam quisquam quae saepe nisi necessitatibus similique esse, ipsa quas eius et architecto!</span>
                        </div>
                        <div className="ticket">
                            <Button buttonStyle='btn-outline' buttonSize='btn-large' className> Visit Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="event upcoming-events">
                    <div className="event-img">
                        <img src={require('../Images/lion.jpg').default} />
                    </div>
                    <div className="event-info">
                        <div className="event-name" >
                            Photograph With Lion
                        </div>
                        <div className="event-desc">
                            <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto officia laborum consequuntur eveniet enim at? Blanditiis, saepe. Temporibus, nisi. Temporibus ratione adipisci rerum, architecto asperiores at fugit velit labore numquam.
                                <br /><br />
                                Nemo repudiandae, architecto delectus ratione, cumque qui mollitia ullam earum esse culpa autem beatae laborum quibusdam velit itaque veritatis placeat repellendus optio ipsam voluptatum tenetur excepturi. Dolore vel fugit cumque?</span>
                        </div>
                        <div className="ticket">
                            <Button className="test" buttonStyle='btn-outline'> Visit Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block social-media">
                <div className="social-media-header">Connect With Us</div>
                <div className="underline"> </div>
                <div className="social-media-contents">
                    <div className="content facebook">
                        <div className="content-img">
                            <img src={require('../Images/otter.jpg').default} />
                        </div>
                        <div className="to-social">
                            <a href="https://www.facebook.com/zoosvictoria/" target="_blank">Follow Our Facebook</a>
                        </div>
                        <div className="content-text">
                            Follow our Facebook page to see new photos every day.
                        </div>
                    </div>
                    <div className="content twitter">
                        <div className="content-img">
                            <img src={require('../Images/panda2.jpg').default} />
                        </div>
                        <div className="to-social">
                            <a href="https://twitter.com/ZoosVictoria" target="_blank">News & Updates On Twitter</a>
                        </div>
                        <div className="content-text">
                            Our Twitter page is the best way to keep up to date with everything happening at the zoo, even while our doors are shut.
                        </div>
                    </div>
                    <div className="content instagram">
                        <div className="content-img">
                            <img src={require('../Images/koala.jpg').default} />
                        </div>
                        <div className="to-social">
                            <a href="https://www.instagram.com/zoosvictoria/" target="_blank">Latest Videos On Instgram  </a>
                        </div>
                        <div className="content-text">
                            Follow us on Instagram for the latest videos and photos.
                        </div>
                    </div>
                </div>
            </div>
            <div className="block location-wrapper">
                <div className="location-title">
                    <i className="fas fa-map-marker-alt"></i><span>Location</span>
                </div>
                <div className="location-details">
                    <div className="location-text">
                        <span> Melbourne Zoo is located within Royal Park in Parkville, approximately 4 kilometres north of the centre of Melbourne.</span>
                        <div className="location-link">
                            <a href="https://www.google.co.nz/maps/place/Melbourne+Zoo%2FRoyal+Park/@-37.7824226,144.9470549,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65cda62fcce7d:0xcde53c22a366eed!8m2!3d-37.7824269!4d144.9492436" target="_blank">How to get here</a>
                        </div>
                    </div>
                    <div className="location-text">
                        <span className="public-transport"> By Bus</span> <br />
                        <span>Bus route 505 from Moonee Ponds to Melbourne University stops outside Melbourne Zoo.</span>
                    </div>
                    <div className="location-text">
                        <span className="public-transport"> By Tram</span> <br />
                        <span>Trains run from Flinders Street Station on the Upfield line every day, stopping at Royal Park Station - just across the road from Melbourne Zoo's rail gate entrance.
                            Please see above advice about planned disruptions on the Upfield line due to the Level Crossing Removal Project.</span>
                    </div>
                    <div className="location-text">
                        <span className="public-transport"> By Train</span> <br />
                        <span>Route 58 between West Coburg and Toorak runs via William Street in the city centre every day, with services as often as every 6 minutes,
                            stopping directly outside Melbourne Zoo at Stop 26. Make sure you travel safely on board.</span>
                    </div>
                    <div className="ptv">
                        <span> <i className="fas fa-info"></i> For more information </span> <br />
                        <div className="ptv-link">
                            <a href="https://www.ptv.vic.gov.au/" target="_blank">Visit PTV</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contents
