function getGame() {
  var roses = document.getElementsByName('rose');
  
  var selectedRose;

  for (var i = 0; i < roses.length; i++) {
      if (roses[i].checked) {
          selectedRose = roses[i].value;
          break;
      }
  }
  
  var game;
  switch(selectedRose) {
      default:
        game = ' ';
          break;
      case 'red':
        game = 'You would enjoy a passionate romance, like the one found in even if TEMPEST!';
          break;
      case 'blue':
        game = 'You would enjoy a once-in-a-lifetime romance, like the one found in Our Life: Beginnings & Always!';
          break;
      case 'green':
        game = 'You would enjoy a lively romance, like the one found in Cupid Parasite!';
          break;
          case 'pink':
        game = 'You would enjoy a sweet romance, like the one found in Tokimeki Memorial Girls Side!';
          break;
      case 'orange':
        game = 'You would enjoy a well-balanced romance, like the one found in BUSTAFELLOWS!';
          break;
      case 'black':
        game = 'You would enjoy a dark romance, like the one found in Club Suicide!';
          break;
      case 'purple':
        game = 'You would enjoy a mysterious romance, like the one found in AMNESIA!';
          break;
      case 'burgundy':
        game = 'You would enjoy a dramatic romance, like the one found in Ken ga Kimi!';
          break;
          
     
  }
  document.getElementById('result').innerText = game;
}
