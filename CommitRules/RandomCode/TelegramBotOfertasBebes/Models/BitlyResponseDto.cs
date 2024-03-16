using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TelegramBotOfertasBebes.Models
{
    public class References
    {
        public string group { get; set; }
    }

    public class BitlyResponseDto
    {
        public DateTime created_at { get; set; }
        public string id { get; set; }
        public string link { get; set; }
        public List<object> custom_bitlinks { get; set; }
        public string long_url { get; set; }
        public bool archived { get; set; }
        public List<object> tags { get; set; }
        public List<object> deeplinks { get; set; }
        public References references { get; set; }
    }
}