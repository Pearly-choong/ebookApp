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
    photo : 'images/F-theGirlofInkandStars.jpg',
    readers : 130, //avg total number of people reading this books
    summary : 'Forbidden to leave her island, Isabella Riosse dreams of the faraway lands her father once mapped. When her closest friend disappears into the island’s Forgotten Territories, she volunteers to guide the search.',
    readmore  : ' As a cartographer’s daughter, she’s equipped with elaborate ink maps and knowledge of the stars, and is eager to navigate the island’s forgotten heart'
  },

  {
    title : 'THE LABYRINTH',
    id  : 'B102',
    author  : 'Filey Keating',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 18.30,
    genre : 'Fantasy',
    language  : 'English',
    pages   : 650,
    published : '01-01-2006',
    photo : 'images/R-thelabyrinth.png',
    readers : 74, //avg total number of people reading this books
    summary : 'What happens when you wish for something terrible ... and your wish comes true? Young Sarah is about to find out. Left at home to mind her baby brother, Toby, she finds herself trying to comfort a screaming infant as a wild storm rages about the house. ',
    readmore  : ' In a fit of temper, she wishes that the goblins would come and take the child away. Unfortunately, they do.'
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
    readers : 45, //avg total number of people reading this books
    summary : 'With brilliantly exuberant style, perfume expert Lizzie Ostrom dives into a world of fragrance, introducing us to signature scents; now-lost masterpieces; and potent perfumes from across the decades. ',
    readmore  : ' She reveals the wild and wonderful launch campaigns; the visionaries behind these mysterious concoctions; and the loyal fans of these little bottles of delight, who sprayed them in abundance.'
  },

  {
    title : 'ROSEMARY\'S BABY',
    id  : 'B104',
    author  : 'Ira Levin',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 15.50,
    genre : 'Romance',
    language  : 'English',
    pages   : 308,
    published : '01-09-1997',
    photo : 'images/R-rosemaryBaby.png',
    readers : 90, //avg total number of people reading this books
    summary : 'Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. ',
    readmore  : 'But by the time Rosemary discovers the horrifying truth, it may be far too late!'
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
    readers : 97, //avg total number of people reading this books
    summary : 'Rosemary and Guy Woodhouse, an ordinary young couple, settle into a New York City apartment, unaware that the elderly neighbors and their bizarre group of friends have taken a disturbing interest in them. ',
    readmore  : 'But by the time Rosemary discovers the horrifying truth, it may be far too late!'
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
    readers : 125, //avg total number of people reading this books
    summary : 'Vol. 2 continues what designer and creative director Radim Malinic started in the first edition , offering yet more indispensable advice on making it in the creative industries . It discusses how to improve design work through more skiful use of language , ',
    readmore  : 'and in doing so , how to stir the right reactions and present well-rounded creative projects with confidence .'
  },

  {
    title : 'THE ALCHEMIST',
    id  : 'B107',
    author  : 'Paulo Coelho',
    rating : '<i class="fas fa-star"><i class="fas fa-star"></i></i><i class="fas fa-star"></i>',
    price : 13.00,
    genre : 'Design',
    language  : 'English',
    pages   : 208,
    published : '01-01-2010',
    photo : 'images/D-theAlchemist.webp',
    readers : 101, //avg total number of people reading this books
    summary : 'Andalusian shepherd boy Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. ',
    readmore  : 'Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest.'
  },

  {
    title : 'THE WORLD OF ABSTRACT ART',
    id  : 'B108',
    author  : 'Emily Robbins',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 18.30,
    genre : 'Design',
    language  : 'English',
    pages   : 260,
    published : '01-01-2010',
    photo : 'images/D-theWorldOfArt.webp',
    readers : 88, //avg total number of people reading this books
    summary : 'Art desgin illustration book. Illustrations are meant to be much more than pretty pictures. ',
    readmore  : 'They will usually help add to or enhance the story in some way. '
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
    readers : 66, //avg total number of people reading this books
    summary : 'In 1990, a group of Cambridge scientists arrived at the Plains of Nechisar in Ethiopia. On that expedition, they collected more than two dozen specimens, saw more than three hundred species of birds, and a plethora of rare butterflies, dragonflies, reptiles, mammals, and plants. ',
    readmore  : 'Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared. '
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
    readers : 83, //avg total number of people reading this books
    summary : 'Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, believing that he and his people are making the surface of Mars livable for future generations. ',
    readmore  : 'Yet he toils willingly, trusting that his blood and sweat will one day result in a better world for his children. '

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
    readers : 16, //avg total number of people reading this books
    summary : 'Young London goldsmith Thomas Treviot is awaiting a design for a very important jewellery commission from Hans Holbein. When the design fails to turn up,  ',
    readmore  : 'Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared. '
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
    readers : 103, //avg total number of people reading this books
    summary : 'Eaven fans will fall in love with this original novel, featuring favorite characters from the highest-rated show on the WB network!  ',
    readmore  : 'Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared. '
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
    readers : 100, //avg total number of people reading this books
    summary : 'Eaven fans will fall in love with this original novel, featuring favorite characters from the highest-rated show on the WB network!  ',
    readmore  : 'Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared. '
  },

  {
    title : 'APRIL IN PARIS 1921',
    id  : 'B114',
    author  : 'Tessa Lunney',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 15.00,
    genre : 'Romance',
    language  : 'English',
    pages   : 400,
    published : '07-12-2015',
    photo : 'images/N-aprilInParis1921.png',
    readers : 123, //avg total number of people reading this books
    summary : 'Even fans will fall in love with this original novel, featuring favorite characters from the highest-rated show on the WB network!  ',
    readmore  : 'Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared. '
  },

  {
    title : 'MAGICIAN',
    id  : 'B115',
    author  : 'Raymond E. Feist',
    rating : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    price : 16.00,
    genre : 'Fantasy',
    language  : 'English',
    pages   : 450,
    published : '07-12-2017',
    photo : 'images/N-magician.png',
    readers : 111, //avg total number of people reading this books
    summary : 'Featuring favorite characters from the highest-rated show on the WB network!  ',
    readmore  : 'Thomas sends a servant to track Holbein down, only to discover that the painter has disappeared. '
  }

];


var id = 101;


// function for display books
function displayBooks(k) {
  document.getElementById('bookResult').innerHTML
  += '</br><div class="col-lg-3 col-md-4 col-sm-12 text-center mb-5">'
  + '<div class="desktop">'
  + '<img id="' + books[k].id + ' " class="imgSize myBook" src=" ' + books[k].photo + ' " alt="Books"/>'
  + '</br></br><h5 class="text-center">' + books[k].title + ' </h5>'
  + '<p class="text-warning text-center">' + books[k].rating + '</p>'
  + '</div>'
  + '<div class="mobile">'
  + '<div class="left pl-4">'
  + '<img id="' + books[k].id + ' " class="imgSize myBook" src=" ' + books[k].photo + ' " alt="Books"/>'
  + '</div>'
  + '<div class="right boxContainer">'
  + '</br></br><h6 class="text-left">' + books[k].title + ' </h6>'
  + '<p class="text-warning text-left">' + books[k].rating + '</p>'
  + '</div>'
  + '</div>'
  + '</div>';

};


// function for display all books
function allBooks(){
  document.getElementById('bookResult').innerHTML = '';
  for(var i=0; i< books.length; i++){

    displayBooks(i);
    modal();

   //  if (id < 115) {
     id++;
   // }

  }
}


// dsiplay all books by default
allBooks();


// Search from book title based on user input
document.getElementById('searchTitle').addEventListener('click', function(){
  document.getElementById('bookResult').innerHTML = '';

  var userInput = (document.getElementById('inputTitle').value).toUpperCase();
  console.log(userInput);

  for (var i=0; i<books.length; i++){
    if (books[i].title.trim() === userInput.trim()){
      document.getElementById('inputTitle').value = '';
      displayBooks(i);
      return;
    }

  }

  // if books not found, display message
  if (books.includes(userInput) === false){
    console.log(books.includes(userInput));
    document.getElementById('bookResult').innerHTML += '</br> Sorry, ' + userInput + ' is not found.'
    document.getElementById('inputTitle').value = '';
  }

  });






//conditional display
// display all genre book
document.getElementById('showAll').addEventListener('click',function(){
  allBooks();
});


// display Romance genre books
document.getElementById('showRomance').addEventListener('click',function(){
    filterModal('romance');
});


// function to filter Modal display content
function filterModal(data){
    console.log('romance');
     document.getElementById('bookResult').innerHTML = '';
     var k=0;
     //var romanceId = 101;
     for( k=0; k< books.length; k++){
       if(books[k].genre.toLowerCase() === data){
         document.getElementById('bookResult').innerHTML
         += '</br><div class="col-lg-3 col-md-4 col-sm-12 text-center mb-5">'
         + '<div class="desktop">'
         + '<img id="' + books[k].id + ' " class="imgSize myBook" src=" ' + books[k].photo + ' " alt="Books"/>'
         + '</br></br><h5 class="text-center">' + books[k].title + ' </h5>'
         + '<p class="text-warning text-center">' + books[k].rating + '</p>'
         + '</div>'
         + '<div class="mobile">'
         + '<div class="left pl-4">'
         + '<img id="' + books[k].id + ' " class="imgSize myBook" src=" ' + books[k].photo + ' " alt="Books"/>'
         + '</div>'
         + '<div class="right boxContainer">'
         + '</br></br><h6 class="text-left">' + books[k].title + ' </h6>'
         + '<p class="text-warning text-left">' + books[k].rating + '</p>'
         + '</div>'
         + '</div>'
         + '</div>';



        $('.myBook').on('click', function(){
            $('.myModal').show();
          console.log(this.id);
           document.getElementById('modalContent').innerHTML = '';
           for (var i=0; i < books.length; i++){
              console.log(books[i].genre.toLowerCase());
              console.log(this.id, books[i].id);
             if ((books[i].genre.toLowerCase().trim() === data) && (this.id.trim() === books[i].id.trim())) {
               console.log('modal content');

               document.getElementById('modalContent').innerHTML
               += '<div class="container mt-5">'
               + '<div class="text-center"><img class="imgSize" src=" ' + books[i].photo + ' " alt="Books"/>'
               + '</br></br><span class="justify-content-center">'
               + '<button class="btn btn-outline-success mr-5 p-2" type="button">BUY  | $' + books[i].price.toFixed(2) + '</button>'
               + '<i class="far fa-bookmark"></i>'
               + '</span></div>'
               + '<hr class="ml-5 mr-5">'
               + '<div class="text-center">'
               + '<h4> ' + books[i].title + ' </h4>'
               + '<p>by ' + books[i].author + '</p>'
               + '<p class="text-warning text-center">' + books[i].rating + '</p>'
               + '</div>'
               + '<hr class="ml-5 mr-5">'
               + '<div class="card-body text-left ml-5 mr-5">'
               + '<h4>About this book</h4></br>'
               + '<div class="row">'
               + '<div class="col-lg-3 col-6"><ul>'
               + '<li class="font-weight-bold">Pages</li>'
               + '</li>' + books[i].pages + '</li>'
               + '</ul></div>'
               + '<div class="col-lg-3 col-6"><ul>'
               + '<li class="font-weight-bold">Genre</li>'
               + '</li>' + books[i].genre + '</li>'
               + '</ul></div>'
               + '<div class="col-lg-3 col-6"><ul>'
               + '<li class="font-weight-bold">Language</li>'
               + '</li>' + books[i].language + '</li>'
               + '</ul></div>'
               + '<div class="col-lg-3 col-6"><ul>'
               + '<li class="font-weight-bold">Published</li>'
               + '</li>' + books[i].published + '</li>'
               + '</ul></div>'
               + '</div>'
               + '<hr>'
               + '<div>'
               + '<h4>Summary</h4></br>'
               + '<p>' + books[i].summary + '</p>'
               + '<button class="btn btn-link btnMore" type="button">Read More</button>'
               + '<p class="moreInfo">' + books[i].readmore + '</p>'
               + '<button class="btn-link btnLess" type="button">Read Less</button>'
               + '</div>'
               + '</div>'
               + '</div>'
               + '</div>';
             };
           }
    });
  //romanceId++;
  }
  }

}


// display Design genre books
document.getElementById('showDesign').addEventListener('click',function(){
  filterModal('design');

});


// display Horror genre books
document.getElementById('showHorror').addEventListener('click',function(){
  filterModal('horror');
});


// display Fantasy genre books
document.getElementById('showFantasy').addEventListener('click',function(){
  filterModal('fantasy');
});





// function to open modal
 function modal(){
   console.log('modal');
  $('.myBook').on('click', function(){

   console.log(this.id);
   $('.myModal').show();
   document.getElementById('modalContent').innerHTML = '';

   modalContent(this.id);

 });
 }


// function to open modal content
function modalContent(thisId){
  console.log(thisId)
  // $('.myModal').show();
  for (var i=0; i < books.length; i++){
    console.log(thisId, books[i].id);
    if(thisId.trim() === books[i].id.trim()){
  document.getElementById('modalContent').innerHTML
  += '<div class="container mt-5">'
  + '<div class="text-center"><img class="imgSize" src=" ' + books[i].photo + ' " alt="Books"/>'
  + '</br></br><span class="justify-content-center">'
  + '<button class="btn btn-outline-success mr-5 p-2" type="button">BUY  | $' + books[i].price.toFixed(2) + '</button>'
  + '<i class="far fa-bookmark"></i>'
  + '</span></div>'
  + '<hr class="ml-5 mr-5">'
  + '<div class="text-center">'
  + '<h4> ' + books[i].title + ' </h4>'
  + '<p>by ' + books[i].author + '</p>'
  + '<p class="text-warning text-center">' + books[i].rating + '</p>'
  + '</div>'
  + '<hr class="ml-5 mr-5">'
  + '<div class="card-body text-left ml-5 mr-5">'
  + '<h4>About this book</h4></br>'
  + '<div class="row">'
  + '<div class="col-lg-3 col-6"><ul>'
  + '<li class="font-weight-bold">Pages</li>'
  + '</li>' + books[i].pages + '</li>'
  + '</ul></div>'
  + '<div class="col-lg-3 col-6"><ul>'
  + '<li class="font-weight-bold">Genre</li>'
  + '</li>' + books[i].genre + '</li>'
  + '</ul></div>'
  + '<div class="col-lg-3 col-6"><ul>'
  + '<li class="font-weight-bold">Language</li>'
  + '</li>' + books[i].language + '</li>'
  + '</ul></div>'
  + '<div class="col-lg-3 col-6"><ul>'
  + '<li class="font-weight-bold">Published</li>'
  + '</li>' + books[i].published + '</li>'
  + '</ul></div>'
  + '</div>'
  + '<hr>'
  + '<div>'
  + '<h4>Summary</h4></br>'
  + '<p>' + books[i].summary + '</p>'
  + '<button class="btn btn-link btnMore" type="button">Read More</button>'
  + '<p class="moreInfo">' + books[i].readmore + '</p>'
  + '<button class="btn-link btnLess" type="button">Read Less</button>'
  + '</div>'
  + '</div>'
  + '</div>'
  + '</div>';
}

}
}




// dropdown selection : Sort by title, authors or top read
document.getElementById('sortSelect').addEventListener('click',function(){
  sortList();
});

// function another(selection){
//   for (var i=0; i < books.length; i++){
//     if (books[i].genre.toLowerCase().trim() === 'selection'){
//     sortList();
//     }
//   }
// }

function sortList(){
  document.getElementById('bookResult').innerHTML = '';
  var x = document.getElementById('sortSelect').value;
  console.log(typeof(x));

  switch (x) {
    case 'one':
    sortTitle();
    break;

    case 'two':
    sortAuthors();
    break;

    case 'three':
    sortTopRead();
    break;

    default:
    allBooks();
    break;

  }

  console.log(x);
}


// sort by book title from A-Z (ascending)
function sortTitle(){
  books.sort(compare);

  function compare(a,b) {
    if(a.title > b.title){
      return 1;
    } else if (a.title < b.title){
      return -1;
    }
    allBooks;
  }

  document.getElementById('bookResult').innerHTML = '';
  var i=0
  for (i=0; i < books.length; i++ ){
  displayBooks(i);
  }

}



// sort by author's name from A-Z (ascending)
function sortAuthors(){
  books.sort(compare);

  function compare(a,b) {
    if(a.author > b.author){
      return 1;
    } else if (a.author < b.author){
      return -1;
    }
    allBooks;
  }

  document.getElementById('bookResult').innerHTML = '';
  var i=0
  for (i=0; i < books.length; i++ ){
  displayBooks(i);
  }


}


// sort by top reads number from highest to lowest (descending)
function sortTopRead(){
  books.sort(compare);

  function compare(a,b) {
    if(a.readers < b.readers){
      return 1;
    } else if (a.readers > b.readers){
      return -1;
    }
    allBooks;
  }

  document.getElementById('bookResult').innerHTML = '';
  var i=0
  for (i=0; i < books.length; i++ ){
  displayBooks(i);
  }

}




//  close books info modal screen
$('.closeBar').on('click',function(){
  $('.myModal').hide();

});


// close bookshelves modal screen
$('#bookshelves').on('click', function(){
  $('.myModal2').show();
  $('#bookshelves').hide();
});


$('.closeBar2').on('click',function(){
  $('.myModal2').hide();
  $('.myModal').hide();
  $('#bookshelves').show();
});


// view more
$('.btnMore').on('click',function(){
    $('.moreInfo').slideToggle(1000);
    $('.btnLess').slidetoggle(1000);

});


$('#B114').on('click',function(){
  $('.myModal').show();
  modalContent('B114');
});
