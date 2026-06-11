# ╔══════════════════════════════════════════════════════════════╗
# ║   Visual Arts — Video Files                                 ║
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
  va_video_01.mp4   →  "Visual Arts Showcase"
  va_video_02.mp4   →  "Student Art Process"
  va_video_03.mp4   →  "Exhibition Highlights"

  You can use .webm or .mov instead of .mp4 — the site auto-detects.

## UPDATING YOUTUBE FALLBACK IDs
  Open:  src/data/departments.ts
  Find:  visualArtsVideos
  Edit:  youtubeId: 'YOUR_VIDEO_ID_HERE'
  (The video ID is the part after ?v= in the YouTube URL)

## NETLIFY DEPLOYMENT — 3 OPTIONS

  ── OPTION A: Small videos (< 50 MB each) ───────────────────
  Commit the files to your Git repo normally:
    git add public/videos/Visual_Arts_Videos/
    git commit -m "Add Visual Arts videos"
    git push

  ── OPTION B: Large videos using Git LFS ────────────────────
    git lfs install
    git lfs track "public/videos/**/*.mp4"
    git lfs track "public/videos/**/*.webm"
    git lfs track "public/videos/**/*.mov"
    git add .gitattributes && git commit -m "Track videos with LFS"
  Enable "Netlify Large Media" in your Netlify dashboard.

  ── OPTION C: YouTube / external hosting ────────────────────
  Update youtubeId in src/data/departments.ts → visualArtsVideos.
  No local files needed.

## ENCODING TIPS
  Use HandBrake (free): https://handbrake.fr
  Settings: Fast 1080p30 · MP4 · H.264 · RF 23 · AAC 160 kbps
  Target: under 80 MB per video
