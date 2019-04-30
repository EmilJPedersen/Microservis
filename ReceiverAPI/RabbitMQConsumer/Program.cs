using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Net.Http;
using System.Text;

namespace RabbitMQConsumer
{
    class Program
    {
        static void Main(string[] args)
        {
            
        }
        private static HttpClient Client = new HttpClient();
        public static void SendPost(string titel)
        {
            StringContent content = new StringContent(titel);
            Client.PostAsync("https://localhost:44319/", content);
        }
    }
}
