$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
   $.getJSON('https://api.hitbox.tv/user/' + $('#inputText').val(), function(data){
         
         var Username = data.user_name;
         var followers = data.followers;
         var Broadcaster = data.user_is_broadcaster;
         var joined = data.live_since;
        var html += '<h1><span class="label label-success">' + Username + '</h1>';
         html += '<br><b><span class="label label-success">Followers:' + followers + '</b>';
         html += '<br><b><span class="label label-success">Broadcaster:' + Broadcaster + '</b>';
         html += "<br>";
         html += "<br>";
         html += '<br><b><span class="label label-info"><font color="White"><a href="https://hitbox.tv/' + Username + '">hitbox.tv/'+ Username +'</a></font></b>';
                  html += '<br><b><span class="label label-success">Joined on: '+joined+' </b>'.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A hitbox user with that name does not exist.';
             $('.profile').html(html);
            return;
      });
}
