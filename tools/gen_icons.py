# -*- coding: utf-8 -*-
"""Génère les icônes PWA de SimASSP (192, 512 et masquable 512)."""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "icons"
OUT.mkdir(exist_ok=True)

NAVY = (30, 58, 95)
GREEN = (46, 125, 50)
YELLOW = (249, 168, 37)


def make(size, maskable=False):
    s = size * 4
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    pad = int(s * (0.18 if maskable else 0.05))
    box = (pad, pad, s - pad, s - pad)
    # Dégradé vertical navy -> vert.
    for y in range(box[1], box[3]):
        t = (y - box[1]) / max(1, box[3] - box[1] - 1)
        c = tuple(int(NAVY[i] + (GREEN[i] - NAVY[i]) * t) for i in range(3)) + (255,)
        d.line((box[0], y, box[2], y), fill=c)
    # Cercle plein (le fond reste transparent hors du cercle).
    mask = Image.new("L", (s, s), 0)
    ImageDraw.Draw(mask).ellipse(box, fill=255)
    img.putalpha(mask)
    d = ImageDraw.Draw(img)
    # Toit / triangle blanc.
    cx, cy = s // 2, s // 2
    r = (box[2] - box[0]) // 2
    roof = [
        (cx - int(r * 0.48), cy + int(r * 0.10)),
        (cx, cy - int(r * 0.52)),
        (cx + int(r * 0.48), cy + int(r * 0.10)),
    ]
    d.polygon(roof, fill=(255, 255, 255, 235))
    # Base blanche sous le toit.
    d.rectangle(
        (cx - int(r * 0.30), cy + int(r * 0.10), cx + int(r * 0.30), cy + int(r * 0.48)),
        fill=(255, 255, 255, 235),
    )
    # Point jaune = "compétence /cap".
    d.ellipse(
        (cx - int(r * 0.11), cy + int(r * 0.20), cx + int(r * 0.11), cy + int(r * 0.42)),
        fill=YELLOW + (255,),
    )
    return img.resize((size, size), Image.LANCZOS)


for name, size, maskable in (
    ("icon-192.png", 192, False),
    ("icon-512.png", 512, False),
    ("icon-maskable-512.png", 512, True),
):
    make(size, maskable).save(OUT / name)
    print((OUT / name).name)
