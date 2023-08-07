var connection = new signalR.HubConnectionBuilder().withUrl("/ChatHub").build();

connection.on("ReceiveMessage", function (fromUser, message) {
    var msg = fromUser + ":" + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});

connection.start();

$("#btnSend").on("click", function () {
    var fromUser = $("#txtUser").val();
    var message = $("#txtMsg").val();

    connection.invoke("Message", fromUser, message); // Fonksiyon adını "Message" olarak değiştirdik

});
