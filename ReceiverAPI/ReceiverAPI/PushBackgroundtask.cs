using Microsoft.Extensions.Hosting;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ReceiverAPI
{
    public class PushBackgroundtask : BackgroundService
    {
        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    while (true)
                    {
                        channel.QueueDeclare(queue: "hello",
                                         durable: false,
                                         exclusive: false,
                                         autoDelete: false,
                                         arguments: null);

                        var consumer = new EventingBasicConsumer(channel);
                        consumer.Received += (model, ea) =>
                        {
                            var body = ea.Body;
                            var message = Encoding.UTF8.GetString(body);
                            //Console.WriteLine(" [x] Received {0}", message);
                            SendPost(message);

                        };
                        channel.BasicConsume(queue: "hello",
                                             autoAck: true,
                                             consumer: consumer);
                    }


                }
            }
        }
        private static HttpClient Client = new HttpClient();
        public static void SendPost(string titel)
        {
            StringContent content = new StringContent(titel);
            Client.PostAsync("https://localhost:44319/", content);
        }
    }
}
