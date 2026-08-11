Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("C:\Users\huzai\Downloads\opa\Opal_Frontend\public\logo.png")
$img.MakeTransparent([System.Drawing.Color]::White)
$img.Save("C:\Users\huzai\Downloads\opa\Opal_Frontend\public\logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
