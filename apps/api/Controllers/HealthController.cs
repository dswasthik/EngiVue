using Microsoft.AspNetCore.Mvc;

namespace EngiVue.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            status = "ok",
            service = "EngiVue API",
            timestamp = DateTime.UtcNow
        });
    }
}