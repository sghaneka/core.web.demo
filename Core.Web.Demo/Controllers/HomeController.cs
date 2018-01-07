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

        public IActionResult ReactDinnerMenusApp()
        {
            return View();
        }

        public IActionResult ReactFluxBaseExample1()
        {
            return View();
        }

        public IActionResult ReactTechEvents()
        {
            return View();
        }

        public IActionResult ReactStarterKit()
        {
            return View();
        }

        public IActionResult NotePad()
        {
            return View();
        }

        public IActionResult NotePadRedux()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult ReactRouterBasics()
        {
            return View();
        }

        public IActionResult MobxIntro()
        {
            return View();
        }
    }
}
