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
    // $('.aboutme__content--card').toggleClass('move-left');

},800);

 setTimeout(() => {
    $('.aboutme__content--card').toggleClass('animation');
}, 2000)

  $(this).toggleClass('fas fa-chevron-circle-right').toggleClass('fas fa-chevron-circle-down')
    $('#nextSection').toggleClass('open');
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





