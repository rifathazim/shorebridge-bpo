#!/usr/bin/env python3
"""Generate public/og.png — 1200x630 social share image, Classic Light style."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#ffffff")
d = ImageDraw.Draw(img)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
name_f = ImageFont.truetype(BOLD, 96)
tag_f = ImageFont.truetype(REG, 40)
small_f = ImageFont.truetype(REG, 28)

# bridge arc, tucked into the top-right corner away from the text
d.arc([980, -420, 1660, 260], start=90, end=180, fill="#0071e3", width=14)

d.text((80, 210), "ShoreBridge BPO", font=name_f, fill="#1d1d1f")
d.text((84, 330), "Your team. On the other shore.", font=tag_f, fill="#6e6e73")
d.text((84, 520), "Call center · Creative · Healthcare · Back office — Dhaka, Bangladesh", font=small_f, fill="#6e6e73")

img.save("public/og.png", optimize=True)
print("wrote public/og.png", img.size)
