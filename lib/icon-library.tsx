/**
 * ACKO Icon library reference.
 *
 * Source bucket (Cloudflare R2):
 *   https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev/Outline/<filename>
 *
 * All icons are 24×24 SVGs with rounded strokes (1.5px) from the ACKO icon set.
 * Total library: 313 icons. This page displays a curated selection of 24.
 */

import Image from "next/image";
import type { ReactNode } from "react";

export const ICON_BUCKET =
  "https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev/Outline";

export type LibraryIcon = {
  /** Icon filename (e.g., "Home.svg") */
  filename: string;
  /** Friendly label for the tile caption. */
  label: string;
  /** Render function — returns Next.js Image component loading from R2. */
  render: () => ReactNode;
};

/** Six rows × four columns = 24 glyphs, grouped by intent. */
export const iconLibrary: LibraryIcon[] = [
  // ── Navigation & wayfinding ─────────────────────────────────────────
  {
    filename: "Home.svg",
    label: "Home",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Home.svg`}
        alt="Home"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Menu -03.svg",
    label: "Menu",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Menu%20-03.svg`}
        alt="Menu"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "ArrowRight.svg",
    label: "Arrow right",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/ArrowRight.svg`}
        alt="Arrow right"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Notification.svg",
    label: "Notifications",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Notification.svg`}
        alt="Notifications"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },

  // ── People & settings ───────────────────────────────────────────────
  {
    filename: "Add user.svg",
    label: "Add user",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Add%20user.svg`}
        alt="Add user"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "settings.svg",
    label: "Settings",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/settings.svg`}
        alt="Settings"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Engine_protect.svg",
    label: "Protection",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Engine_protect.svg`}
        alt="Protection"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "wallet.svg",
    label: "Wallet",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/wallet.svg`}
        alt="Wallet"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },

  // ── Insurance & journey ─────────────────────────────────────────────
  {
    filename: "Add Car.svg",
    label: "Car",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Add%20Car.svg`}
        alt="Car"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Ambulance.svg",
    label: "Ambulance",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Ambulance.svg`}
        alt="Ambulance"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "hospital.svg",
    label: "Hospital",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/hospital.svg`}
        alt="Hospital"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Airplane.svg",
    label: "Travel",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Airplane.svg`}
        alt="Travel"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },

  // ── Actions ─────────────────────────────────────────────────────────
  {
    filename: "Tick.svg",
    label: "Check",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Tick.svg`}
        alt="Check"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Download.svg",
    label: "Download",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Download.svg`}
        alt="Download"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Share.svg",
    label: "Share",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Share.svg`}
        alt="Share"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "ClipboardEdit.svg",
    label: "Edit",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/ClipboardEdit.svg`}
        alt="Edit"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },

  // ── Communication ───────────────────────────────────────────────────
  {
    filename: "Broken Phone.svg",
    label: "Phone",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Broken%20Phone.svg`}
        alt="Phone"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Messages.svg",
    label: "Messages",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Messages.svg`}
        alt="Messages"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Mail.svg",
    label: "Mail",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Mail.svg`}
        alt="Mail"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "Info-1.svg",
    label: "Info",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/Info-1.svg`}
        alt="Info"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },

  // ── Content & objects ───────────────────────────────────────────────
  {
    filename: "calendar-days.svg",
    label: "Calendar",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/calendar-days.svg`}
        alt="Calendar"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "alarm-clock.svg",
    label: "Clock",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/alarm-clock.svg`}
        alt="Clock"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "File.svg",
    label: "Document",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/File.svg`}
        alt="Document"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
  {
    filename: "image-depth.svg",
    label: "Image",
    render: () => (
      <Image
        src={`${ICON_BUCKET}/image-depth.svg`}
        alt="Image"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
  },
];
