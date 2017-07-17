using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Core.Web.Demo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ReactDemo1()
        {
            ViewData["Message"] = "Your application description page. 1233456";
            return View();
        }

        public IActionResult ReactFluxBaseExample1()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
