//Client ID : q3q02fi4ztgfxn0e7yofxc0zgacdab
//Status for Stream of freeCodeCamp
var streams =  [];

$("#but").click(function(){
  var player = $("#in").val();
  streams.push(player);
  $("#logo").html(" ");
  $("#name").html(" ");
  $("#status").html(" ");
  show();
  console.log(streams);
});
function show(){

  for(var i=0 ; i<streams.length; i++){
    $.getJSON('https://api.twitch.tv/kraken/users/'+streams[i]+'?client_id=q3q02fi4ztgfxn0e7yofxc0zgacdab' , function(data){
     
     $.getJSON('https://api.twitch.tv/kraken/streams/'+data.name+'?client_id=q3q02fi4ztgfxn0e7yofxc0zgacdab' , function(data1){
       var current = $("#logo").html();
       var current1 = $("#name").html();
       var current2 = $("#status").html();
      // console.log(data);
       console.log(data1);
       $("#logo").html(current + "<div class='l'><p><img src='"+data.logo+"'></p></div>");
       $("#name").html(current1 + "<div class='n'><p>"+data.name+"</p></div>");
       if(data1.stream === null){
         $("#status").html(current2 + "<div class='s'><p>Offline</p></div>");
       }
       else{
         $("#status").html(current2 + "<div class='s'><p>Online</p></div>");
       }
       current = $("#logo").html();
       current1 = $("#name").html();
       current2 = $("#status").html();
     });
    });
  }                                                            
};