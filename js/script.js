console.log('BookCentral App');

var books = [
  {
    title : 'THE GIRL OF INK & STAR',
    id  : 'B101',
    Author  : 'Kiran Millwood Hargrave',
    Rating : '<i class="fas fa-star"></i>',
    Price : 18.30,
    Genre : 'Fantasy',
    Language  : 'English',
    Pages   : 500,
    Published : '05-05-2016',
    Photo : 'images/F-theGirlofInkandStars,jpg',
    Summary : 'Forbidden to leave her island, Isabella Riosse dreams of the faraway lands her father once mapped. When her closest friend disappears into the island’s Forgotten Territories, she volunteers to guide the search. As a cartographer’s daughter, she’s equipped with elaborate ink maps and knowledge of the stars, and is eager to navigate the island’s forgotten heart'
  },

  {
    title : 'THE LABYRINTH',
    id  : 'B102',
    Author  : 'Filey Keating',
    Rating : '<i class="fas fa-star"></i>',
    Price : 18.30,
    Genre : 'Romance',
    Language  : 'English',
    Pages   : 650,
    Published : '01-01-2006',
    Photo : 'images/R-thelabyrinth.png',
    Summary : 'What happens when you wish for something terrible ... and your wish comes true? Young Sarah is about to find out. Left at home to mind her baby brother, Toby, she finds herself trying to comfort a screaming infant as a wild storm rages about the house. In a fit of temper, she wishes that the goblins would come and take the child away. Unfortunately, they do.'
  },

  {
    title : 'PERFUME',
    id  : 'B103',
    Author  : 'Lizzie Ostrom',
    Rating : '<i class="fas fa-star"></i>',
    Price : 15.00,
    Genre : 'Romance',
    Language  : 'English',
    Pages   : 384,
    Published : '22-10-2015',
    Photo : 'images/R-perfume.png',
    Summary : 'With brilliantly exuberant style, perfume expert Lizzie Ostrom dives into a world of fragrance, introducing us to signature scents; now-lost masterpieces; and potent perfumes from across the decades. She reveals the wild and wonderful launch campaigns; the visionaries behind these mysterious concoctions; and the loyal fans of these little bottles of delight, who sprayed them in abundance.'
  },

  {
    title : 'ROSEMARY\'S BABYE',
    id  : 'B104',
    Author  : 'Ira Levin',
    Rating : '<i class="fas fa-star"></i>',
    Price : 15.50,
    Genre : 'Romance',
    Language  : 'English',
    Pages   : 308,
    Published : '01-09-1997',
    Photo : 'images/R-rosemaryBaby.png',
    Summary : 'Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. But by the time Rosemary discovers the horrifying truth, it may be far too late!'
  },

  {
    title : 'A SPELL FOR CHAMELEON',
    id  : 'B105',
    Author  : 'Piers Anthony',
    Rating : '<i class="fas fa-star"></i>',
    Price : 20.50,
    Genre : 'Fantasy',
    Language  : 'English',
    Pages   : 308,
    Published : '01-09-1997',
    Photo : 'images/F-aSpellForChameleon.png',
    Summary : 'Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. But by the time Rosemary discovers the horrifying truth, it may be far too late!'
  },

  {
    title : 'BOOK OF IDEAS VOL 2',
    id  : 'B106',
    Author  : 'Radim Malinc',
    Rating : '<i class="fas fa-star"></i>',
    Price : 19.70,
    Genre : 'Design',
    Language  : 'English',
    Pages   : 255,
    Published : '01-09-2016',
    Photo : 'images/D-bookOfIdeas.jpg',
    Summary : 'Vol. 2 continues what designer and creative director Radim Malinic started in the first edition , offering yet more indispensable advice on making it in the creative industries . It discusses how to improve design work through more skiful use of language , and in doing so , how to stir the right reactions and present well-rounded creative projects with confidence . '
  },

  {
    title : 'THE ALCHEMIST',
    id  : 'B107',
    Author  : 'Paulo Coelho',
    Rating : '<i class="fas fa-star"></i>',
    Price : 13.00,
    Genre : 'Design',
    Language  : 'English',
    Pages   : 208,
    Published : '01-01-2010',
    Photo : 'images/D-theAlchemist.webp',
    Summary : 'Andalusian shepherd boy Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest.'
  },

  {
    title : 'THE WORLD OF ABSTRACT ART',
    id  : 'B108',
    Author  : 'Emily Robbins',
    Rating : '<i class="fas fa-star"></i>',
    Price : 18.30,
    Genre : 'Design',
    Language  : 'English',
    Pages   : 260,
    Published : '01-01-2010',
    Photo : 'images/D-theWorldOfArt.webp',
    Summary : 'Art desgin illustration book. '
  },

  {
    title : 'THE RAREST BIRD IN THE WORLD',
    id  : 'B109',
    Author  : 'Vernon R.L. Head',
    Rating : '<i class="fas fa-star"></i>',
    Price : 17.30,
    Genre : 'Design',
    Language  : 'English',
    Pages   : 243,
    Published : '01-01-2016',
    Photo : 'images/D-theRarestBird.png',
    Summary : 'In 1990, a group of Cambridge scientists arrived at the Plains of Nechisar in Ethiopia. On that expedition, they collected more than two dozen specimens, saw more than three hundred species of birds, and a plethora of rare butterflies, dragonflies, reptiles, mammals, and plants. '
  },

  {
    title : 'THE RED RISING',
    id  : 'B110',
    Author  : 'Pierce Brown',
    Rating : '<i class="fas fa-star"></i>',
    Price : 16.00,
    Genre : 'Horror',
    Language  : 'English',
    Pages   : 400,
    Published : '01-02-2014',
    Photo : 'images/H-redRising.png',
    Summary : 'Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, believing that he and his people are making the surface of Mars livable for future generations. Yet he toils willingly, trusting that his blood and sweat will one day result in a better world for his children. '
  },

  {
    title : 'THE TRAITOR\'S MARK',
    id  : 'B111',
    Author  : 'D. K. Wilson',
    Rating : '<i class="fas fa-star"></i>',
    Price : 16.00,
    Genre : 'Horror',
    Language  : 'English',
    Pages   : 400,
    Published : '07-12-2015',
    Photo : 'images/H-theCraitorsMark.png',
    Summary : 'Young London goldsmith Thomas Treviot is awaiting a design for a very important jewellery commission from Hans Holbein. When the design fails to turn up, Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared.  '
  },

  {
    title : 'WINTER OF HEAVEN',
    id  : 'B112',
    Author  : 'Harper Blaylock',
    Rating : '<i class="fas fa-star"></i>',
    Price : 20.70,
    Genre : 'Romance',
    Language  : 'English',
    Pages   : 450,
    Published : '07-12-2015',
    Photo : 'images/R-winterOfHeaven.png',
    Summary : 'eaven fans will fall in love with this original novel, featuring favorite characters from the highest-rated show on the WB network!  '
  }

];


// Carousel display on landing page and modal ==============================================

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


// carousel slide navigation next and previous slides
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


// carousel onclickevent
document.getElementById('openModal1').addEventListener('click',function(){
  openModal();
  currentSlide(1);
});

document.getElementById('openModal2').addEventListener('click',function(){
  openModal();
  currentSlide(2);
});

document.getElementById('openModal3').addEventListener('click',function(){
  openModal();
  currentSlide(3);
});

document.getElementById('openModal4').addEventListener('click',function(){
  openModal();
  currentSlide(4);
});

// document.getElementById('openModal5').addEventListener('click',function(){
//   openModal();
//   currentSlide(5);
// });


document.getElementById('closeModal').addEventListener('click',function(){
  closeModal();
});

document.getElementById('plusPrev').addEventListener('click',function(){
  plusSlides(-1);
});

document.getElementById('plusNext').addEventListener('click',function(){
  plusSlides(1);
});


// carousel slideshow function
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
