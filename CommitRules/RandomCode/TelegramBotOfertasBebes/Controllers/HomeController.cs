using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nager.AmazonProductAdvertising;
using Nager.AmazonProductAdvertising.Model;
using Nager.AmazonProductAdvertising.Model.Paapi;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot.Types.ReplyMarkups;
using TelegramBotOfertasBebes.AmazonApiUtils;
using TelegramBotOfertasBebes.Models;
using TelegramBotOfertasBebes.TelegramBotUtils;

namespace TelegramBotOfertasBebes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly AmazonApiRepository _amazonApiRepository;
        private readonly TelegramBotRepository _telegramBotRepository;

        private string _canalPanales = "-1001473683226";
        private string _canalRopaBebe = "-1001220622721";
        private string _canalDeporte = "-1001766621052";
        private string _canalPerros = "-1001181128170";
        private string _canalGatos = "-1001407142353";

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _amazonApiRepository = new AmazonApiRepository();
            _telegramBotRepository = new TelegramBotRepository();
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> TodasOfertas()
        {
            await Panales();
            //await GeneralBebe();
            await RopaBebe();
            await OfertasDeporte();
            await OfertasGatos();
            await OfertasPerros();
            await OfertasCocina();

            ViewData["OfertasCreadas"] = "Se han creado las ofertas correctamente.";

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> TodasOfertas2()
        {
            //await OfertasRopaModa();
            await OfertasBellezaCosmetica();
            await OfertasColonias();
            await OfertasChollosInvierno();
            await OfertasDeTodo();

            ViewData["OfertasCreadas2"] = "Se han creado las ofertas 2 correctamente.";

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> PromocionesAmazon()
        {
            await ListaNacimientoBebe();
            await PruebaPrimeroPagaDespues();            

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> PromocionAmazonPrimeGratis()
        {
            await AmazonPrimeGratis();

            return View("Index");
        }

        [HttpGet]
        public async Task<IActionResult> CrearOfertasPorUrl()
        {
            await TodasOfertas();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> CrearOfertasPorUrl2()
        {
            await TodasOfertas2();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Panales()
        {
            string[] keywords = new string[] { "pañales dodot", "pañal dodot", "pañales chelino" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 5);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync(_canalPanales,
                                                                                     inOfferItem,
                                                                                     new RelatedChannelDto()
                                                                                     {
                                                                                         Link = "https://t.me/ofertasropabebe",
                                                                                         RelatedText = "OFERTAS ROPA BEBE \U0001F476"
                                                                                     });

                if (messageCreated)
                {
                    ViewData["OfertaPanalesCreada"] = "Se ha creado la oferta en el canal de pañales correctamente.";
                }
                else
                {
                    ViewData["OfertaPanalesCreada"] = "Uuuups!! No se ha creado la oferta en el canal de pañales.";
                }
            }
            else
            {
                ViewData["OfertaPanalesCreada"] = "No hay ninguna oferta de pañales disponible.";
            }
            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> RopaBebe()
        {
            string[] keywords = new string[] {"pelele", "pijama bebe", "body bebe", "calcetines bebe", "conjunto bebe",
                "baberos bebe", "toalla bebe", "bañador bebe", "chupete", "gorro bebe" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 6);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rndOfferIndex = rnd.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rndOfferIndex];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync(_canalRopaBebe,
                                                                                    inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/ofertasdepanales",
                                                                                        RelatedText = "OFERTAS PAÑALES BEBE \U0001F476 \U0001F37C"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaRopaBebeCreada"] = "Se ha creado la oferta en el canal de ropa de bebé correctamente.";
                }
                else
                {
                    ViewData["OfertaRopaBebeCreada"] = "Uuuups!! No se ha creado la oferta en el canal de ropa de bebé.";
                }
            }
            else
            {
                ViewData["OfertaRopaBebeCreada"] = "No hay ninguna oferta de ropa de bebé disponible.";
            }

            return View("Index");
        }

        [HttpGet]
        public async Task<IActionResult> ListaNacimientoBebe()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"🎁 CONSIGUE GRATIS UN REGALO PARA TU BEBÉ 👶");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"Amazon nos regala un detalle de bienvenida al crear una lista de deseo para tu bebé que podrás compartir con tus familiares y amigos");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"Para conseguir el regalo:");
            sb.AppendLine();
            sb.Append($"1️⃣ Crea la lista de nacimiento y añade productos de la categoría Bebé. Puedes crearla desde aquí 👉 https://amzn.to/3uGIXs8");
            sb.AppendLine();
            sb.Append($"2️⃣ Añade al menos 20€ en productos vendidos y enviados por Amazon de tu lista a tu cesta");
            sb.AppendLine();
            sb.Append($"3️⃣ Elige tu regalo de Bienvenida y añádelo a tu cesta. Puedes verlos aquí 👉 https://amzn.to/3aDUce4");
            sb.AppendLine();
            sb.Append($"4️⃣ Introduce el código REGALO al final de la compra y voilá! ");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"🎉 Ya tienes el regalo para tu bebé 🎉");

            var imageUrl = "https://github.com/jonmunoa/images/blob/main/lista-nacimiento-bebe.jpg?raw=true";

            await _telegramBotRepository.CreateMessageWithImageAsync(_canalPanales, sb.ToString(), imageUrl);
            await _telegramBotRepository.CreateMessageWithImageAsync(_canalRopaBebe, sb.ToString(), imageUrl);

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> AmazonPrimeGratis()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"🎁 CONSIGUE 30 DÍAS GRATIS DE AMAZON PRIME 🎁");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"Amazon nos regala un detalle una prueba de Amazon Prime GRATIS para un periodo de 30 DÍAS");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"Para conseguir el regalo:");
            sb.AppendLine();
            sb.Append($"🎉 Haz click en el enlace para iniciar tu periodo de prueba Amazon Prime 👉 https://tinyurl.com/49xjfsvf");

            var imageUrl = "https://github.com/jonmunoa/images/blob/main/amazon_prime_gratis.png?raw=true";

            await _telegramBotRepository.CreateMessageWithImageAsync(_canalPanales, sb.ToString(), imageUrl);
            await _telegramBotRepository.CreateMessageWithImageAsync(_canalRopaBebe, sb.ToString(), imageUrl);
            await _telegramBotRepository.CreateMessageWithImageAsync(_canalGatos, sb.ToString(), imageUrl);
            await _telegramBotRepository.CreateMessageWithImageAsync(_canalPerros, sb.ToString(), imageUrl);

            ViewData["OfertaAmazonPrimeGratisCreada"] = "Oferta Amazon Prime Gratis creada.";

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasGatos()
        {
            string[] keywords = new string[] { "para gato", "arena gato", "pienso gato", "comida gato", "juguetes gato","casa gato","arenero gato","rascador gato",
            "cama para gato","comedero gato", "bebedero gato", "articulos para gatos"};

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 6);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001407142353", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/ofertasperros",
                                                                                        RelatedText = "OFERTAS PERROS \U0001F436"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaGatosCreada"] = "Se ha creado la oferta en el canal de gatos correctamente.";
                }
                else
                {
                    ViewData["OfertaGatosCreada"] = "Uuuups!! No se ha creado la oferta en el canal de gatos.";
                }
            }
            else
            {
                ViewData["OfertaGatosCreada"] = "No hay ninguna oferta de gatos disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasPerros()
        {
            string[] keywords = new string[] { "para perro", "correa pero", "pienso perro", "comida perro", "juguetes perro","casa perro","ropa perro",
            "cama para perro","comedero perro", "articulos para perros"};

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 6);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001181128170", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/ofertasparagatos",
                                                                                        RelatedText = "OFERTAS GATOS \U0001F431"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaPerrosCreada"] = "Se ha creado la oferta en el canal de perros correctamente.";
                }
                else
                {
                    ViewData["OfertaPerrosCreada"] = "Uuuups!! No se ha creado la oferta en el canal de perros.";
                }
            }
            else
            {
                ViewData["OfertaPerrosCreada"] = "No hay ninguna oferta de perros disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasDeporte()
        {
            string[] keywords = new string[] { "deporte", "running", "zapatillas de correr", "ropa de deporte", "camiseta para correr", "pantalones para correr", "mallas deporte",
                                                "leggings deporte", "accesorios deporte"};

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 10);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync(_canalDeporte, inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/ofertascolonias",
                                                                                        RelatedText = "OFERTAS COLONIAS \U0001F525"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaDeporteCreada"] = "Se ha creado la oferta en el canal de deporte correctamente.";
                }
                else
                {
                    ViewData["OfertaDeporteCreada"] = "Uuuups!! No se ha creado la oferta en el canal de deporte.";
                }
            }
            else
            {
                ViewData["OfertaDeporteCreada"] = "No hay ninguna oferta de deporte disponible.";
            }

            return View("Index");
        }

        [HttpGet]
        public async Task<IActionResult> PruebaPrimeroPagaDespues()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"🆓 PRUEBA PRIMERO, PAGA DESPUÉS 💳");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"Amazon nos permite probar primero los artículos que queremos comprar, los probamos y luego decidimos cuales queremos devolver");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"Como funciona:");
            sb.AppendLine();
            sb.Append($"1️⃣ Elige haste 6 productos. Tienes que hacerlo desde aquí 👉 https://amzn.to/3R8xkG9");
            sb.AppendLine();
            sb.Append($"2️⃣ Pruébalos en casa durante 7 días");
            sb.AppendLine();
            sb.Append($"3️⃣ Gestiona el pedido online");
            sb.AppendLine();
            sb.Append($"4️⃣ Devolver los artículos que no deseas y voilá!");
            sb.AppendLine();
            sb.AppendLine();
            sb.Append($"🎉 Ya tienes tus artículos que previamente has probado 🎉");

            var imageUrl = "https://raw.githubusercontent.com/jonmunoa/images/main/pagaprimero.jpg";

            await _telegramBotRepository.CreateMessageWithImageAsync(_canalDeporte, sb.ToString(), imageUrl);
            await _telegramBotRepository.CreateMessageWithImageAsync(_canalRopaBebe, sb.ToString(), imageUrl);

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasCocina()
        {
            string[] keywords = new string[] { "cocina", "tostadora", "cafetera", "cocinar", "microondas", "utensilios cocina", "sartenes", "ollas cocina",
                                                "freidora", "lavavajillas", "sandwichera" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 10);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001575643781", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/ofertasbellezacosmetica",
                                                                                        RelatedText = "OFERTAS BELLEZA Y COSMÉTICA \U0001F48E"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaCocinaCreada"] = "Se ha creado la oferta en el canal de cocina correctamente.";
                }
                else
                {
                    ViewData["OfertaCocinaCreada"] = "Uuuups!! No se ha creado la oferta en el canal de cocina.";
                }
            }
            else
            {
                ViewData["OfertaCocinaCreada"] = "No hay ninguna oferta de cocina disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasRopaModa()
        {
            string[] keywords = new string[] { "ropa de mujer", "accesorio de mujer" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 20);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001430995684", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/ofertasbellezacosmetica",
                                                                                        RelatedText = "OFERTAS BELLEZA Y COSMÉTICA \U0001F48E"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertasRopaModaCreada"] = "Se ha creado la oferta en el canal de ropa de moda correctamente.";
                }
                else
                {
                    ViewData["OfertasRopaModaCreada"] = "Uuuups!! No se ha creado la oferta en el canal de ropa de moda.";
                }
            }
            else
            {
                ViewData["OfertasRopaModaCreada"] = "No hay ninguna oferta de ropa de moda disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasBellezaCosmetica()
        {
            string[] keywords = new string[] { "belleza ella", "belleza mujer", "cosmetica mujer", "cosmetica ella" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 15);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001167981891", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/cholloscocina10",
                                                                                        RelatedText = "OFERTAS COCINA \U0001F469"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaBellezaCosmeticaCreada"] = "Se ha creado la oferta en el canal de belleza y cosmetica correctamente.";
                }
                else
                {
                    ViewData["OfertaBellezaCosmeticaCreada"] = "Uuuups!! No se ha creado la oferta en el canal de belleza y cosmetica.";
                }
            }
            else
            {
                ViewData["OfertaBellezaCosmeticaCreada"] = "No hay ninguna oferta de belleza y cosmetica disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasColonias()
        {
            string[] keywords = new string[] { "perfume", "colonia mujer", "colonia hombre" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 15);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001174431789", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/chollosdeporte10",
                                                                                        RelatedText = "OFERTAS DEPORTE \U0001F3C3"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaColoniasCreada"] = "Se ha creado la oferta en el canal de colonias correctamente.";
                }
                else
                {
                    ViewData["OfertaColoniasCreada"] = "Uuuups!! No se ha creado la oferta en el canal de colonias.";
                }
            }
            else
            {
                ViewData["OfertaColoniasCreada"] = "No hay ninguna oferta de colonias disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasRelojes()
        {
            string[] keywords = new string[] { "reloj", "reloj mujer", "reloj hombre" };

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 5);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001538523781", inOfferItem,
                                                                                    new RelatedChannelDto()
                                                                                    {
                                                                                        Link = "https://t.me/patineteselectricosofertas",
                                                                                        RelatedText = "OFERTAS PATINETES ELECTRICOS \U0001F6F4"
                                                                                    });

                if (messageCreated)
                {
                    ViewData["OfertaRelojCreada"] = "Se ha creado la oferta en el canal de relojes correctamente.";
                }
                else
                {
                    ViewData["OfertaRelojCreada"] = "Uuuups!! No se ha creado la oferta en el canal de relojes.";
                }
            }
            else
            {
                ViewData["OfertaRelojCreada"] = "No hay ninguna oferta de relojes disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasChollosInvierno()
        {
            string[] keywords = new string[] { "estufa", "calefactor", "manta invierno", "zapatillas de casa invierno",
                                               "guantes invierno", "bufanda invierno", "abrigo invierno"};

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 5);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001538523781", inOfferItem,
                                                                                       new RelatedChannelDto()
                                                                                       {
                                                                                           Link = "https://t.me/ofertasbellezacosmetica",
                                                                                           RelatedText = "OFERTAS BELLEZA Y COSMÉTICA \U0001F48E"
                                                                                       });

                if (messageCreated)
                {
                    ViewData["OfertasChollosInvierno"] = "Se ha creado la oferta en el canal de chollos invierno correctamente.";
                }
                else
                {
                    ViewData["OfertasChollosInvierno"] = "Uuuups!! No se ha creado la oferta en el canal de chollos invierno.";
                }
            }
            else
            {
                ViewData["OfertasChollosInvierno"] = "No hay ninguna oferta de chollos invierno disponible.";
            }

            return View("Index");
        }

        [HttpPost]
        public async Task<IActionResult> OfertasDeTodo()
        {
            string[] keywords = new string[] { "arbol navidad", "decoracion navidad", "belen navidad", "luces navidad",
                                               "reyes magos navidad", "papa noel"};

            Random rnd = new Random();
            int r = rnd.Next(keywords.Count());

            string keyword = keywords[r];

            List<Item> inOfferResults = await GetInOfferProductsAsync(keyword, 5);

            if (inOfferResults != null && inOfferResults.Any())
            {
                Random rndOffer = new Random();
                int rOffer = rndOffer.Next(inOfferResults.Count());

                var inOfferItem = inOfferResults[rOffer];

                var messageCreated = await _telegramBotRepository.CreateMessageAsync("-1001910322716", inOfferItem,
                                                                                       new RelatedChannelDto()
                                                                                       {
                                                                                           Link = "https://t.me/relojesofertas",
                                                                                           RelatedText = "OFERTAS CHOLLOS INVIERNO \U0001F976"
                                                                                       });

                if (messageCreated)
                {
                    ViewData["OfertasDeTodo"] = "Se ha creado la oferta en el canal de todo correctamente.";
                }
                else
                {
                    ViewData["OfertasDeTodo"] = "Uuuups!! No se ha creado la oferta en el canal de todo.";
                }
            }
            else
            {
                ViewData["OfertasDeTodo"] = "No hay ninguna oferta de todo disponible.";
            }

            return View("Index");
        }

        private async Task<List<Item>> GetInOfferProductsAsync(string keyWord, int pageCount)
        {
            string keyword = keyWord;
            List<Item> inOfferResults = new List<Item>();

            for (int page = 1; page <= pageCount; page++)
            {
                var pageResults = await _amazonApiRepository.SearchAsync(keyword, page);

                if (pageResults != null && pageResults.Successful)
                {
                    List<Item> inOfferPageResults = pageResults.SearchResult.Items.Where(i => i.Offers != null && i.Offers.Listings.Any(l => l.Price.Savings != null))?.ToList();

                    if (inOfferPageResults != null && inOfferPageResults.Any())
                    {
                        inOfferResults.AddRange(inOfferPageResults);
                    }
                }
            }

            return inOfferResults;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}