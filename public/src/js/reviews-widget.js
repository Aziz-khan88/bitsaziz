$(".__reviewsWidget .__google").on("click",()=>{"none"===$(".__reviewsSidebar.__google").css("display")&&$(".__reviewsSidebar.__google").css("display","block")}),$(".__reviewsWidget .__facebook").on("click",()=>{"none"===$(".__reviewsSidebar.__facebook").css("display")&&$(".__reviewsSidebar.__facebook").css("display","block")}),$(".__reviewsSidebar .__close").on("click",()=>{"block"===$(".__reviewsSidebar.__google").css("display")&&$(".__reviewsSidebar.__google").css("display","none"),"block"===$(".__reviewsSidebar.__facebook").css("display")&&$(".__reviewsSidebar.__facebook").css("display","none")});const randomRgbColor=()=>"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")",googleReviews={async:!0,crossDomain:!0,url:"https://developers.cryscampus.com/api/review/google/all",method:"GET"};$.ajax(googleReviews).done(function(e){let o="";e.map((e,s)=>{o+=`<div class="__childs">
                    <div class="__col">
                        <div class="__avatarName" style="background-color: ${randomRgbColor()}">
                            ${e.name[0]}
                        </div>
                    </div>
                    <div class="__col">
                        <h5>${e.name}</h5>
                        <span>${e.date}</span>
                        <p><img src="https://${window.location.hostname}/src/media/google-star.svg" alt="google" width="110" height="20" /> ${e.message}</p>
                    </div>
                </div>`}),$(".__reviewsSidebar.__google .__body").append(o)});const facebookReviews={async:!0,crossDomain:!0,url:"https://developers.cryscampus.com/api/review/facebook/all",method:"GET"};$.ajax(facebookReviews).done(function(e){let o="";e.map((e,s)=>{o+=`<div class="__childs">
                    <div class="__col">
                        <div class="__avatarName" style="background-color: ${randomRgbColor()}">
                            ${e.name[0]}
                        </div>
                    </div>
                    <div class="__col">
                        <h5>${e.name}</h5>
                        <span>${e.date}</span>
                        <p><img src="https://${window.location.hostname}/src/media/facebook-star.svg" alt="facebook" width="110" height="20" /> ${e.message}</p>
                    </div>
                </div>`}),$(".__reviewsSidebar.__facebook .__body").append(o)});