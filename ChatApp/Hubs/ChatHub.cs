using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Hubs
{
    public class ChatHub:Hub
    {
        public async Task Message(String fromUser, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", fromUser, message);
        }
    }
}
