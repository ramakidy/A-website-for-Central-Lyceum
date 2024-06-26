HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Central Lyceum Montessori</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Central Lyceum Montessori</h1>
        
<div class="button-container">
  <button class="toggle-btn" data-target="#overview-content" style="background-color: teal;color:white;">Overview</button>
  <button class="toggle-btn" data-target="#programs-content" style="background-color: teal;color:white">Programs</button>
  <button class="toggle-btn" data-target="#admissions-content" style="background-color: teal;color:white;">Admissions</button>
  <button class="toggle-btn" data-target="#contacts-content" style="background-color: teal;color:white">Contacts</button>
</div>

<!-- Content container -->
<div class="content-container">
  <div id="overview-content" class="content">Our aim is to assist parents raise all round
  children who are not only academically discipline but have excellent life skills,
  moral displine and imbibed in the world of God.
  We provide high quality Montessori based preschool education coupled with sound christian nurturing 
  giving your child a holistic development in a safe  and clean environment.</div>
  <div id="programs-content" class="content">We provide day care for children within 3 months to 11 years.</div>
  <div id="admissions-content" class="content">Admissions are in progress for children within 3 months to 11 years 
  at the front desk(Main office) </div>
  <div id="contacts-content" class="content"><strong><br>North Legon, Abogba opp. IGCE TEMPLE</br>
    <br>Telehone:0505914574</br>
  email:prayertemplelyceum@gmail.com
  </strong></div>
</div>


    </header>
    <main>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLScyc-emhU7NJ5N0QCCpFDxGgjIFfFgOq0R0ykHLCrTtL5GB2w/viewform?usp=sf_link" target="_blank">
  <button style="background-color: teal; color:white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Make Enquiry</button>
</a>
      <div class="rating">
  <span class="star" data-value="1">★</span>
  <span class="star" data-value="2">★</span>
  <span class="star" data-value="3">★</span>
  <span class="star" data-value="4">★</span>
  <span class="star" data-value="5">★</span>
</div>
      <div>
       <iframe src="https://1drv.ms/v/s!Ag4jYQv6e-5gmF9zZGYDUcun12VZ?e=blPoaZ"
         
        width="100%" height="400" frameborder="0"  autoplay></iframe>

      </div>
      
    </main>
    <footer>
        <p>&copy; 2024 Central Lyceum Montessori. All rights reserved.</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>

CSS
body {
    background-image: url('https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/441498463_431416479632672_4025322094978416020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEeJVa-idvssPQa_xZ2Xd1ycI9e_hOrhJVwj17-E6uElVBZo29Sv9xGKzdgCZ4Hpe20_9eE5LatC_Ii-lkG3oC6&_nc_ohc=o_Io-LfYgl4Q7kNvgFQngPj&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AYB9ARrkMhNyH0jQ3DFoURfw-FxKXC68I4uCABt6280Gnw&oe=667F23C6');
    font-family: Arial, sans-serif;
    background-color: lightblue;
    margin: 0;
    padding: 0;
}

header {
   
    color: White;
    padding: 1em 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 1em;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

.intro {
    background-image: url('school-banner.jpg');
    background-size: cover;
    color: white;
    padding: 2em;
    text-align: center;
}

.intro h2 {
    font-size: 2em;
}

.intro p {
    font-size: 1.2em;
}

.hidden {
    display: none;
}

footer {
    background-color: #4CA;
    color: white;
    text-align;left;
    padding: 1em 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}

.rating {
  display: inline-block;
}

.star {
  cursor: pointer;
}

.star:hover {
  color: yellow;
}

.button-container {
  display: flex;
  
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}

.content-container {
  margin-top: 5px; /* Add margin to separate from buttons */
}


.content {
  display: none;
  padding: 20px;
  background-color:teal;
  color: white;
  font-size:14px;
  border-top: 0;
  box-sizing: border-box;
  width: 100%; /* Make the content full width */
}

.show {
  display: block;
}

button {
  display: block; /* Make the button a block element */
  margin: 0 auto; /* Center align the button */
  
}

Javascript
const buttons = document.querySelectorAll('.toggle-btn');

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', () => {
    const contentId = button.getAttribute('data-target');
    const content = document.querySelector(contentId);
    content.classList.toggle('show');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
}
const rating = document.querySelector('.rating');
const stars = rating.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    const value = index + 1;
    // Send the rating value to your server or database here
    console.log(`Rated ${value} stars`);
  });
});




