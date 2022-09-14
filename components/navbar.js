function navbar(){
    return `  <section id="container-footer">
    <div id="socialist-footer">
        <ul>
            <li ><a style="color: #5a5a5a" href="https://www.facebook.com/thehindu"><i class="fa-brands fa-facebook-f" style="color: #5a5a5a"></i></a></li>
            <li><a href="https://twitter.com/The_Hindu"><i class="fa-brands fa-twitter" style="color: #5a5a5a"></i></a></li>
            <li><a href="https://www.linkedin.com/school/the-hindu/"><i class="fa-brands fa-linkedin-in" style="color: #5a5a5a"></i></a></li>
            <li><a href="https://www.instagram.com/the_hindu/?ref=badge"><i class="fa-brands fa-instagram" style="color: #5a5a5a"></i></a></li>
            <li><a href="https://www.thehindu.com/newsletter-subscription/"><i class="fa-solid fa-envelope" style="color: #5a5a5a"></i></a></li>
            <li><a href="https://www.thehindu.com/social/"><i class="fa-solid fa-mobile-screen"></i style="color: #5a5a5a"></a></li>
            <li><a href="https://epaper.thehindu.com/?utm_source=thehindu&utm_medium=header&utm_campaign=landingpage"></a>e-Paper</li>
        </ul>
    </div>
    <div id="footer-logo">
        <a href="" ><img src="" alt=""></a>
    </div>
    <div id="search-box_footer">
            <input id="query" type="text" placeholder="Search here...">
            <button  <i class="fa-solid fa-magnifying-glass" ></i></button>
            <!-- <button <i class="fa-solid fa-magnifying-glass"></i></i></button> --> 
    </div>
</section>
    <div id="imglogo">
        <a href=""><img src="https://www.thehindu.com/theme/images/th-online/logo.png" alt=""></a>
        <div id="logotext">
            <div class="logotext1">LATEST NEWS</div>
            <div class="logotext2">SUNDAY JUNE 19,2022</div>
            <div class="logotext3">E-PAPER</div>
        </div>
    </div>

    <div id="navbar-bottom">
        <div id="navbar1">
            <!-- Add menu bar code -->
        </div>
        <div id="navbar2">
            <ul>
                <li>
                    <a href="Home.html">Todays Paper</a>
                </li>
                <li>
                    <a href="details.html">News</a>
                </li>
                <li>
                    <a href="#">Opinion</a>
                </li>
                <li>
                    <a href="searchFdetails.html">Business</a>
                </li>
                <li>
                    <a href="searchFdetails.html">Entertainment</a>
                </li>
                <li>
                    <a href="#">Crossword+</a>
                </li>
                <li>
                    <a href="searchFdetails.html">Scinece</a>
                </li>
            </ul>
        </div>
        <div id="navbar4">
            <div class="navbutn">
                <button class="navbutn1" >GET TRIAL</button>
            </div>
            <div class="navbutn">
                <a href="subsrcibe.html" ><button class="navbutn2">SUBSCRIBE NOW</button></a>
            </div>
            <div class="navbutn">
                <a href="Login.html" ><button class="navbutn3" id="login" >LOG IN</button></a>
            </div>
        </div>
    </div>


    <!-- -----------------------M_E_N_U-------B_A_R------------------------------------ -->

    <div id="menu-button">
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
    </div>
    <div id="myNav" class="overlay">
            <div id="popup-menu" class="overlay-content">
                <div id="top-menu">
                    <div id="close_this">
                        <!-- add homepage in both link -->
                        <a href="javascript:void(0)" onclick="closeNav()" style="font-size: 50px;text-decoration: none;">&times;</a>
                        <a href="javascript:void(0)" onclick="closeNav()">CLOSE THIS MENU</a>
                    </div>
                    <div id="trending">
                        <ul>
                            <!-- connect trending news page here -->
                            <li style="color: #f8d01c;text-decoration:none;">TRENDING TODAY</li>
                            <li>CHENNAI</li>
                            <li>HYDERABAD</li>
                            <li>BENGALURU</li>
                            <li>BENGALURU</li>
                            <li>VIDEOS</li>
                            <li>ENTERTAINMENT</li>
                        </ul>
                    </div>
                </div>
                <div class="details-menu clear">
                        <ul id="coloumn1">
                            <li>
                                <a href="#">Subscription</a>
                            </li>
                            <li>
                                <a href="#">Latest News</a>
                            </li>
                            <li>
                                <a href="#">Today's Paper</a>
                            </li>
                            <li>
                                <a href="#">epaper</a>
                            </li>
                            <li id="housing_img">
                                <a href="https://www.thehindu.com/housing-real-estate-india/">
                                    <img src="https://www.thehindu.com/theme/images/th-online/housing.png" alt="Housing">
                                </a>
                            </li>
                            <li>
                                <a href="#">Coupons</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">NATIONAL</a>
                                    </li>
                                    <li>
                                        <a href="#">INTERNATIONAL</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Coronavirus</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">VIDEO & PODCAST</a>
                                    </li>
                                    <li>
                                        <a href="#">EXPERT SPEAK</a>
                                    </li>
                                    <li>
                                        <a href="#">ALL REPORTS</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">States</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">ANDHRA PRADESH</a>
                                    </li>
                                    <li>
                                        <a href="#">KARNATAKA</a>
                                    </li>
                                    <li>
                                        <a href="#">KERALA</a>
                                    </li>
                                    <li>
                                        <a href="#">TAMIL NADU</a>
                                    </li>
                                    <li>
                                        <a href="#">TELANGANA</a>
                                    </li>
                                    <li>
                                        <a href="#">OTHER STATES</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Business</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">AGRI-BUSINESS</a>
                                    </li>
                                    <li>
                                        <a href="#">INDUSTRY</a>
                                    </li>
                                    <li>
                                        <a href="#">ECONOMY</a>
                                    </li>
                                    <li>
                                        <a href="#">MARKETS</a>
                                    </li>
                                    <li>
                                        <a href="#">BUDGET 2022</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Real Estate</a>
                            </li>
                        </ul>
                        <ul id="coloumn1">
                            <li>
                                <a href="#">Crossword+ "Free <br>Games"</a>
                            </li>
                            <li>
                                <a href="#">Cities</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">BENGALURU</a>
                                    </li>
                                    <li>
                                        <a href="#">CHENNAI</a>
                                    </li>
                                    <li>
                                        <a href="#">COIMBATORE</a>
                                    </li>
                                    <li>
                                        <a href="#">DELHI</a>
                                    </li>
                                    <li>
                                        <a href="#">HYDERABAD</a>
                                    </li>
                                    <li>
                                        <a href="#">KOCHI</a>
                                    </li>
                                    <li>
                                        <a href="#">KOLKATA</a>
                                    </li>
                                    <li>
                                        <a href="#">MUMBAI</a>
                                    </li>
                                    <li>
                                        <a href="#">KOZHIKODE</a>
                                    </li>
                                    <li>
                                        <a href="#">MADURAI</a>
                                    </li>
                                    <li>
                                        <a href="#">MANGALURU</a>
                                    </li>
                                    <li>
                                        <a href="#">PUDUCHERRY</a>
                                    </li>
                                    <li>
                                        <a href="#">THIRUVANANTHAPURAM</a>
                                    </li>
                                    <li>
                                        <a href="#">TIRUCHIRAPALLI</a>
                                    </li>
                                    <li>
                                        <a href="#">VIJAYAWADA</a>
                                    </li>
                                    <li>
                                        <a href="#">VISAKHAPATNAM</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Elections</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">GOA</a>
                                    </li>
                                    <li>
                                        <a href="#">MANIPUR</a>
                                    </li>
                                    <li>
                                        <a href="#">PUNJAB</a>
                                    </li>
                                    <li>
                                        <a href="#">UTTAR PRADESH</a>
                                    </li>
                                    <li>
                                        <a href="#">UTTARAKHAND</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul id="coloumn1">
                            <li>
                                <a href="#">Opinion</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">EDITORIAL</a>
                                    </li>
                                    <li>
                                        <a href="#">LEAD</a>
                                    </li>
                                    <li>
                                        <a href="#">COMMENT</a>
                                    </li>
                                    <li>
                                        <a href="#">COLUMNS</a>
                                    </li>
                                    <li>
                                        <a href="#">INTERVIEW</a>
                                    </li>
                                    <li>
                                        <a href="#">CARTOON</a>
                                    </li>
                                    <li>
                                        <a href="#">OPEN PAGE</a>
                                    </li>
                                    <li>
                                        <a href="#">READERS' EDITOR</a>
                                    </li>
                                    <li>
                                        <a href="#">LETTERS</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Sport</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">ATHLETICS</a>
                                    </li>
                                    <li>
                                        <a href="#">CRICKET</a>
                                    </li>
                                    <li>
                                        <a href="#">FOOTBALL</a>
                                    </li>
                                    <li>
                                        <a href="#">HOCKEY</a>
                                    </li>
                                    <li>
                                        <a href="#">MOTORSPORT</a>
                                    </li>
                                    <li>
                                        <a href="#">OTHER SPORTS</a>
                                    </li>
                                    <li>
                                        <a href="#">RACES</a>
                                    </li>
                                    <li>
                                        <a href="#">TENNIS</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul id="coloumn1">
                            <li>
                                <a href="#">Entertainment</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">ART</a>
                                    </li>
                                    <li>
                                        <a href="#">DANCE</a>
                                    </li>
                                    <li>
                                        <a href="#">MOVIES</a>
                                    </li>
                                    <li>
                                        <a href="#">MUSIC</a>
                                    </li>
                                    <li>
                                        <a href="#">REVIEWS</a>
                                    </li>
                                    <li>
                                        <a href="#">THEATRE</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Society</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">FAITH</a>
                                    </li>
                                    <li>
                                        <a href="#">HISTORY & CULTURE</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Books</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">REVIEWS</a>
                                    </li>
                                    <li>
                                        <a href="#">AUTHORS</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Children</a>
                            </li>
                        </ul>
                        <ul id="coloumn1">
                            <li>
                                <a href="#">Life & Style</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">FASHION</a>
                                    </li>
                                    <li>
                                        <a href="#">FITNESS</a>
                                    </li>
                                    <li>
                                        <a href="#">FOOD</a>
                                    </li>
                                    <li>
                                        <a href="#">MOTORING</a>
                                    </li>
                                    <li>
                                        <a href="#">TRAVEL</a>
                                    </li>
                                    <li>
                                        <a href="#">HOMES AND GARDENS</a>
                                    </li>
                                    <li>
                                        <a href="#">LUXURY</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Technology</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">GADGETS</a>
                                    </li>
                                    <li>
                                        <a href="#">INTERNET</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Sci-Tech</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">SCIENCE</a>
                                    </li>
                                    <li>
                                        <a href="#">TECHNOLOGY</a>
                                    </li>
                                    <li>
                                        <a href="#">HEALTH</a>
                                    </li>
                                    <li>
                                        <a href="#">AGRICULTURE</a>
                                    </li>
                                    <li>
                                        <a href="#">ENVIRONMENT</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul id="coloumn1">
                            <li>
                                <a href="#">Education</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">CAREERS</a>
                                    </li>
                                    <li>
                                        <a href="#">COLLEGES</a>
                                    </li>
                                    <li>
                                        <a href="#">SCHOOLS</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Multimedia</a>
                                <ul class="sub-menu2">
                                    <li>
                                        <a href="#">PHOTOS</a>
                                    </li>
                                    <li>
                                        <a href="#">VIDEOS</a>
                                    </li>
                                    <li>
                                        <a href="#">PODCAST</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Data</a>
                            </li>
                            <li>
                                <a href="#">Specials</a>
                            </li>
                            <li>
                                <a href="#">Resources</a>
                            </li>
                            <li>
                                <a href="#">Tags</a>
                            </li>
                            <li>
                                <a href="#">Theatre - Fest</a>
                            </li>
                            <li>
                                <a href="#">November Fest</a>
                            </li>
                            <li>
                                <a href="#">Lit for Life</a>
                            </li>
                            <li>
                                <a href="#">Tamil Nadu Smiling</a>
                            </li>
                            <li>
                                <a href="#">Newsletter</a>
                            </li>
                        </ul>
                </div>
                <div id="bottom-bar">
                    <section id="bottom-section">
                        <div id="section-div1">
                            <ul>
                                <li>ARCHIVE</li>
                                <li>CLASSIFIEDS</li>
                                <li>EBOOKS</li>
                                <li>SUBSCRIBE</li>
                                <li>SOCIAL</li>
                                <li>ABOUT US</li>
                            </ul>
                        </div>
                        <div id="section-div2">
                            <ul>
                                <li>CONNECT WITH US</li>
                                <li><a style="text-decoration: none;" href="https://www.facebook.com/thehindu">
                                    <i style="background: #133b5a;" class="fa-brands fa-facebook-f"></i>
                                </a></li>
                                <li><a style="text-decoration: none;background: #133b5a;" href="https://twitter.com/The_Hindu">
                                    <i style="background: #133b5a;" class="fa-brands fa-twitter"></i>
                                </a></li>
                                <li><a style="text-decoration: none;background: #133b5a;" href="https://www.linkedin.com/school/the-hindu/">
                                    <i style="background: #133b5a;" class="fa-brands fa-linkedin-in"></i>
                                </a></li>
                                <li><a style="text-decoration: none;background: #133b5a;" href="https://www.instagram.com/the_hindu/?ref=badge&__coig_restricted=1">
                                    <i style="background: #133b5a;" class="fa-brands fa-instagram"></i>
                                </a></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div id="close_this-end">
                    <!-- add homepage in both link -->
                    <div id="close_this">
                        <!-- add homepage in both link -->
                        <a href="javascript:void(0)" onclick="closeNav()" style="font-size: 50px;text-decoration: none;">&times;</a>
                        <a href="javascript:void(0)" onclick="closeNav()">CLOSE THIS MENU</a>
                    </div>
                </div>
            </div>
    </div>`
 }

 export  {navbar}