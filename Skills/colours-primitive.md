---
description: Primitive color palette — raw hex values. Never use these directly in components.
---

# Color Primitives

Raw palette values. These are **Layer 1** of the token architecture. Components NEVER reference these directly — they go through semantic tokens in `colors-semantic.mdc`.

Only consult this file when:
- Adding a new semantic token and need to pick a primitive
- Debugging a color value

## Grey (Extended Neutral)

| Token | Hex |
|-------|-----|
| `--grey-White` | `#FFFFFF` |
| `--grey-Black` | `#000000` |
| `--grey-50` | `#FAFAFA` |
| `--grey-100` | `#F5F5F5` |
| `--grey-150` | `#EFEFF0` |
| `--grey-200` | `#DCDCDC` |
| `--grey-250` | `#CCCBCD` |
| `--grey-300` | `#B7B7B8` |
| `--grey-350` | `#8F8E92` |
| `--grey-400` | `#7A787D` |
| `--grey-450` | `#605F63` |
| `--grey-500` | `#474649` |
| `--grey-550` | `#292829` |
| `--grey-600` | `#1E1E1F` |
| `--grey-650` | `#19191A` |
| `--grey-700` | `#141414` |
| `--grey-750` | `#0F0F10` |
| `--grey-800` | `#0A0A0A` |

## Chromatic Palettes (50–950 scale)

### Purple (Brand)
| Token | Hex |
|-------|-----|
| `--purple-50` | `#F3F3FF` |
| `--purple-100` | `#E1E0FE` |
| `--purple-150` | `#D1CFFD` |
| `--purple-200` | `#C1BDFC` |
| `--purple-300` | `#A69CF9` |
| `--purple-400` | `#8E7CF4` |
| `--purple-500` | `#795DEE` |
| `--purple-600` | `#6841E6` |
| `--purple-700` | `#5A1FD4` |
| `--purple-800` | `#3A1BA5` |
| `--purple-850` | `#33198F` |
| `--purple-900` | `#2B1678` |
| `--purple-950` | `#241362` |

### Red
| Token | Hex |
|-------|-----|
| `--red-50` | `#FEF2F2` |
| `--red-100` | `#FEE2E2` |
| `--red-200` | `#FECACA` |
| `--red-300` | `#FCA5A5` |
| `--red-400` | `#F87171` |
| `--red-500` | `#EF4444` |
| `--red-600` | `#DC2626` |
| `--red-700` | `#B91C1C` |
| `--red-800` | `#991B1B` |
| `--red-900` | `#7F1D1D` |
| `--red-950` | `#450A0A` |

### Green
| Token | Hex |
|-------|-----|
| `--green-50` | `#F0FDF4` |
| `--green-100` | `#DCFCE7` |
| `--green-200` | `#BBF7D0` |
| `--green-300` | `#86EFAC` |
| `--green-400` | `#4ADE80` |
| `--green-500` | `#22C55E` |
| `--green-600` | `#16A34A` |
| `--green-700` | `#15803D` |
| `--green-800` | `#166534` |
| `--green-900` | `#14532D` |
| `--green-950` | `#052E16` |

### Yellow
| Token | Hex |
|-------|-----|
| `--yellow-50` | `#FEFAE8` |
| `--yellow-100` | `#FEF9C3` |
| `--yellow-200` | `#FEF08A` |
| `--yellow-300` | `#FDE047` |
| `--yellow-400` | `#FACC15` |
| `--yellow-500` | `#EAB308` |
| `--yellow-600` | `#D18C0A` |
| `--yellow-700` | `#A76406` |
| `--yellow-800` | `#875008` |
| `--yellow-900` | `#62360F` |
| `--yellow-950` | `#302012` |

### Amber
| Token | Hex |
|-------|-----|
| `--amber-50` | `#FFFBEB` |
| `--amber-100` | `#FEF3C7` |
| `--amber-200` | `#FDE68A` |
| `--amber-300` | `#FCD34D` |
| `--amber-400` | `#FBBF24` |
| `--amber-500` | `#F59E0B` |
| `--amber-600` | `#D97706` |
| `--amber-700` | `#B45309` |
| `--amber-800` | `#92400E` |
| `--amber-900` | `#78350F` |
| `--amber-950` | `#451A03` |

### Blue
| Token | Hex |
|-------|-----|
| `--blue-50` | `#EFF6FF` |
| `--blue-100` | `#DBEAFE` |
| `--blue-200` | `#BFDBFE` |
| `--blue-300` | `#93C5FD` |
| `--blue-400` | `#60A5FA` |
| `--blue-500` | `#3B82F6` |
| `--blue-600` | `#2563EB` |
| `--blue-700` | `#1D4ED8` |
| `--blue-800` | `#1E40AF` |
| `--blue-900` | `#1E3A8A` |
| `--blue-950` | `#172554` |

### Cyan
| Token | Hex |
|-------|-----|
| `--cyan-50` | `#ECFEFF` |
| `--cyan-100` | `#CFFAFE` |
| `--cyan-200` | `#A5F3FC` |
| `--cyan-300` | `#67E8F9` |
| `--cyan-400` | `#22D3EE` |
| `--cyan-500` | `#06B6D4` |
| `--cyan-600` | `#0891B2` |
| `--cyan-700` | `#0E7490` |
| `--cyan-800` | `#155E75` |
| `--cyan-900` | `#164E63` |
| `--cyan-950` | `#083344` |

### Indigo
| Token | Hex |
|-------|-----|
| `--indigo-50` | `#EEF2FF` |
| `--indigo-100` | `#E0E7FF` |
| `--indigo-200` | `#C7D2FE` |
| `--indigo-300` | `#A5B4FC` |
| `--indigo-400` | `#818CF8` |
| `--indigo-500` | `#6366F1` |
| `--indigo-600` | `#4F46E5` |
| `--indigo-700` | `#4338CA` |
| `--indigo-800` | `#3730A3` |
| `--indigo-900` | `#312E81` |
| `--indigo-950` | `#1E1B4B` |

### Lime
| Token | Hex |
|-------|-----|
| `--lime-50` | `#F4FDF0` |
| `--lime-100` | `#E7FCDC` |
| `--lime-200` | `#CFF7BB` |
| `--lime-300` | `#A9EF86` |
| `--lime-400` | `#7BDE4A` |
| `--lime-500` | `#58C522` |
| `--lime-600` | `#45A316` |
| `--lime-700` | `#398015` |
| `--lime-800` | `#306516` |
| `--lime-900` | `#214210` |
| `--lime-950` | `#132E05` |

### Orange
| Token | Hex |
|-------|-----|
| `--orange-50` | `#FFF3E5` |
| `--orange-100` | `#FFE5CC` |
| `--orange-200` | `#FFCB9E` |
| `--orange-300` | `#FFB56B` |
| `--orange-400` | `#FFA85C` |
| `--orange-500` | `#FF8D28` |
| `--orange-600` | `#EB740A` |
| `--orange-700` | `#B65C0C` |
| `--orange-800` | `#8D4301` |
| `--orange-900` | `#521F00` |
| `--orange-950` | `#300212` |

### Pink
| Token | Hex |
|-------|-----|
| `--pink-50` | `#FDF2F8` |
| `--pink-100` | `#FCE7F3` |
| `--pink-200` | `#FBCFE8` |
| `--pink-300` | `#F9ABD4` |
| `--pink-400` | `#F472B6` |
| `--pink-500` | `#EC4899` |
| `--pink-600` | `#DB2777` |
| `--pink-700` | `#BE185D` |
| `--pink-800` | `#9D174D` |
| `--pink-900` | `#831843` |
| `--pink-950` | `#500724` |

### Teal
| Token | Hex |
|-------|-----|
| `--teal-50` | `#EDFDFE` |
| `--teal-100` | `#D1FBFC` |
| `--teal-200` | `#A9EFFB` |
| `--teal-300` | `#6FE2F1` |
| `--teal-400` | `#29CEE7` |
| `--teal-500` | `#17B6D3` |
| `--teal-600` | `#0891B2` |
| `--teal-700` | `#0E7490` |
| `--teal-800` | `#155E75` |
| `--teal-900` | `#164E63` |
| `--teal-950` | `#083344` |

## Alpha Colors (with transparency)

These colors include alpha channel values for transparency effects.

### Amber Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--amber-a00` | `#F59E0B` | `0%` |
| `--amber-a50` | `#F59E0B` | `4%` |
| `--amber-a100` | `#F59E0B` | `8%` |
| `--amber-a200` | `#F59E0B` | `16%` |
| `--amber-a300` | `#F59E0B` | `24%` |
| `--amber-a400` | `#F59E0B` | `32%` |
| `--amber-a500` | `#F59E0B` | `48%` |
| `--amber-a600` | `#F59E0B` | `56%` |
| `--amber-a700` | `#F59E0B` | `64%` |
| `--amber-a800` | `#F59E0B` | `72%` |
| `--amber-a900` | `#F59E0B` | `84%` |
| `--amber-a950` | `#F59E0B` | `96%` |

### Blue Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--blue-a50` | `#3B82F6` | `4%` |
| `--blue-a100` | `#3B82F6` | `8%` |
| `--blue-a200` | `#3B82F6` | `16%` |
| `--blue-a300` | `#3B82F6` | `24%` |
| `--blue-a400` | `#3B82F6` | `32%` |
| `--blue-a500` | `#3B82F6` | `48%` |
| `--blue-a600` | `#3B82F6` | `56%` |
| `--blue-a700` | `#3B82F6` | `64%` |
| `--blue-a800` | `#3B82F6` | `72%` |
| `--blue-a900` | `#3B82F6` | `84%` |
| `--blue-a950` | `#3B82F6` | `96%` |

### Cyan Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--cyan-a50` | `#29CEE7` | `4%` |
| `--cyan-a100` | `#29CEE7` | `8%` |
| `--cyan-a200` | `#29CEE7` | `16%` |
| `--cyan-a300` | `#29CEE7` | `24%` |
| `--cyan-a400` | `#29CEE7` | `32%` |
| `--cyan-a500` | `#29CEE7` | `48%` |
| `--cyan-a600` | `#29CEE7` | `56%` |
| `--cyan-a700` | `#29CEE7` | `64%` |
| `--cyan-a800` | `#29CEE7` | `72%` |
| `--cyan-a900` | `#29CEE7` | `84%` |
| `--cyan-a950` | `#29CEE7` | `96%` |

### Green Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--green-a50` | `#4ADE80` | `4%` |
| `--green-a100` | `#4ADE80` | `8%` |
| `--green-a200` | `#4ADE80` | `16%` |
| `--green-a300` | `#4ADE80` | `24%` |
| `--green-a400` | `#4ADE80` | `32%` |
| `--green-a500` | `#4ADE80` | `48%` |
| `--green-a600` | `#4ADE80` | `56%` |
| `--green-a700` | `#4ADE80` | `64%` |
| `--green-a800` | `#4ADE80` | `72%` |
| `--green-a900` | `#4ADE80` | `84%` |
| `--green-a950` | `#4ADE80` | `96%` |

### Grey Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--grey-a00` | `#000000` | `0%` |
| `--grey-a50` | `#000000` | `5%` |
| `--grey-a100` | `#000000` | `10%` |
| `--grey-a150` | `#000000` | `15%` |
| `--grey-a200` | `#000000` | `20%` |
| `--grey-a300` | `#000000` | `30%` |
| `--grey-a400` | `#000000` | `40%` |
| `--grey-a500` | `#000000` | `50%` |
| `--grey-a600` | `#000000` | `60%` |
| `--grey-a700` | `#000000` | `70%` |
| `--grey-a800` | `#000000` | `80%` |
| `--grey-a900` | `#000000` | `90%` |
| `--grey-a950` | `#000000` | `95%` |

### Indigo Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--indigo-a00` | `#6366F1` | `0%` |
| `--indigo-a50` | `#6366F1` | `4%` |
| `--indigo-a100` | `#6366F1` | `8%` |
| `--indigo-a200` | `#6366F1` | `16%` |
| `--indigo-a300` | `#6366F1` | `24%` |
| `--indigo-a400` | `#6366F1` | `32%` |
| `--indigo-a500` | `#6366F1` | `48%` |
| `--indigo-a600` | `#6366F1` | `56%` |
| `--indigo-a700` | `#6366F1` | `64%` |
| `--indigo-a800` | `#6366F1` | `72%` |
| `--indigo-a900` | `#6366F1` | `84%` |
| `--indigo-a950` | `#6366F1` | `96%` |

### Lime Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--lime-a50` | `#58C522` | `4%` |
| `--lime-a100` | `#58C522` | `8%` |
| `--lime-a200` | `#58C522` | `16%` |
| `--lime-a300` | `#58C522` | `24%` |
| `--lime-a400` | `#58C522` | `32%` |
| `--lime-a500` | `#58C522` | `48%` |
| `--lime-a600` | `#58C522` | `56%` |
| `--lime-a700` | `#58C522` | `64%` |
| `--lime-a800` | `#58C522` | `72%` |
| `--lime-a900` | `#58C522` | `84%` |
| `--lime-a950` | `#58C522` | `96%` |

### Orange Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--orange-a50` | `#FF8D28` | `4%` |
| `--orange-a100` | `#FF8D28` | `8%` |
| `--orange-a200` | `#FF8D28` | `16%` |
| `--orange-a300` | `#FF8D28` | `24%` |
| `--orange-a400` | `#FF8D28` | `32%` |
| `--orange-a500` | `#FF8D28` | `48%` |
| `--orange-a600` | `#FF8D28` | `56%` |
| `--orange-a700` | `#FF8D28` | `64%` |
| `--orange-a800` | `#FF8D28` | `72%` |
| `--orange-a900` | `#FF8D28` | `84%` |
| `--orange-a950` | `#FF8D28` | `96%` |

### Pink Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--pink-a50` | `#EC4899` | `4%` |
| `--pink-a100` | `#EC4899` | `8%` |
| `--pink-a200` | `#EC4899` | `16%` |
| `--pink-a300` | `#EC4899` | `24%` |
| `--pink-a400` | `#EC4899` | `32%` |
| `--pink-a500` | `#EC4899` | `48%` |
| `--pink-a600` | `#EC4899` | `56%` |
| `--pink-a700` | `#EC4899` | `64%` |
| `--pink-a800` | `#EC4899` | `72%` |
| `--pink-a900` | `#EC4899` | `84%` |
| `--pink-a950` | `#EC4899` | `96%` |

### Purple Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--purple-a50` | `#9974F9` | `4%` |
| `--purple-a100` | `#9974F9` | `8%` |
| `--purple-a200` | `#9974F9` | `16%` |
| `--purple-a300` | `#9974F9` | `24%` |
| `--purple-a400` | `#9974F9` | `32%` |
| `--purple-a500` | `#9974F9` | `48%` |
| `--purple-a600` | `#9974F9` | `56%` |
| `--purple-a700` | `#9974F9` | `64%` |
| `--purple-a800` | `#9974F9` | `72%` |
| `--purple-a900` | `#9974F9` | `84%` |
| `--purple-a950` | `#9974F9` | `96%` |

### Red Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--red-a50` | `#EF4444` | `4%` |
| `--red-a100` | `#EF4444` | `8%` |
| `--red-a200` | `#EF4444` | `16%` |
| `--red-a300` | `#EF4444` | `24%` |
| `--red-a400` | `#EF4444` | `32%` |
| `--red-a500` | `#DC2626` | `48%` |
| `--red-a600` | `#DC2626` | `56%` |
| `--red-a700` | `#DC2626` | `64%` |
| `--red-a800` | `#DC2626` | `72%` |
| `--red-a900` | `#DC2626` | `84%` |
| `--red-a950` | `#DC2626` | `96%` |

### Teal Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--teal-a00` | `#17B6D3` | `0%` |
| `--teal-a50` | `#17B6D3` | `4%` |
| `--teal-a100` | `#17B6D3` | `8%` |
| `--teal-a200` | `#17B6D3` | `16%` |
| `--teal-a300` | `#17B6D3` | `24%` |
| `--teal-a400` | `#17B6D3` | `32%` |
| `--teal-a500` | `#17B6D3` | `48%` |
| `--teal-a600` | `#17B6D3` | `56%` |
| `--teal-a700` | `#17B6D3` | `64%` |
| `--teal-a800` | `#17B6D3` | `72%` |
| `--teal-a900` | `#17B6D3` | `84%` |
| `--teal-a950` | `#17B6D3` | `96%` |

### White Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--white-a00` | `#FFFFFF` | `0%` |
| `--white-a50` | `#FFFFFF` | `5%` |
| `--white-a100` | `#FFFFFF` | `10%` |
| `--white-a150` | `#FFFFFF` | `15%` |
| `--white-a200` | `#FFFFFF` | `20%` |
| `--white-a300` | `#FFFFFF` | `30%` |
| `--white-a400` | `#FFFFFF` | `40%` |
| `--white-a500` | `#FFFFFF` | `50%` |
| `--white-a600` | `#FFFFFF` | `60%` |
| `--white-a700` | `#FFFFFF` | `70%` |
| `--white-a800` | `#FFFFFF` | `80%` |
| `--white-a900` | `#FFFFFF` | `90%` |
| `--white-a950` | `#FFFFFF` | `95%` |

### Yellow Alpha
| Token | Hex | Alpha |
|-------|-----|-------|
| `--yellow-a50` | `#FFC300` | `4%` |
| `--yellow-a100` | `#FFC300` | `8%` |
| `--yellow-a200` | `#FFC300` | `16%` |
| `--yellow-a300` | `#FFC300` | `24%` |
| `--yellow-a400` | `#FFC300` | `32%` |
| `--yellow-a500` | `#FFC300` | `48%` |
| `--yellow-a600` | `#FFC300` | `56%` |
| `--yellow-a700` | `#FFC300` | `64%` |
| `--yellow-a800` | `#FFC300` | `72%` |
| `--yellow-a900` | `#FFC300` | `84%` |
| `--yellow-a950` | `#FFC300` | `96%` |


