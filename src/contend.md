text color: color: #6a7695;
pipetiga võtab #405170
#293b5f #293b5f
Sisu font: Open Sans 16px
Pealkirjade font: Raleway
Roheline värv: #17b978
Hall kastitaustavärv: #f5f4fb
Raamatukaante suurus on 255x330px
Font size 16, line-height 1.8
H2 50px, 700
30px lai ja 1 px
kastide osa on 900px lai, sisukorra osa 300px
Services osa ikoonideks on flaticon-user-experience, flaticon-network, flaticon-innovation

/\*
ei sa aikooni tha anii kirjutada ringi nagu tahtisn läheb halli kasti tah apeitu, mõtle edasi kuida skasutada ja lihtsalt lisa hetkel suvaline ring taha

.contact-img-box {
position: relative;
background-color: #f5f4fb;
padding: 9.6rem 4.6rem;
column-gap: 10px;
// margin-bottom: 9.6rem;
}

// Äteeme pseudoelemendi ringi jaoks
.contact-img-box::before {
content: ""; /_give content whatever for appearance_/
display: block; /_ display for give a shape_/
width: 60%;
/_60% of parent width_/
padding-bottom: 60%; /_ padding trikk height: 60%, too tagasi alla _/
position: absolute;
transform: translatey(-50%);
border-radius: 50%;
background-color: #17b978;

z-index: -1;
}
\*/

# flaticon grediiti tahab

<a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Pixel perfect - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a>

# Kasuta tulevikus lorem häkke näited allpool:

dl>(dt>{item #$}^dd>lorem)
.module\*3>(h3>lorem5^p>lorem20)

//terve lk tegemine
header.main-header>h1>lorem3^^.page-wrap>
(main>article*3>h2>lorem10^p*3>lorem)+
(aside>.module\*3>h3>lorem4^lorem15)

# nuppude puhul fookus alamale

.dropdown {
opacity: 0;
visibility: hidden;

button:focus-within .dropdown {
opacity: 1;
visibility: visible;
}

# nav riba

Logo / Home/About/Chapter/My Books Author Contact

## Clue Of The Wooden Cottage

Best SEller Book OF THe Week

### Blac and whithe logos

## About The Book

### Fun facts

## What's Inside The Book

- Title page

## Services

Service

## My Other Books

Projects

## Franclin Henderson

Know more About The Autor

## Contact Me

### Additional links

- Navigation 6 + logo
  laenatud juurde stiki nav.js
- Hero
  pilt nupp tekst
- Featured in 4 logo
- Features
- stats
  4 plokk
- How it works
- Inside The Book
  veerand nimekirjale kolmveerand kirjeldusele 8 tk
- Services
  3 plokk
- Gallery
  4x2 plokk
- CTA Author
  pool pilti pool tekste
- Contacts
  4 plokk
- Footer
  4 plokk

<!-- ### About The Book -->

Ajutine vigadeparandus

        <div class="address-col">
          <h2 class="footer-heading">Have a Questions?</h2>
          <ul>
            <li class="contacts">
              <address>
                <p class="address">
                <img class="social-icon"
                src="../src/img/icons/pin.png"
                class="hero-img"
                alt="Map pin on green circle"/><span>623 Harrison St., 2nd Floor, San Francisco, CA 94107</span></p>
              </address>
            </li>
            <li class="contacts">
              <div>
                <p>
                <img class="social-icon"
                src="../src/img/icons/phone-call.png"
                class="hero-img"
                alt="Phone handle on green circle"
                />
                  <a class="footer-link" href="tel:415-201-6370"><span>415-201-6370</span></a>
              </div>
            </li>
            <li class="contacts">
              <div>
                <img class="social-icon"
                src="../src/img/icons/paper-plane.png"
                class="hero-img"
                alt="Plane on green circle"
                /><a class="footer-link" href="mailto:hello@omnifood.com"
                ><span>info@yourdomain.com</span></a></p>
              </div>
            </li>
          </ul>
        </div>
