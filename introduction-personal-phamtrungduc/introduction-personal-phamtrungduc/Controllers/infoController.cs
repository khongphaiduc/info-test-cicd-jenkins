using Microsoft.AspNetCore.Mvc;

namespace introduction_personal_phamtrungduc.Controllers
{
    public class infoController : Controller
    {

        public IActionResult AboutMe()
        {
            return View();
        }


        public IActionResult Index()
        {
            return View();
        }
    }
}
