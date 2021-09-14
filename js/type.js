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
    },2500)

    setTimeout(() => {
        $('.aboutme__content--card').css('animation', 'float 1s infinite 1s cubic-bezier(0.445, 0.05, 0.55, 0.95)');
    },3000)

    $('#goBack').on('click', function () {
        $('.welcome').toggleClass('closed').toggleClass('open')
        $('.aboutme').toggleClass('closed').toggleClass('open')
        $('.aboutme__content--card').toggleClass('closed').toggleClass('open');
        typewriter.start()
        $('.aboutme__content--card').css('animation', 'none');
        $('#goBack').toggleClass('open').toggleClass('closed')
        $('#keepGoing').toggleClass('open').toggleClass('closed')
     })





  })

});





