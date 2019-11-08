console.log('BookCentral App');

var books = [
  {
    title : 'THE GIRL OF INK & STAR',
    id  : 'B101',
    author  : 'Kiran Millwood Hargrave',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 18.30,
    genre : 'Fantasy',
    language  : 'English',
    pages   : 500,
    published : '05-05-2016',
    photo : 'images/F-theGirlofInkandStars,jpg',
    summary : 'Forbidden to leave her island, Isabella Riosse dreams of the faraway lands her father once mapped. When her closest friend disappears into the island’s Forgotten Territories, she volunteers to guide the search. As a cartographer’s daughter, she’s equipped with elaborate ink maps and knowledge of the stars, and is eager to navigate the island’s forgotten heart'
  },

  {
    title : 'THE LABYRINTH',
    id  : 'B102',
    author  : 'Filey Keating',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 18.30,
    genre : 'Romance',
    language  : 'English',
    pages   : 650,
    published : '01-01-2006',
    photo : 'images/R-thelabyrinth.png',
    summary : 'What happens when you wish for something terrible ... and your wish comes true? Young Sarah is about to find out. Left at home to mind her baby brother, Toby, she finds herself trying to comfort a screaming infant as a wild storm rages about the house. In a fit of temper, she wishes that the goblins would come and take the child away. Unfortunately, they do.'
  },

  {
    title : 'PERFUME',
    id  : 'B103',
    author  : 'Lizzie Ostrom',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 15.00,
    genre : 'Romance',
    language  : 'English',
    pages   : 384,
    published : '22-10-2015',
    photo : 'images/R-perfume.png',
    summary : 'With brilliantly exuberant style, perfume expert Lizzie Ostrom dives into a world of fragrance, introducing us to signature scents; now-lost masterpieces; and potent perfumes from across the decades. She reveals the wild and wonderful launch campaigns; the visionaries behind these mysterious concoctions; and the loyal fans of these little bottles of delight, who sprayed them in abundance.'
  },

  {
    title : 'ROSEMARY\'S BABYE',
    id  : 'B104',
    author  : 'Ira Levin',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 15.50,
    genre : 'Romance',
    language  : 'English',
    pages   : 308,
    published : '01-09-1997',
    photo : 'images/R-rosemaryBaby.png',
    summary : 'Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. But by the time Rosemary discovers the horrifying truth, it may be far too late!'
  },

  {
    title : 'A SPELL FOR CHAMELEON',
    id  : 'B105',
    author  : 'Piers Anthony',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 20.50,
    genre : 'Fantasy',
    language  : 'English',
    pages   : 308,
    published : '01-09-1997',
    photo : 'images/F-aSpellForChameleon.png',
    summary : 'Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. But by the time Rosemary discovers the horrifying truth, it may be far too late!'
  },

  {
    title : 'BOOK OF IDEAS VOL 2',
    id  : 'B106',
    author  : 'Radim Malinc',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></i>',
    price : 19.70,
    genre : 'Design',
    language  : 'English',
    pages   : 255,
    published : '01-09-2016',
    photo : 'images/D-bookOfIdeas.jpg',
    summary : 'Vol. 2 continues what designer and creative director Radim Malinic started in the first edition , offering yet more indispensable advice on making it in the creative industries . It discusses how to improve design work through more skiful use of language , and in doing so , how to stir the right reactions and present well-rounded creative projects with confidence . '
  },

  {
    title : 'THE ALCHEMIST',
    id  : 'B107',
    author  : 'Paulo Coelho',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i></i>',
    price : 13.00,
    genre : 'Design',
    language  : 'English',
    pages   : 208,
    published : '01-01-2010',
    photo : 'images/D-theAlchemist.webp',
    summary : 'Andalusian shepherd boy Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest.'
  },

  {
    title : 'THE WORLD OF ABSTRACT ART',
    id  : 'B108',
    author  : 'Emily Robbins',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i></i>',
    price : 18.30,
    genre : 'Design',
    language  : 'English',
    pages   : 260,
    published : '01-01-2010',
    photo : 'images/D-theWorldOfArt.webp',
    summary : 'Art desgin illustration book. '
  },

  {
    title : 'THE RAREST BIRD IN THE WORLD',
    id  : 'B109',
    author  : 'Vernon R.L. Head',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i></i>',
    price : 17.30,
    genre : 'Design',
    language  : 'English',
    pages   : 243,
    published : '01-01-2016',
    photo : 'images/D-theRarestBird.png',
    summary : 'In 1990, a group of Cambridge scientists arrived at the Plains of Nechisar in Ethiopia. On that expedition, they collected more than two dozen specimens, saw more than three hundred species of birds, and a plethora of rare butterflies, dragonflies, reptiles, mammals, and plants. '
  },

  {
    title : 'THE RED RISING',
    id  : 'B110',
    author  : 'Pierce Brown',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i><i class="fas fa-star"></i></i>',
    price : 16.00,
    genre : 'Horror',
    language  : 'English',
    pages   : 400,
    published : '01-02-2014',
    photo : 'images/H-redRising.png',
    summary : 'Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, believing that he and his people are making the surface of Mars livable for future generations. Yet he toils willingly, trusting that his blood and sweat will one day result in a better world for his children. '
  },

  {
    title : 'THE TRAITOR\'S MARK',
    id  : 'B111',
    author  : 'D. K. Wilson',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i></i>',
    price : 16.00,
    genre : 'Horror',
    language  : 'English',
    pages   : 400,
    published : '07-12-2015',
    photo : 'images/H-theCraitorsMark.png',
    summary : 'Young London goldsmith Thomas Treviot is awaiting a design for a very important jewellery commission from Hans Holbein. When the design fails to turn up, Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared.  '
  },

  {
    title : 'WINTER OF HEAVEN',
    id  : 'B112',
    author  : 'Harper Blaylock',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i><i class="fas fa-star"></i></i>',
    price : 20.70,
    genre : 'Romance',
    language  : 'English',
    pages   : 450,
    published : '07-12-2015',
    photo : 'images/R-winterOfHeaven.png',
    summary : 'eaven fans will fall in love with this original novel, featuring favorite characters from the highest-rated show on the WB network!  '
  },

  {
    title : 'GONZA GIRL',
    id  : 'B113',
    author  : 'Cheryl Della Pietra',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 19.70,
    genre : 'Romance',
    language  : 'English',
    pages   : 430,
    published : '07-12-2015',
    photo : 'images/N-goneGirl.png',
    summary : 'eaven fans will fall in love with this original novel, featuring favorite characters from the highest-rated show on the WB network!  '
  }

];


// Search
document.getElementById('searchTitle').addEventListener('click', function(){
  document.getElementById('bookResult').innerHTML = '';

  var userInput = (document.getElementById('inputTitle').value).toUpperCase();
  console.log(userInput);

  for (var i=0; i<books.length; i++){
    if (books[i].title === userInput){
      document.getElementById('bookResult').innerHTML
      += '</br><div class="col-4 text-center">'
      + '<img class="imgSize" src=" ' + books[i].photo + ' " alt="Books"/>'
      + '</br><h5 class="text-center">' + books[i].title + ' </h5>'
      + '<p class="text-warning text-center">' + books[i].rating + '</p>'
      + '</div>';
    }

  }

    if (books.includes(userInput) === false){
      document.getElementById('bookResult').innerHTML += '</br> Sorry, ' + userInput + ' is not found.'
    }
     document.getElementById('inputTitle').value = '';




});
