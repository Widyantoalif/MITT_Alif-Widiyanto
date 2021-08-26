using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TutorialJWT.Model;

namespace TutorialJWT.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {



        [HttpPost]
        public JsonResult Register(UserProfile userProfile)
        {
            db_latihan_alifContext db = new db_latihan_alifContext();

            db.UserProfiles.Add(userProfile);
            db.SaveChanges();
            return new JsonResult("Add sukses");
        }

        [HttpPatch]
        public JsonResult Update(UserProfile userProfile)
        {
            db_latihan_alifContext db = new db_latihan_alifContext();
            db.Entry(userProfile).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();

            return new JsonResult("Berhasil update");
        }

        [HttpGet]
        public JsonResult Detail(string username)
        {
            db_latihan_alifContext db = new db_latihan_alifContext();
            var data = db.UserProfiles.Where(e => e.Username == username).FirstOrDefault();
            return new JsonResult(data);
        }
    }
}
