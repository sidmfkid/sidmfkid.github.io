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
      $('.aboutme').toggleClass('open').toggleClass('closed')
    setTimeout(() => {
        typewriter.stop()
    },2000)

    setTimeout(() => {
        $('.aboutme__content--card').toggleClass('open').toggleClass('closed');
    },700)

    setTimeout(() => {
        $('#goBack').toggleClass('open').toggleClass('closed')
        $('#keepGoing').toggleClass('open').toggleClass('closed')
    },2300)

    setTimeout(() => {
        $('.aboutme__content--card').toggleClass('animation');
    },2500)
  })

  $('#goBack').on('click', function () {
    $('.welcome').toggleClass('open').toggleClass('closed')
    $('.aboutme').toggleClass('open').toggleClass('closed')
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

 setTimeout(() => {
    $('.aboutme__content--card').toggleClass('animation');
}, 2000)


setTimeout(() => {
    $('.aboutme__content--card').toggleClass('move-left');
}, 300)





setTimeout(() => {
    $('.aboutme__content').toggleClass('show-info')
    $('.aboutme__content--info').toggleClass('show-info')
    $('.aboutme__content--card').toggleClass('move-left');

},800);
    $(this).toggleClass('fas fa-chevron-circle-right').toggleClass('fas fa-chevron-circle-down')

    // var $info = $('.aboutme__content--info')

    // setTimeout(() => {
    //     if ($info.hasClass('show-info') === false)
    //     {
    //         console.log($info.hasClass('show-info'));
    //         $('.aboutme__content--info').toggleClass('set')
    //     }
    //     setTimeout(() => {
    //         if ($info.hasClass('show-info') === false)
    //     {
    //         console.log($info.hasClass('show-info'));
    //         $('.aboutme__content--info').toggleClass('set')
    //     }
    //     },700)
    // }, 700)





  })
});





