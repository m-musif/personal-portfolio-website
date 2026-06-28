#Requires -Version 5.1
<#
.SYNOPSIS
  Bootstrap Muhammad Musif portfolio: fetch upstream assets, copy certificate images, build.

.DESCRIPTION
  Run from repo root after updates are applied. Downloads missing binary assets from GitHub,
  copies certificate images from C:\Users\DELL\.cursor\Certificates if present, then builds.
#>
$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Frontend = Join-Path $RepoRoot "frontend"
$Public = Join-Path $Frontend "public"
$Assets = Join-Path $Frontend "src\assets\projects"
$CertSource = "C:\Users\DELL\.cursor\Certificates"
$CertDest = Join-Path $Public "certificates"
$BaseRaw = "https://raw.githubusercontent.com/m-musif/personal-portfolio-website/main"

function Ensure-Dir([string]$Path) {
  if (-not (Test-Path $Path)) {
    New-Item -ItemType Directory -Path $Path -Force | Out-Null
  }
}

function Download-File([string]$Url, [string]$Dest) {
  Ensure-Dir (Split-Path $Dest -Parent)
  if (-not (Test-Path $Dest)) {
    Write-Host "Downloading $Url"
    Invoke-WebRequest -Uri $Url -OutFile $Dest -UseBasicParsing
  } else {
    Write-Host "Exists: $Dest"
  }
}

Write-Host "=== Portfolio bootstrap ===" -ForegroundColor Cyan

Ensure-Dir $Public
Ensure-Dir $Assets
Ensure-Dir $CertDest

# Public assets from upstream repo
$publicFiles = @(
  "frontend/public/favicon.svg",
  "frontend/public/icons.svg",
  "frontend/public/Muhammad_Musif_RESUME.docx"
)
foreach ($rel in $publicFiles) {
  $name = Split-Path $rel -Leaf
  Download-File "$BaseRaw/$rel" (Join-Path $Public $name)
}

# Project screenshots from upstream repo
$projectImages = @(
  "detection-results.png",
  "answer.png",
  "multi-agent-memory.png",
  "code-review-workflow.png"
)
foreach ($img in $projectImages) {
  Download-File "$BaseRaw/frontend/src/assets/projects/$img" (Join-Path $Assets $img)
}

# package-lock.json (optional but helps reproducible installs)
$lockPath = Join-Path $Frontend "package-lock.json"
if (-not (Test-Path $lockPath)) {
  try {
    Download-File "$BaseRaw/frontend/package-lock.json" $lockPath
  } catch {
    Write-Warning "Could not download package-lock.json; npm install will resolve deps."
  }
}

# Copy certificate images if user saved them locally
$certImageMap = @{
  "jp-morgan-chase.png"       = @("jp-morgan", "jpmorgan", "jp-morgan-chase")
  "deloitte-cyber.png"        = @("deloitte", "deloitte-cyber")
  "walmart-global-tech.png"   = @("walmart", "walmart-global")
  "goldman-sachs.png"         = @("goldman", "goldman-sachs")
}

if (Test-Path $CertSource) {
  $sourceImages = Get-ChildItem -Path $CertSource -Include *.png,*.jpg,*.jpeg,*.webp -File -ErrorAction SilentlyContinue
  foreach ($entry in $certImageMap.GetEnumerator()) {
    $dest = Join-Path $CertDest $entry.Key
    if (Test-Path $dest) { continue }
    $match = $sourceImages | Where-Object {
      $base = $_.BaseName.ToLower()
      $entry.Value | Where-Object { $base -like "*$_*" }
    } | Select-Object -First 1
    if ($match) {
      Copy-Item $match.FullName $dest
      Write-Host "Copied certificate image: $($match.Name) -> $($entry.Key)"
    }
  }
} else {
  Write-Warning "Certificate source folder not found: $CertSource"
}

Write-Host "`n=== npm install & build ===" -ForegroundColor Cyan
Push-Location $Frontend
try {
  if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    throw "npm not found. Install Node.js 20+ from https://nodejs.org and retry."
  }
  npm install
  if ($LASTEXITCODE -ne 0) { throw "npm install failed with exit code $LASTEXITCODE" }
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "npm run build failed with exit code $LASTEXITCODE" }
  Write-Host "`nBuild succeeded. Output: $Frontend\dist" -ForegroundColor Green
} finally {
  Pop-Location
}

Write-Host "`nNext: commit, push to GitHub, enable Pages source = GitHub Actions." -ForegroundColor Yellow
