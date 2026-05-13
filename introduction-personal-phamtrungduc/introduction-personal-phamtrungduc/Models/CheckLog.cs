using System;
using System.Collections.Generic;

namespace introduction_personal_phamtrungduc.Models;

public partial class CheckLog
{
    public Guid IdCheckLog { get; set; }

    public string? Content { get; set; }
}
