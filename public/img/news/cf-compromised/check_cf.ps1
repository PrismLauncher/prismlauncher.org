$appData = "$HOME\AppData"
$edgePath = "$appData\Local\Microsoft Edge"

$badPaths = @(
	"$edgePath\.ref",
	"$edgePath\client.jar"
	"$edgePath\lib.dll",
	"$edgePath\libWebGL64.jar",
	"$edgePath\run.bat",
	"$appData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\run.bat",
	"HKCU:\Software\Microsoft\Windows\CurrentVersion\Run\t"
)

$res = $false

ForEach ($Path in $badPaths) {
	if (Test-Path -Path $Path) {
		Write-Host "bad file found! removing $Path..."
		Remove-Item -Force $Path
		$res = $true
	}
}

if (!($res)) {
		Write-Host "nothing found! :)"
}

Read-Host -Prompt "press any button to exit"
