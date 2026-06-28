# Downloads binary assets from the upstream GitHub repo (images, resume, lockfile).
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

$zipUrl = "https://github.com/m-musif/personal-portfolio-website/archive/refs/heads/main.zip"
$zipPath = Join-Path $env:TEMP "personal-portfolio-website-main.zip"
$extractPath = Join-Path $env:TEMP "personal-portfolio-website-main"

Write-Host "Downloading upstream repo..."
Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath
Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force

$src = Join-Path $extractPath "personal-portfolio-website-main"
$paths = @(
    "frontend\src\assets",
    "frontend\public",
    "frontend\package-lock.json",
    "screenshots"
)

foreach ($rel in $paths) {
    $from = Join-Path $src $rel
    $to = Join-Path $Root $rel
    if (-not (Test-Path $from)) { continue }

    $parent = Split-Path $to -Parent
    if (-not (Test-Path $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }

    if ((Get-Item $from).PSIsContainer) {
        Get-ChildItem -Path $from -Force | ForEach-Object {
            Copy-Item $_.FullName (Join-Path $to $_.Name) -Recurse -Force
        }
    } else {
        Copy-Item $from $to -Force
    }

    Write-Host "Copied $rel"
}

$localCv = Join-Path $Root "Muhammad_Musif_CV_Final.docx"
$publicCv = Join-Path $Root "frontend\public\Muhammad_Musif_CV_Final.docx"
if (Test-Path $localCv) {
    Copy-Item $localCv $publicCv -Force
    Write-Host "Synced Muhammad_Musif_CV_Final.docx to frontend/public"
}

$legacyResume = Join-Path $Root "frontend\public\Muhammad_Musif_RESUME.docx"
if (Test-Path $legacyResume) {
    Remove-Item $legacyResume -Force
    Write-Host "Removed legacy Muhammad_Musif_RESUME.docx"
}

Write-Host "Asset fetch complete."
