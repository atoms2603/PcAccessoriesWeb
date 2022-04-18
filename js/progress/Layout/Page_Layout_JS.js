function load_layout(){
    //HEADER
    //Tag NAV MAIN
    var tagHeaderMain = document.getElementById('header');
    var tagNav = document.createElement('nav');
    tagNav.className="navbar navbar-expand-lg custom_nav-container";

    tagHeaderMain.appendChild(tagNav);
    
    //LOGO
    var logoLinkA = document.createElement('a');
    logoLinkA.className="navbar-brand";
    logoLinkA.href="index.html";

    var nameStore = document.createElement('span');
    nameStore.innerText="HHK Store";

    logoLinkA.appendChild(nameStore);
    tagNav.appendChild(logoLinkA);

    //BUTTON
    var buttonLogo = document.createElement('button');
    buttonLogo.className="navbar-toggler";
    buttonLogo.type="button";
    buttonLogo.setAttribute('data-toggle','collapse');
    buttonLogo.setAttribute('data-target','#navbarSupportedContent');
    buttonLogo.setAttribute('aria-controls','navbarSupportedContent');
    buttonLogo.setAttribute('aria-expanded','false');
    buttonLogo.setAttribute('aria-label','Toggle navigation');
    var spanBlank = document.createElement('span');
    spanBlank.className=" ";
    buttonLogo.appendChild(spanBlank);
    tagNav.appendChild(buttonLogo);

    //DIV MENU AREA
    var divMainMenu = document.createElement('div');
    divMainMenu.className="collapse navbar-collapse";
    divMainMenu.id="navbarSupportedContent";
    tagNav.appendChild(divMainMenu);

    //UL - LI
    var tagUlMenuCommon = document.createElement('ul');
    tagUlMenuCommon.className="navbar-nav";
    divMainMenu.appendChild(tagUlMenuCommon);

    //LI - a

    //HOME
    var tagLiHome = document.createElement('li');
    tagLiHome.className="nav-item";
    tagUlMenuCommon.appendChild(tagLiHome);
    
    var linkAHome = document.createElement('a');
    linkAHome.className="nav-link";
    linkAHome.href="index.html";
    linkAHome.innerText="Home";
    tagLiHome.appendChild(linkAHome);

    //SHOP
    var tagLiShop = document.createElement('li');
    tagLiShop.className="nav-item";
    tagUlMenuCommon.appendChild(tagLiShop);
    
    var linkAShop = document.createElement('a');
    linkAShop.className="nav-link";
    linkAShop.href="shop.html";
    linkAShop.innerText="Shop";
    tagLiShop.appendChild(linkAShop);

    //Why us
    var tagLiWhyus = document.createElement('li');
    tagLiWhyus.className="nav-item";
    tagUlMenuCommon.appendChild(tagLiWhyus);
    
    var linkAWhyus = document.createElement('a');
    linkAWhyus.className="nav-link";
    linkAWhyus.href="why.html";
    linkAWhyus.innerText="Why us";
    tagLiWhyus.appendChild(linkAWhyus);

    //Testimonial
    var tagLiTestimonial = document.createElement('li');
    tagLiTestimonial.className="nav-item";
    tagUlMenuCommon.appendChild(tagLiTestimonial);
    
    var linkATestimonial = document.createElement('a');
    linkATestimonial.className="nav-link";
    linkATestimonial.href="testimonial.html";
    linkATestimonial.innerText="Testimonial";
    tagLiTestimonial.appendChild(linkATestimonial);

    //Contact Us
    var tagLiContac = document.createElement('li');
    tagLiContac.className="nav-item";
    tagUlMenuCommon.appendChild(tagLiContac);
    
    var linkAContact = document.createElement('a');
    linkAContact.className="nav-link";
    linkAContact.href="contact.html";
    linkAContact.innerText="Contact Us";
    tagLiContac.appendChild(linkAContact);

    //Div child USER AREA
    var divUser = document.createElement('div');
    divUser.className="user_option";
    divMainMenu.appendChild(divUser);

    //LOGIN
    var linkALogin = document.createElement('a');
    linkALogin.href="login.html";
    divUser.appendChild(linkALogin);

    var iconLogin = document.createElement('i');
    iconLogin.className="fa fa-user";
    iconLogin.setAttribute('aria-hidden','true');
    linkALogin.appendChild(iconLogin);

    var textLogin = document.createElement('span');
    textLogin.innerText="Login";
    linkALogin.appendChild(textLogin);

    //BAG SHOPPING
    var linkABag= document.createElement('a');
    linkABag.href="#";
    divUser.appendChild(linkABag);
    var iconBag= document.createElement('i');
    iconBag.className="fa fa-shopping-bag";
    iconBag.setAttribute('aria-hidden','true');
    linkABag.appendChild(iconBag);

    //form search
    var tagFormSearch = document.createElement('form');
    tagFormSearch.className="form-inline";
    divUser.appendChild(tagFormSearch);

    var buttonSearch = document.createElement('button');
    buttonSearch.className="btn nav_search-btn";
    buttonSearch.type="submit";
    tagFormSearch.appendChild(buttonSearch);
    var iconSearch = document.createElement('i');
    iconSearch.className="fa fa-search";
    iconSearch.setAttribute('aria-hidden','true');
    buttonSearch.appendChild(iconSearch);

}
