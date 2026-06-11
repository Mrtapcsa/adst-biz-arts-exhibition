# ╔══════════════════════════════════════════════════════════════╗
# ║   Computer Science — Video Files                            ║
# ║   ADST-BiZ-VISUAL ARTS EXHIBITION · MLIA Shenzhen           ║
# ╚══════════════════════════════════════════════════════════════╝

## HOW THE FALLBACK SYSTEM WORKS
  1. The site tries YOUR local file first  (green badge 📁 Local File)
  2. If NOT found → YouTube fallback plays  (red badge ▶ YouTube)
  The page NEVER breaks — it always shows something.

## SUPPORTED FORMATS  (tried in this order)
  .mp4   ← recommended (H.264 + AAC, widest browser support)
  .webm  ← excellent compression, works on all modern browsers
  .mov   ← Apple format, works in Safari/Chrome

## EXACT FILENAMES TO USE
  cs_video_01.mp4   →  "CS Department Showcase"
  cs_video_02.mp4   →  "3D Printing in Action"
  cs_video_03.mp4   →  "BBC Microbit & Robotics Demo"

  You can use .webm or .mov instead of .mp4 — the site auto-detects.
  Example: cs_video_01.webm  works perfectly.

## UPDATING YOUTUBE FALLBACK IDs
  Open:  src/data/departments.ts
  Find:  computerScienceVideos
  Edit:  youtubeId: 'YOUR_VIDEO_ID_HERE'
  (The video ID is the part after ?v= in the YouTube URL)

## NETLIFY DEPLOYMENT — 3 OPTIONS

  ── OPTION A: Small videos (< 50 MB each) ───────────────────
  Just commit the files to your Git repo normally:
    git add public/videos/Computer_Science_Videos/
    git commit -m "Add CS videos"
    git push
  Netlify will serve them automatically from /videos/...

  ── OPTION B: Large videos (50 MB – 2 GB) using Git LFS ────
  Install Git LFS once:
    git lfs install
    git lfs track "public/videos/**/*.mp4"
    git lfs track "public/videos/**/*.webm"
    git lfs track "public/videos/**/*.mov"
    git add .gitattributes
    git commit -m "Track large video files with LFS"
  Then add your videos and push normally.
  Enable "Netlify Large Media" in your Netlify dashboard.

  ── OPTION C: External hosting (best for very large files) ──
  Host videos on YouTube, Vimeo, or Google Drive.
  Update the youtubeId fields in src/data/departments.ts.
  No local files needed — YouTube fallback handles everything.

## ENCODING TIPS (for best quality + smallest file size)
  Use HandBrake (free): https://handbrake.fr
  Settings:
    Preset: Fast 1080p30
    Format: MP4
    Video codec: H.264
    Quality: RF 23–26  (lower = bigger file, higher quality)
    Audio: AAC stereo 160 kbps
  Target: under 80 MB per video for smooth Netlify streaming
