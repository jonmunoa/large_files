using Nager.AmazonProductAdvertising.Model.Paapi;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot.Types.ReplyMarkups;
using TelegramBotOfertasBebes.Models;

namespace TelegramBotOfertasBebes.TelegramBotUtils
{
    public class TelegramBotRepository
    {
        public async Task<bool> CreateMessageAsync(string telegramChannelId, Item amazonProduct, RelatedChannelDto relatedChannel = null)
        {
            HttpClient client = new HttpClient();

            // Add an Accept header for JSON format.
            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));

            client.DefaultRequestHeaders.Add("Authorization", "Bearer c1064e476c740e9f755e6d65f5fc34ca146d054e");

            var bitlyJson = new { long_url = amazonProduct.DetailPageURL };

            var bitlyJsonFormatted = new StringContent(JsonConvert.SerializeObject(bitlyJson), System.Text.Encoding.UTF8, "application/json");
            // List data response.
            HttpResponseMessage response = client.PostAsync("https://api-ssl.bitly.com/v4/shorten", bitlyJsonFormatted).Result;  // Blocking call! Program will wait here until a response is received or a timeout occurs.
            if (response.IsSuccessStatusCode)
            {
                // Parse the response body.
                var bitlyResponseDto = JsonConvert.DeserializeObject<BitlyResponseDto>(response.Content.ReadAsStringAsync().Result);  //Make sure to add a reference to System.Net.Http.Formatting.dll

                var bot = new Telegram.Bot.TelegramBotClient("1660966881:AAHWEFlErvWZZhcbGtt5KggbwGLLuhyJWBk");

                StringBuilder sb = new StringBuilder();
                sb.Append($"-{amazonProduct.Offers.Listings.FirstOrDefault().Price.Savings.Percentage} % <b>{amazonProduct.ItemInfo.Title.DisplayValue}</b>");
                sb.AppendLine();
                sb.AppendLine();
                sb.Append($"\U0001F534 Hoy: <b>{amazonProduct.Offers.Listings.FirstOrDefault().Price.Amount} €</b> (antes: {amazonProduct.Offers.Listings.FirstOrDefault().Price.Amount + amazonProduct.Offers.Listings.FirstOrDefault().Price.Savings.Amount} €)");
                sb.AppendLine();
                sb.Append($"\U0001F449 <a href='{bitlyResponseDto.link}'>{bitlyResponseDto.link}</a>");

                await bot.SendTextMessageAsync(telegramChannelId, sb.ToString(), Telegram.Bot.Types.Enums.ParseMode.Html, false, false, 0,
                    new InlineKeyboardMarkup(
                            new InlineKeyboardButton[][]
                            {
                                new [] { InlineKeyboardButton.WithUrl("COMPRAR EN AMAZON \U0001F680", bitlyResponseDto.link) },
                                new [] { InlineKeyboardButton.WithUrl(relatedChannel.RelatedText, relatedChannel.Link) }
                            }));

                client.Dispose();

                return true;
            }

            client.Dispose();

            return false;
        }

        public async Task<bool> CreateMessageWithImageAsync(string telegramChannelId, string message, string imageUrl)
        {
            HttpClient client = new HttpClient();

            // Add an Accept header for JSON format.
            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));

            client.DefaultRequestHeaders.Add("Authorization", "Bearer c1064e476c740e9f755e6d65f5fc34ca146d054e");

            var bot = new Telegram.Bot.TelegramBotClient("1660966881:AAHWEFlErvWZZhcbGtt5KggbwGLLuhyJWBk");

            await bot.SendPhotoAsync(telegramChannelId, new Telegram.Bot.Types.InputFiles.InputOnlineFile(imageUrl),
                                        message, Telegram.Bot.Types.Enums.ParseMode.Html);

            client.Dispose();

            return true;
        }

        public static string ConvertFileToBase64(string fullPathToImage)
        {
            Byte[] bytes = File.ReadAllBytes(fullPathToImage);
            String base64Encoded = Convert.ToBase64String(bytes);
            return base64Encoded;
        }
    }
}