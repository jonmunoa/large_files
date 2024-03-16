using Nager.AmazonProductAdvertising;
using Nager.AmazonProductAdvertising.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TelegramBotOfertasBebes.AmazonApiUtils
{
    public class AmazonApiRepository
    {
        private readonly AmazonAuthentication _amazonAuthentication;
        private readonly AmazonProductAdvertisingClient _amazonClient;

        public AmazonApiRepository()
        {
            _amazonAuthentication = new AmazonAuthentication("AKIAIRX6NXIY2NF6MH4Q", "wU7B20qfEBBwwFXuz/FDMo36sh7xsm0nUKsmz/Q3");
            _amazonClient = new AmazonProductAdvertisingClient(_amazonAuthentication, AmazonEndpoint.ES, "tgoffer-21");
        }

        public async Task<SearchItemResponse> SearchAsync(string keywords, int page)
        {
            var searchRequest = new SearchRequest
            {
                Keywords = keywords,
                ItemPage = page,
                Resources = new[]
                {
                            "ItemInfo.Title",
                            "Offers.Listings.Price"
                }
            };

            if (!string.IsNullOrEmpty(keywords))
                searchRequest.Keywords = keywords;

            return await _amazonClient.SearchItemsAsync(searchRequest);
        }       

        public async Task<GetItemsResponse> GetItemAsync(string item)
        {
            return await _amazonClient.GetItemsAsync(item);
        }
    }
}