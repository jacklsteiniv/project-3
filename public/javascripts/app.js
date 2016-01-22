document.addEventListener("DOMContentLoaded", function() {
    // get our connection to the socket.io server
    var socket = io();

  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

  console.log(socket);
})
