//Image Array
var images = [
   {
      name: "bumblebee",
      image: "assets/images/bumblebee.jpg"
   },
   {
      name: "frenzy",
      image: "assets/images/frenzy.jpg"
   },
   {
      name: "ironhide",
      image: "assets/images/ironhide.jpg"
   },
   {
      name: "jazz",
      image: "assets/images/jazz.jpg"
   },
   {
      name: "megatron",
      image: "assets/images/megatron.jpg"
   },
   {
      name: "optimus",
      image: "assets/images/optimus.jpg"
   },
   {
      name: "prowl",
      image:  "assets/images/prowl.jpg"
   },
   {
      name: "ratchett",
      image:  "assets/images/ratchett.jpg"
   },
   {
      name: "rumble",
      image: "assets/images/rumble.jpg"
   },
   {
      name: "shockwave",
      image: "assets/images/shockwave.jpg"
   },
   {
      name: "soundwave",
      image: "assets/images/soundwave.jpg"
   },
   {
      name: "starscream",
      image: "assets/images/starscream.jpg"
   }
];

//One foor loop needs to run once to render the first images on the page
//Then the shuffle function that is created needs to loop through the images array
//again and render back onto the page in random order.

var testDiv = $('#test');

/*Working for loop through images array */
function loop() {
      for (var i =0; i < images.length; i++) {
         var testImage = $('<img class="images">')
         .attr('src', `${images[i].image}`)
         .attr('data', `${images[i].name}`);
         
         $(testDiv).append(testImage);
      };
   };

loop();

function Shuffle() {
   images.sort(function(a, b) {
      return 0.5 - Math.random()
   });
   loop();
};

$("#shuffleButton").on('click', function(){
   $(testDiv).empty();
   Shuffle();
   console.log(images);
});

// $(document).on('click', '.images', function() {
//    $(this).data()
// })
