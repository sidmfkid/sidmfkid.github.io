$(document).ready(function () {

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
//   devMode: true,
});

console.log(typewriter.options.loop);

typewriter
  .pauseFor(2500)
  .typeString('Hi, I\'m Sid!')
  .pauseFor(2000)
  .deleteChars(13)
  .typeString('Click the button below to learn more about me!')
  .pauseFor(5000)
  .deleteChars(46)
  .pauseFor(5000)
  .typeString('This is getting a little weird now..')
  .pauseFor(4000)
  .typeString(' Just click the button')
  .pauseFor(5000)
  .deleteChars(59)
  .pauseFor(3000)
  .typeString('Okay.. Lets try this again')

  .start();

  $('#welcome-btn').on( 'click', function () {
      $('.welcome').toggleClass('open').toggleClass('closed')
      $('.aboutme').toggleClass('open').toggleClass('closed').toggleClass('next')



      setTimeout(() => {
        $('.aboutme__content--card').toggleClass('open').toggleClass('closed');
    },500)


    setTimeout(() => {
        typewriter.stop()
        $('.welcome').toggleClass('next')
    },500)


    setTimeout(() => {
        $('#goBack').toggleClass('open').toggleClass('closed')
        $('#keepGoing').toggleClass('open').toggleClass('closed')
    },600)

    setTimeout(() => {
        $('.aboutme__content--card').toggleClass('animation');
        
      var cardContainer = document.querySelector('.info-container')

        var infoContainer = new Typewriter(cardContainer, {
          strings: ['<span class="key">Name: </span>\
          <span class="value">Sidney Moore</span>\
          <span class="key">Email: </span>\
          <span class="value">sidshopifydev@gmail.com</span><span class="key">Location: </span><span class="value">Indianapolis\, IN</span><span class="key">Age: </span><span class="value">25</span><span class="key">Kids: </span><span class="value">1</span><span class="key">Vaccinated: </span><span class="value">Yes</span><span class="key">Hobbies: </span><span class="value">Brainstorming ideas to prevent living in a dystopian society\, reading\,  learning\, Rocket League\, Music\, and Coding\.</span></>'],
          loop: false,
           delay: 75,
          // autoStart: false,
           devMode: true,
        });
        console.log(infoContainer.options.loop);

        infoContainer.typeString(infoContainer.options.strings).start();
    },2300)


  })

  $('#goBack').on('click', function () {
    $('.welcome').toggleClass('open').toggleClass('closed').toggleClass('next')
    $('.aboutme').toggleClass('open').toggleClass('closed').toggleClass('next')
    $('.aboutme__content--card').toggleClass('closed').toggleClass('open');
    typewriter.start()
    $('.aboutme__content--card').toggleClass('animation');
    $('#goBack').toggleClass('closed').toggleClass('open');
    $('#keepGoing').toggleClass('closed').toggleClass('open');
 })


 $('#keepGoing').on('click', function () {


//  setTimeout(() => {
//      $('.aboutme__content--card').toggleClass('animation');
//  }, 100)
// setTimeout(() => {
//     $('.aboutme__content--card').toggleClass('move-left');
// }, 300)

setTimeout(()=> {
  $('.aboutme__content--info').toggleClass('next')
}, 800)

setTimeout(() => {
    $('.aboutme__content').toggleClass('show-info')
    $('.aboutme__content--info').toggleClass('show-info')

    var showInfo = document.querySelector('.aboutme__content--info')

    var moreInfo = new Typewriter(showInfo, {
      strings: ['<h2>My Life Pre-Covid</h2>\
      <p>Before the pandemic I was a different person. Going into 2020 I was a musician working multiple jobs. I would be a bartender at a brewery for part of my day then go be a server at a high end restauraunt leaving my weekends to be a wedding DJ and make my own music. And on top of that making sure I spend time with my son. Once it was Covid season I was out of all my jobs and had to apply for unemployment which was delayed and a pain to even get. That\'s when I knew I needed a change.</p>\
\
      <h2>Notable Accomplishments</h2>\
      <p>Before I started learning Web Development and Eccomerce my main focus was on music. During this time I was able to accumulate over 2.5 million streams of my songs across all major platforms. On top of that I learned/used Influencer Marketing and Facebook Ads to sell out multiple shows. Once Covid came my focus turned to Eccomerce which I learned using only online courses and my previous experience. One of my first businesses took off and did over 18K in sales a little over its first month in business. I fell inlove with the Shopify platform and started to get into Web Development. I bought multiple courses and taught myself different languages which I then applied that knowledge to bussinesses I wanted to help.</p>\
\
      <h2>Goals And Aspirations</h2>\
      <p>Since learning how to navigate these different platforms and using different programming languages my goals have changed tenfold. In the next 3-5 years I would like to continue to grow as a programmer, developer, and designer by joining a company that is looking for a jack of all trades. Some more specific goals are to build a appointment app for shopify, a character generator using JS to cerate NFTs, build a twitter bot, and to build a webscraper thats sends data to a database for a web app.</p>'],
      loop: false,
       delay: 5,
      // autoStart: false,
       devMode: true,
    });
    console.log(moreInfo.options.loop);

    moreInfo.typeString(moreInfo.options.strings).start();
    // $('.aboutme__content--card').toggleClass('move-left');

},800);

 setTimeout(() => {
    $('.aboutme__content--card').toggleClass('animation');
}, 2000)

  $(this).toggleClass('fas fa-chevron-circle-right').toggleClass('fas fa-chevron-circle-down')
    $('#nextSection').toggleClass('next').toggleClass('open');
  })

  
  
  $('#nextSection').on('click', function () {

    setTimeout(() => {
    $('.aboutme').toggleClass('blur').delay(900).toggleClass('next')

    }, 1000)

    setTimeout(() => {
      $('.skills').toggleClass('next').toggleClass('closed').toggleClass('open')
      $('.skills__content').toggleClass('closed').delay(900).toggleClass('open')
      $('#backToAbout').toggleClass('next')
      $('#toHistory').toggleClass('next')
    }, 1000)

    setTimeout(()=> {
      $('.bar > span').css('animation', 'grow 1s ease-in-out forwards')
    },2000)

    $('.aboutme__content').toggleClass('blur').delay(900).toggleClass('next')
   })

   $('#backToAbout').on('click', function () {

      $('.skills').toggleClass('open').toggleClass('next')
      $('.skills__content').toggleClass('closed')
      $('#toHistory').toggleClass('blur').delay(900).toggleClass('next').toggleClass('blur')
      $(this).toggleClass('blur').delay(900).toggleClass('next').toggleClass('blur')

    $('.aboutme__content').toggleClass('next').toggleClass('blur')
    $('.aboutme').toggleClass('next').toggleClass('blur')

    })

    $('#toHistory').on('click', function () {
      $('.skills__content').toggleClass('closed')


      $('#backToAbout').toggleClass('blur').delay(900).toggleClass('next').toggleClass('blur')
      $(this).toggleClass('blur').delay(900).toggleClass('next').toggleClass('blur')

      setTimeout(()=> {
        $('.skills__content').toggleClass('next')
        $('.skills').toggleClass('next')
      },1000)

      setTimeout(()=> {
        $('.work').toggleClass('next')
      },1100)


     })

     $('#backToSkills').on('click', function () { 

      $('.skills__content').toggleClass('next')
      $('.skills').toggleClass('open').delay(900).toggleClass('next').toggleClass('open')
      $('.work').toggleClass('next')
      $('#backToAbout').toggleClass('next').toggleClass('unblur')
      $('#toHistory').toggleClass('next').toggleClass('unblur')

      setTimeout(()=> {
        $('.skills__content').toggleClass('closed')
        // $('.skills__content').toggleClass('closed')

      },1500)

      setTimeout(()=> {
        $('.bar > span').css('animation', 'grow 1s ease-in-out forwards')
      },1100)

      })

});





