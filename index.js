function scuberGreetingForFeet(distance){
  // Write your code here!

let greeting 
if (distance < 400) {
  greeting = 'This one is on me!'
}

if (distance > 400 && distance < 2000) {
  greeting = 'That will be twenty bucks.'
}

if (distance > 2000) {
  greeting = 'I will gladly take your thirty bucks.'
}

if (distance > 2500) {
  greeting = 'No can do.'
}

return greeting
}

function ternaryCheckCity(city){
  // Write your code here!

  let response
  if (city === 'NYC'){
    response = 'Ok, sounds good.'
  } else {
    response = 'No go.'
  }

return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!

let tipResponse
  if (tip === 'generous') {
    tipResponse = 'Thank you so much.';
  } else if (tip === 'not as generous') {
    tipResponse = 'Thank you.';
  } else {
    tipResponse = 'Bye.';
  }

  return tipResponse;
}
