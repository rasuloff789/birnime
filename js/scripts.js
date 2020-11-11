var elForm = document.querySelector('.js-Form');
var elTextarea = elForm.querySelector('.js-Textarea');
var elDeleteWordBtn = elForm.querySelector('.js-deletewordBtn');
var elResult = document.querySelector('.js-result');
elTextarea.focus();
elForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  elResult.textContent = "";
  var resultText =  elTextarea.value.trim();
  console.log(resultText);
  var split =  resultText.split(' ');
  
  
  var wordsArray  = [];
  var longestWord = split[0];
  for (var i = 0 ; i < split.length ; i++){
    
    if(longestWord.length <= (split[i].length)){
      longestWord = split[i] ; 
      wordsArray.push(split[i]);
      for(var j = 0 ; j < wordsArray.length ; j++){
        if (wordsArray[j].length <  longestWord.length)
        {
          j--;
          wordsArray.splice( 0 , 1);
        }
      }
    }
  }
  
  elResult.textContent = wordsArray.join(' , ');
});

elDeleteWordBtn.addEventListener('click' , function(){
  elTextarea.value = "";
  elResult.textContent = "";
  elTextarea.focus();
})