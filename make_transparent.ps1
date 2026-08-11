Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("C:\Users\huzai\Downloads\opa\Opal_Frontend\public\logo-horizontal.png")
$img.MakeTransparent([System.Drawing.Color]::White)
$img.Save("C:\Users\huzai\Downloads\opa\Opal_Frontend\public\logo-horizontal-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
