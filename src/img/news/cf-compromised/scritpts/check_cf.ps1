$badPaths = @(
        "$HOME\AppData\Local\Microsoft Edge\libWebGL64.jar",
        "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run\t",
        "$HOME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\run.bat"
)

$res = $false

ForEach ($Path in $badPaths) {
        if (Test-Path -Path $Path) {
                  Write-Host "bad file found! please delete $Path"
                        $res = $true
        }
}

if (!($res)) {
                Write-Host "nothing found! :)"
}