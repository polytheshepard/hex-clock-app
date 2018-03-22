// Apply as text to id
var clock = document.getElementById('clock');
var hexColour = document.getElementById('hex-colour');

function hexClock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  // transform to hex colour format: has # and 6 digits
  // Since hours minutes and seconds can have one or two digits, it can have some problems, so we can add a zero if it's a one digit number
  if(hours.length < 2) {
    hours = '0' + hours;
  }

  if(minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if(seconds.length < 2) {
    seconds = '0' + minutes;
  }

  // Gets the format for clock
  var clockString = hours + ':' + minutes + ':' + seconds;
  // put them together as string
  var hexColourString = '#' + hours + minutes + seconds;

  // Draw the colour hex and clock time into id
  clock.textContent = clockString;
  hexColour.textContent = hexColourString;

  // Linking body to hex colour and updates
  document.body.style.backgroundColor = hexColourString;
}

// setInterval to run the function every second, since setInterval waits for a second we should put the function hexClock() to set as the initial image
hexClock();
setInterval(hexClock, 1000);

// Function for analog clock
function analogClock() {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // create an object array with each hand and its degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes/2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Create a loop to set the angle of the hands
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('#' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
      elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
      // if this is a minute hand, it notes the seconds position and calculates minutes later
      if (hands[j].hand === 'minutes') {
        elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
      }
    }
  }
}

analogClock();
