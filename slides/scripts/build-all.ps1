# Build script for all Slidev presentations
# This script builds each .md file in the slides subdirectories
# Usage: build-all.ps1 [-Verbose]

param(
    [switch]$Verbose
)

$ErrorActionPreference = "Stop"

$StartTime = Get-Date
$SlidesDir = Split-Path -Parent $PSScriptRoot
$OutputDir = Join-Path $SlidesDir "dist"

Write-Host "🚀 Building all Slidev presentations..." -ForegroundColor Cyan
Write-Host "📁 Slides directory: $SlidesDir" -ForegroundColor Gray
Write-Host "📦 Output directory: $OutputDir" -ForegroundColor Gray
if ($Verbose) {
    Write-Host "📢 Verbose mode enabled" -ForegroundColor Yellow
}
Write-Host ""

# Create output directory structure
New-Item -ItemType Directory -Force -Path "$OutputDir/workshop" | Out-Null
New-Item -ItemType Directory -Force -Path "$OutputDir/tech-talks" | Out-Null
New-Item -ItemType Directory -Force -Path "$OutputDir/exec-talks" | Out-Null

$TotalBuilt = 0

# Helper function to build a slide
function Build-Slide {
    param(
        [string]$Category,
        [string]$BaseName
    )

    $SlideStartTime = Get-Date
    Push-Location $SlidesDir
    try {
        if ($Verbose) {
            Write-Host "   🔨 $Category/$BaseName..." -ForegroundColor Yellow
            npx slidev build "$Category/$BaseName.md" `
                --base "/CopilotTraining/$Category/$BaseName/" `
                --out "$OutputDir/$Category/$BaseName"
            $ElapsedSeconds = [math]::Round(((Get-Date) - $SlideStartTime).TotalSeconds, 1)
            Write-Host "   ✅ $Category/$BaseName built (${ElapsedSeconds}s)" -ForegroundColor Green
        }
        else {
            Write-Host "   🔨 $Category/$BaseName... " -NoNewline -ForegroundColor Yellow
            $output = npx slidev build "$Category/$BaseName.md" `
                --base "/CopilotTraining/$Category/$BaseName/" `
                --out "$OutputDir/$Category/$BaseName" 2>&1
            $ElapsedSeconds = [math]::Round(((Get-Date) - $SlideStartTime).TotalSeconds, 1)
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ ${ElapsedSeconds}s" -ForegroundColor Green
            }
            else {
                Write-Host "❌ (run with -Verbose for details)" -ForegroundColor Red
                if ($Verbose) {
                    Write-Host $output -ForegroundColor Red
                }
            }
        }
    }
    finally {
        Pop-Location
    }
}

# Build workshop slides
Write-Host "📚 Building workshop slides..." -ForegroundColor Cyan
$WorkshopSlides = Get-ChildItem -Path "$SlidesDir/workshop" -Filter "*.md" -File
foreach ($SlideFile in $WorkshopSlides) {
    $BaseName = $SlideFile.BaseName
    Build-Slide -Category "workshop" -BaseName $BaseName
    $TotalBuilt++
}
Write-Host ""

# Build tech-talks slides
Write-Host "🔬 Building tech-talks slides..." -ForegroundColor Cyan
$TechTalksSlides = Get-ChildItem -Path "$SlidesDir/tech-talks" -Filter "*.md" -File
foreach ($SlideFile in $TechTalksSlides) {
    $BaseName = $SlideFile.BaseName
    Build-Slide -Category "tech-talks" -BaseName $BaseName
    $TotalBuilt++
}
Write-Host ""

# Build exec-talks slides
Write-Host "💼 Building exec-talks slides..." -ForegroundColor Cyan
$ExecTalksSlides = Get-ChildItem -Path "$SlidesDir/exec-talks" -Filter "*.md" -File
foreach ($SlideFile in $ExecTalksSlides) {
    $BaseName = $SlideFile.BaseName
    Build-Slide -Category "exec-talks" -BaseName $BaseName
    $TotalBuilt++
}
Write-Host ""

# Copy index.html to dist root
Write-Host "📄 Copying index-custom.html to dist root..." -ForegroundColor Gray
Copy-Item "$SlidesDir/index-custom.html" "$OutputDir/index.html" -Force

$TotalElapsedSeconds = [math]::Round(((Get-Date) - $StartTime).TotalSeconds, 1)
$TotalMinutes = [math]::Floor($TotalElapsedSeconds / 60)
$RemainingSeconds = $TotalElapsedSeconds % 60

Write-Host ""
Write-Host "✨ All $TotalBuilt presentations built successfully!" -ForegroundColor Green
if ($TotalMinutes -gt 0) {
    Write-Host "⏱️  Total time: ${TotalMinutes}m ${RemainingSeconds}s" -ForegroundColor Cyan
}
else {
    Write-Host "⏱️  Total time: ${TotalElapsedSeconds}s" -ForegroundColor Cyan
}
Write-Host "📦 Output location: $OutputDir" -ForegroundColor Gray
Write-Host ""
Write-Host "To preview locally, run: cd dist && python -m http.server 8080" -ForegroundColor Gray
