import React from 'react'
import Image from "next/image";
import { useState } from "react";
//
import googlestar from '/public/images/fixed/google-star.svg'
import googlereview from '/public/images/fixed/google-review.svg'
import facebookreview from '/public/images/fixed/facebook-review.svg'
import facebookstar from '/public/images/fixed/facebook-star.svg'
import powerdmeta from '/public/images/fixed/powerd-meta.webp'
import newpower from '/public/images/fixed/newpower.png'

const SupersaleStiky = () => {

    const [megamenu1, setMegaMenu1] = useState(false);
    const [megamenu2, setMegaMenu2] = useState(false);

    function opnen() {
        setMegaMenu1(true);
    }
    function close() {
        setMegaMenu1(false);
    }
    function opnen1() {
        setMegaMenu2(true);
    }
    function close2() {
        setMegaMenu2(false);
    }

    return (
        <>
            <div className="reviewsWidgetnew">
                <div className="google box" onClick={opnen}>
                    <div className="col">
                        <Image src={googlereview} alt="google" />
                    </div>
                    <div className="col newyorklong1">
                        <h5>Google Rating</h5>
                        <div>
                            <span>5.0</span>
                            <Image src={googlestar} alt="google" width="110" height="20" />
                        </div>
                        <p>Based on 17 reviews</p>
                    </div>
                </div>
                <div className="facebook box" onClick={opnen1}>
                    <div className="col">
                        <Image src={facebookreview} alt="facebook" width="48" height="48" />
                    </div>
                    <div className="col newyorklong1">
                        <h5>Facebook Rating</h5>
                        <div>
                            <span>5.0</span>
                            <Image src={facebookstar} alt="facebook" width="110" height="20" />
                        </div>
                        <p>Based on 16 reviews</p>
                    </div>
                </div>
            </div>
            {megamenu1 &&
                <div className="reviewsSidebar google">

                    <div className="header">
                        <span className="close" onClick={close}>X</span>
                        <div className="col cross">
                            <Image src={googlereview} alt="google" width="48" height="48" />
                        </div>
                        <div className="col">
                            <h5>BitsWits Google Rating</h5>
                            <div>
                                <span>5.0</span>
                                <Image src={googlestar} alt="google" width="110" height="20" />
                            </div>
                        </div>
                    </div>

                    <div className="body" id="bomp">

                        <div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp1" >
                                    I
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Ivan Tonder</h5>
                                <span>4 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Thoughtfully integrating consumer feedback to improve the UX/UI, BitsWits
                                    has developed a series of consistently improved mobile app iterations. Their competitive pricing structure pairs value with cost savings. The project manager was exceptionally skilled and communicative.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp2" >
                                    J
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>James Lau</h5>
                                <span>5 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> BitsWits is dependable and responsive to clients' requests. Always easy and convenient to communicate with them for any issues and support. Gladly recommend them to anyone who wants to build ideas into actual products.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp3" >
                                    M
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Matthew Berwick</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Users have reviewed the app positively. Bitswits was responsive and provided excellent support. Their follow-up is particularly noteworthy.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp4" >
                                    J
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Jorge</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Discovering Bitswits is no doubt one of the highlights of my 2018. They took my idea and brought it to life, beautifully. The team assigned to me was diligent, responsive &amp; patient. They did not try to rush the process so that they could quickly jump onto a new client, instead they treated my app with care as if it was their own. I would highly recommend Bitswits to anyone looking to build something special.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp5">
                                    O
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Omar Boyd</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> To the teams of Bitswits - excellent job done with very smooth and responsive communication! The teams are very knowledgeable and had given us lots of valuable advices.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp6" >
                                    M
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Mather Berwick</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> BitsWits has been professional, communicative, and understanding throughout this partnership, and their mobile apps have received very positive feedback from users, who note that it is much nicer and more user-friendly than others of its kind.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp7" >
                                    C
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Co-Founder</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> The way the team communicates is really great, and they understand what they're doing.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp8" >
                                    M
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Ms. Joy</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> It was great to work with the BitsWits team on my website and application which is “ Kathleen Jasper “.BitsWits not only outshine my expectations but they provided me with innovative ways to scale my business. Their communication and flexibility have been excellent. Highly recommended!</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp9" >
                                    R
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Rene Jensen</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> It was a fantastic experience working with BitsWits and will partner with them again. I have worked with them for a couple of months on my application and it was a good experience. Highly recommended.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp10" >
                                    R
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Raymond</h5>
                                <span>1 Year Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Great service. Prompt response and reliable. Brad's price is really competitive and not a ripoff.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp11">
                                    R
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Richard Frost</h5>
                                <span>1 Year Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Bitswits is a fantastic company to work with. Their understanding of vision and being able to turn that into reality is quite amazing. They add a lot of value by adding new functionalities to ideas that we put forward.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp12" >
                                    G
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Gerry</h5>
                                <span>1 Year Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Taking the time to understand the client's requirements, Bitswits has provided high-quality service during the Mobile App Design &amp; development with CRM Integration. I have not come across a challenge they couldn't resolve with their development &amp; communication skills.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp13" >
                                    K
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Keith</h5>
                                <span>2 Years Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> They delivered superior project management, accompanied by transparency &amp; excellence in grasping the business needs and executing effective solutions, while developing a solution for us. Few projects go this smoothly, but my project did.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp14" >
                                    A
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Aymee</h5>
                                <span>2 Years Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Bitswits accommodated requests, using their tech stack, adjusting to the project management tools, and communicating issues that might impact the timeline. In the end, they delivered a quality product.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp15" >
                                    L
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Leon Roberts</h5>
                                <span>3 Years Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> Though the app has yet to be launched, internal stakeholders are satisfied with Bitswits’s services, noting that major requirements have been fulfilled.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp16">
                                    A
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Anthony Long</h5>
                                <span>3 Years Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> This team is one that simply is capable of doing anything, taking into consideration all the ideas or features that are presented to them. Our website &amp; app is extraordinary because of them. I am very happy about the experience and I intend to collaborate with Bitswits for many other future projects</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName avp17">
                                    N
                                </div>
                            </div>
                            <div className="col integrating">
                                <h5>Nathan Jespersen</h5>
                                <span>2 Weeks Ago</span>
                                <p><Image src={googlestar} alt="google" width="110" height="20" /> I felt the enthusiasm of the entire team when it came to my concept and this thing made our collaboration an enjoyable one. I work very well with Ana, she is paying attention and she always came up with solutions, whenever needed, in a short period of time</p>
                            </div>
                        </div></div>

                    <div className="footer">
                        <Image src={newpower} alt="powered by Google" width="144" height="18" title="powered by Google" />
                    </div>
                </div>
            }
            {megamenu2 &&
                <div className="reviewsSidebar google">

                    <div className="header">
                        <span className="close" onClick={close2}>X</span>
                        <div className="col cross">
                            <Image src={facebookreview} alt="google" width="48" height="48" />
                        </div>
                        <div className="col">
                            <h5>BitsWits Facebook Rating</h5>
                            <div>
                                <span>5.0</span>
                                <Image src={facebookstar} alt="google" width="110" height="20" />
                            </div>
                        </div>
                    </div>

                    <div className="body" id="bomp">

                        <div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp1" >
                                    L
                                </div>
                            </div>
                            <div className="col">
                                <h5>Luna Morgaciova</h5>
                                <span>2 Days Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> “Bitswits is a team of professionals. They improve their skills every day and use only the best and most reliable technologies. I am proud to say, that we learned many useful things from them, and it is the best team I have ever worked with. Nice job, guys!»</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp2" >
                                    J
                                </div>
                            </div>
                            <div className="col">
                                <h5>James</h5>
                                <span>2 Weeks Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> Bitswits flexibility and willingness to work quickly despite all issues resulted in a successful product upon the first review. They produced good work, and the end product has positive reviews and no major crashes.</p>
                            </div>

                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp3" >
                                    S
                                </div>
                            </div>
                            <div className="col">
                                <h5>Sam Groombridge</h5>
                                <span>3 Weeks Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  Excellent work extremely fast delivered. I am very happy with the result and this is a contractor I highly recommend. I will be back for more custom work on behalf of my own clients. Thank you!</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp4">
                                    M
                                </div>
                            </div>
                            <div className="col">
                                <h5>Mark</h5>
                                <span>4 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> We built a react native app for both iOS and android. I enjoyed working on this react native project together. He provided reliable and fast work as well as helpful advice on how to structure the app, adjust libraries and fulfill various requirements. Communication and availability were generally good and prompt. Would work together in the future.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp5" >
                                    R
                                </div>
                            </div>
                            <div className="col">
                                <h5>Rao</h5>
                                <span>4 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  Fantastic work from Bitswits. They did the work to the exact specifications and gave me great suggestions as well. They are highly skilled developers and I highly recommend them.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp6" >
                                    P
                                </div>
                            </div>
                            <div className="col">
                                <h5>Paul Reece</h5>
                                <span>5 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> Hired Bitswits to build a very complex mobile app for Amazon sellers. They built the app from the ground up using React Native. They saw the project through until the end and were attentive to all my requests and suggestions. Very good work.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp7" >
                                    S
                                </div>
                            </div>
                            <div className="col">
                                <h5>Shoon</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  It has been a great overall experience working with the team at Bitswits. The quality of work is top notch and they put in their level best in helping us to launch the project within short time frame. Although there was a little issue with the full understanding on the requirements, it was quickly resolved. Will definitely consider working with them again.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp8" >
                                    E
                                </div>
                            </div>
                            <div className="col">
                                <h5>Eric Masters</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  I have been in the gaming industry for over a decade, and I have seen many companies come and go. However, this game development company has consistently stood out as a leader in the field. Their bitswits approach to game design, combined with their technical expertise and business acumen, has enabled them to create some of the most successful games in recent years. I have the utmost respect for their team and their work, and I highly recommend them to anyone looking for a professional and reliable game development partner.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp9" >
                                    A
                                </div>
                            </div>
                            <div className="col">
                                <h5>Adam</h5>
                                <span>5 Days Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> Well, I signed up to work with for a project and they really exceeded my expectations. The project was delivered on time, with no hiccups whatsoever. They are talented and professional game developers who get the job done without fail. I cannot recommend them enough!</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp10">
                                    O
                                </div>
                            </div>
                            <div className="col">
                                <h5>Oliver Bulcke</h5>
                                <span>5 Days Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> One of the favorite aspects of working with bitswits is the core competencies and thoroughness with which they executed the project. The partnership have meant the timely deployment. It has led us to a tremendous final product.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp11" >
                                    B
                                </div>
                            </div>
                            <div className="col">
                                <h5>Bernie</h5>
                                <span>3 Weeks Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  It was great to see the commitment, dedication & emotion as well from Bitswits. I was very impressed with the dedication to get the project over the line. I look forward to adding more features for the web & the app with Bitswits...</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp12" >
                                    C
                                </div>
                            </div>
                            <div className="col">
                                <h5>Craig</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> The team of Bitswits is very knowledgeable in Android development. I recently hired them for my Android project and they delivered me just what I wanted. I strongly recommend Bitswits for best Android development.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp13" >
                                    E
                                </div>
                            </div>
                            <div className="col">
                                <h5>Eric Davis</h5>
                                <span>6 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> I have dealt with 50+ Service providers on nearly 100 projects. Bitswits was with a doubt the most professional and knowledgeable provider that I have dealt with. He managed to give us answers in 5 minutes that 10+ other providers couldn’t give us in 5 weeks! What a breath of fresh air! Thank you very much Bitswits!!!</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp14" >
                                    S
                                </div>
                            </div>
                            <div className="col">
                                <h5>Stephen Kway</h5>
                                <span>3 Years Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  Bitswits work has successfully reached the beta version, receiving overwhelmingly positive feedback from initial users. Their communicative and transparent approach results in a seamless collaboration. On top of their positive attitude, their high level of technical expertise is impressive.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp15">
                                    J
                                </div>
                            </div>
                            <div className="col">
                                <h5>Jayde</h5>
                                <span>4 Months Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" />  We’ve worked with multiple software engineering firms on many internal enterprise applications throughout the years. There is a major difference with Bitswits, though. Their production quality is first rate, and their pricing is transparent. With other companies we’ve experienced poorly estimated work that ultimately results in additional costs. bitswits, on-the-other-hand, gives thorough estimates that reflect true final costs.</p>
                            </div>
                        </div><div className="childs">
                            <div className="col newpostimg">
                                <div className="avatarName iavp16">
                                    C
                                </div>
                            </div>
                            <div className="col">
                                <h5>Chris Mowry</h5>
                                <span>3 Weeks Ago</span>
                                <p><Image src={facebookstar} alt="google" width="110" height="20" /> Brad, provided excellent, professional, efficient and friendly service.</p>
                            </div>
                        </div></div>

                    <div className="footer">
                        <Image src={powerdmeta} alt="powered by Meta" width="200" height="37" title="powered by Meta" />
                    </div>
                </div>
            }
        </>
    )
}

export default SupersaleStiky
