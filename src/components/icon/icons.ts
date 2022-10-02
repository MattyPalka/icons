import { lazy as _lazy } from "react";

function lazy(importFn: Function) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  // Outline
  Add: lazy(async () => import("./assets/add.svg")),
  AddressBook: lazy(async () => import("./assets/address-book.svg")),
  AlarmClock: lazy(async () => import("./assets/alarm-clock.svg")),
  AlignCenter: lazy(async () => import("./assets/align-center.svg")),
  AlignJustify: lazy(async () => import("./assets/align-justify.svg")),
  AlignLeft: lazy(async () => import("./assets/align-left.svg")),
  AlignRight: lazy(async () => import("./assets/align-right.svg")),
  Ambulance: lazy(async () => import("./assets/ambulance.svg")),
  AngleDoubleLeft: lazy(async () => import("./assets/angle-double-left.svg")),
  AngleDoubleRight: lazy(async () => import("./assets/angle-double-right.svg")),
  AngleDoubleSmallLeft: lazy(
    async () => import("./assets/angle-double-small-left.svg")
  ),
  AngleDoubleSmallRight: lazy(
    async () => import("./assets/angle-double-small-right.svg")
  ),
  AngleUp: lazy(async () => import("./assets/angle-up.svg")),
  AngleDown: lazy(async () => import("./assets/angle-down.svg")),
  AngleLeft: lazy(async () => import("./assets/angle-left.svg")),
  AngleRight: lazy(async () => import("./assets/angle-right.svg")),
  Apple: lazy(async () => import("./assets/apple.svg")),

  Apps: lazy(async () => import("./assets/apps.svg")),
  AppsSort: lazy(async () => import("./assets/apps-sort.svg")),
  Archive: lazy(async () => import("./assets/archive.svg")),
  At: lazy(async () => import("./assets/at.svg")),

  Badge: lazy(async () => import("./assets/badge.svg")),

  Ban: lazy(async () => import("./assets/ban.svg")),
  Balloons: lazy(async () => import("./assets/balloons.svg")),
  BellRing: lazy(async () => import("./assets/bell-ring.svg")),
  Carrot: lazy(async () => import("./assets/carrot.svg")),
  CaretUp: lazy(async () => import("./assets/caret-up.svg")),
  CaretLeft: lazy(async () => import("./assets/caret-left.svg")),
  CaretDown: lazy(async () => import("./assets/caret-down.svg")),
  CaretRight: lazy(async () => import("./assets/caret-right.svg")),
  Check: lazy(async () => import("./assets/check.svg")),
  Clip: lazy(async () => import("./assets/clip.svg")),
  Coffee: lazy(async () => import("./assets/coffee.svg")),
  Dollar: lazy(async () => import("./assets/dollar.svg")),
  Duplicate: lazy(async () => import("./assets/duplicate.svg")),
  Eye: lazy(async () => import("./assets/eye.svg")),
  Folder: lazy(async () => import("./assets/folder.svg")),
  Gift: lazy(async () => import("./assets/gift.svg")),
  Link: lazy(async () => import("./assets/link.svg")),
  MenuDots: lazy(async () => import("./assets/menu-dots.svg")),
  Music: lazy(async () => import("./assets/music.svg")),
  Play: lazy(async () => import("./assets/play.svg")),

  Power: lazy(async () => import("./assets/power.svg")),
  Plus: lazy(async () => import("./assets/plus.svg")),
  Pound: lazy(async () => import("./assets/pound.svg")),
  Salad: lazy(async () => import("./assets/salad.svg")),
  Settings: lazy(async () => import("./assets/settings.svg")),

  Smile: lazy(async () => import("./assets/smile.svg")),
  SignIn: lazy(async () => import("./assets/sign-in.svg")),

  SignOut: lazy(async () => import("./assets/sign-out.svg")),
  TimeForward: lazy(async () => import("./assets/time-forward.svg")),

  Trophy: lazy(async () => import("./assets/trophy.svg")),
  Undo: lazy(async () => import("./assets/undo.svg")),
  User: lazy(async () => import("./assets/user.svg")),
  Key: lazy(async () => import("./assets/key.svg")),
  Yen: lazy(async () => import("./assets/yen.svg")),

  // Solids
  SolidCloud: lazy(async () => import("./assets/solid-cloud.svg")),
  SolidAmbulance: lazy(async () => import("./assets/solid-ambulance.svg")),
  SolidVolume: lazy(async () => import("./assets/solid-volume.svg")),
  SolidZoomIn: lazy(async () => import("./assets/solid-zoom-in.svg")),
  SolidZoomOut: lazy(async () => import("./assets/solid-zoom-out.svg")),
};
