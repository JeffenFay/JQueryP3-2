var nbrClick = 0;
$('#increase').click(function(){
  $('#valueTxt').text(nbrClick+=1);
})
$('#decrease').click(function(){
  $('#valueTxt').text(nbrClick-=1);
})
