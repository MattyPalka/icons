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
  AngleDown: lazy(async () => import("./assets/angle-down.svg")),
  AngleLeft: lazy(async () => import("./assets/angle-left.svg")),
  AngleRight: lazy(async () => import("./assets/angle-right.svg")),
  AngleSmallDown: lazy(async () => import("./assets/angle-small-down.svg")),
  AngleSmallLeft: lazy(async () => import("./assets/angle-small-left.svg")),
  AngleSmallRight: lazy(async () => import("./assets/angle-small-right.svg")),
  AngleSmallUp: lazy(async () => import("./assets/angle-small-up.svg")),
  AngleUp: lazy(async () => import("./assets/angle-up.svg")),
  Apple: lazy(async () => import("./assets/apple.svg")),
  Apps: lazy(async () => import("./assets/apps.svg")),
  AppsAdd: lazy(async () => import("./assets/apps-add.svg")),
  AppsDelete: lazy(async () => import("./assets/apps-delete.svg")),
  AppsSort: lazy(async () => import("./assets/apps-sort.svg")),
  Archive: lazy(async () => import("./assets/archive.svg")),
  ArrowDown: lazy(async () => import("./assets/arrow-down.svg")),
  ArrowFromBottom: lazy(async () => import("./assets/arrow-from-bottom.svg")),
  ArrowLeft: lazy(async () => import("./assets/arrow-left.svg")),
  ArrowRight: lazy(async () => import("./assets/arrow-right.svg")),
  ArrowSmallDown: lazy(async () => import("./assets/arrow-small-down.svg")),
  ArrowSmallLeft: lazy(async () => import("./assets/arrow-small-left.svg")),
  ArrowSmallRight: lazy(async () => import("./assets/arrow-small-right.svg")),
  ArrowSmallUp: lazy(async () => import("./assets/arrow-small-up.svg")),
  ArrowUp: lazy(async () => import("./assets/arrow-up.svg")),
  Asterik: lazy(async () => import("./assets/asterik.svg")),
  At: lazy(async () => import("./assets/at.svg")),
  Badge: lazy(async () => import("./assets/badge.svg")),
  Balloons: lazy(async () => import("./assets/balloons.svg")),
  Ban: lazy(async () => import("./assets/ban.svg")),
  BandAid: lazy(async () => import("./assets/band-aid.svg")),
  Bank: lazy(async () => import("./assets/bank.svg")),
  BarberShop: lazy(async () => import("./assets/barber-shop.svg")),
  Baseball: lazy(async () => import("./assets/baseball.svg")),
  Basketball: lazy(async () => import("./assets/basketball.svg")),
  Bed: lazy(async () => import("./assets/bed.svg")),
  Beer: lazy(async () => import("./assets/beer.svg")),
  Bell: lazy(async () => import("./assets/bell.svg")),
  BellRing: lazy(async () => import("./assets/bell-ring.svg")),
  BellSchool: lazy(async () => import("./assets/bell-school.svg")),
  Bike: lazy(async () => import("./assets/bike.svg")),
  Billiard: lazy(async () => import("./assets/billiard.svg")),
  Bold: lazy(async () => import("./assets/bold.svg")),
  Book: lazy(async () => import("./assets/book.svg")),
  BookAlt: lazy(async () => import("./assets/book-alt.svg")),
  Bookmark: lazy(async () => import("./assets/bookmark.svg")),
  Bowling: lazy(async () => import("./assets/bowling.svg")),
  Box: lazy(async () => import("./assets/box.svg")),
  BoxAlt: lazy(async () => import("./assets/box-alt.svg")),
  BreadSlice: lazy(async () => import("./assets/bread-slice.svg")),
  Briefcase: lazy(async () => import("./assets/briefcase.svg")),
  Broom: lazy(async () => import("./assets/broom.svg")),
  Browser: lazy(async () => import("./assets/browser.svg")),
  Brush: lazy(async () => import("./assets/brush.svg")),
  Bug: lazy(async () => import("./assets/bug.svg")),
  Building: lazy(async () => import("./assets/building.svg")),
  Bulb: lazy(async () => import("./assets/bulb.svg")),
  Butterfly: lazy(async () => import("./assets/butterfly.svg")),
  Calculator: lazy(async () => import("./assets/calculator.svg")),
  Calendar: lazy(async () => import("./assets/calendar.svg")),
  CallIncoming: lazy(async () => import("./assets/call-incoming.svg")),
  Camera: lazy(async () => import("./assets/camera.svg")),
  Camping: lazy(async () => import("./assets/camping.svg")),
  Car: lazy(async () => import("./assets/car.svg")),
  CaretDown: lazy(async () => import("./assets/caret-down.svg")),
  CaretLeft: lazy(async () => import("./assets/caret-left.svg")),
  CaretRight: lazy(async () => import("./assets/caret-right.svg")),
  CaretUp: lazy(async () => import("./assets/caret-up.svg")),
  Carrot: lazy(async () => import("./assets/carrot.svg")),
  ChartArrowDown: lazy(async () => import("./assets/chart-arrow-down.svg")),
  ChartArrowGrow: lazy(async () => import("./assets/chart-arrow-grow.svg")),
  ChartConnected: lazy(async () => import("./assets/chart-connected.svg")),
  ChartHistogram: lazy(async () => import("./assets/chart-histogram.svg")),
  ChartNetwork: lazy(async () => import("./assets/chart-network.svg")),
  ChartPie: lazy(async () => import("./assets/chart-pie.svg")),
  ChartPieAlt: lazy(async () => import("./assets/chart-pie-alt.svg")),
  ChartPyramid: lazy(async () => import("./assets/chart-pyramid.svg")),
  ChartSetTheory: lazy(async () => import("./assets/chart-set-theory.svg")),
  ChartTree: lazy(async () => import("./assets/chart-tree.svg")),
  Check: lazy(async () => import("./assets/check.svg")),
  Checkbox: lazy(async () => import("./assets/checkbox.svg")),
  ChessPiece: lazy(async () => import("./assets/chess-piece.svg")),
  ChildHead: lazy(async () => import("./assets/child-head.svg")),
  Circle: lazy(async () => import("./assets/circle.svg")),
  Clip: lazy(async () => import("./assets/clip.svg")),
  Clock: lazy(async () => import("./assets/clock.svg")),
  Cloud: lazy(async () => import("./assets/cloud.svg")),
  CloudCheck: lazy(async () => import("./assets/cloud-check.svg")),
  CloudDisabled: lazy(async () => import("./assets/cloud-disabled.svg")),
  CloudDownload: lazy(async () => import("./assets/cloud-download.svg")),
  Clouds: lazy(async () => import("./assets/clouds.svg")),
  CloudShare: lazy(async () => import("./assets/cloud-share.svg")),
  CloudUpload: lazy(async () => import("./assets/cloud-upload.svg")),
  Cocktail: lazy(async () => import("./assets/cocktail.svg")),
  Coffee: lazy(async () => import("./assets/coffee.svg")),
  Comment: lazy(async () => import("./assets/comment.svg")),
  CommentAlt: lazy(async () => import("./assets/comment-alt.svg")),
  CommentCheck: lazy(async () => import("./assets/comment-check.svg")),
  CommentHeart: lazy(async () => import("./assets/comment-heart.svg")),
  CommentInfo: lazy(async () => import("./assets/comment-info.svg")),
  Comments: lazy(async () => import("./assets/comments.svg")),
  CommentUser: lazy(async () => import("./assets/comment-user.svg")),
  Compress: lazy(async () => import("./assets/compress.svg")),
  CompressAlt: lazy(async () => import("./assets/compress-alt.svg")),
  Computer: lazy(async () => import("./assets/computer.svg")),
  Confetti: lazy(async () => import("./assets/confetti.svg")),
  Cookie: lazy(async () => import("./assets/cookie.svg")),
  Copy: lazy(async () => import("./assets/copy.svg")),
  CopyAlt: lazy(async () => import("./assets/copy-alt.svg")),
  Copyright: lazy(async () => import("./assets/copyright.svg")),
  Cow: lazy(async () => import("./assets/cow.svg")),
  Cream: lazy(async () => import("./assets/cream.svg")),
  CreditCard: lazy(async () => import("./assets/credit-card.svg")),
  Croissant: lazy(async () => import("./assets/croissant.svg")),
  Cross: lazy(async () => import("./assets/cross.svg")),
  CrossCircle: lazy(async () => import("./assets/cross-circle.svg")),
  CrossSmall: lazy(async () => import("./assets/cross-small.svg")),
  Crown: lazy(async () => import("./assets/crown.svg")),
  Cube: lazy(async () => import("./assets/cube.svg")),
  Cupcake: lazy(async () => import("./assets/cupcake.svg")),
  Cursor: lazy(async () => import("./assets/cursor.svg")),
  CursorFinger: lazy(async () => import("./assets/cursor-finger.svg")),
  CursorPlus: lazy(async () => import("./assets/cursor-plus.svg")),
  CursorText: lazy(async () => import("./assets/cursor-text.svg")),
  CursorTextAlt: lazy(async () => import("./assets/cursor-text-alt.svg")),
  Dart: lazy(async () => import("./assets/dart.svg")),
  Dashboard: lazy(async () => import("./assets/dashboard.svg")),
  Database: lazy(async () => import("./assets/database.svg")),
  DataTransfer: lazy(async () => import("./assets/data-transfer.svg")),
  Delete: lazy(async () => import("./assets/delete.svg")),
  Diamond: lazy(async () => import("./assets/diamond.svg")),
  Dice: lazy(async () => import("./assets/dice.svg")),
  Diploma: lazy(async () => import("./assets/diploma.svg")),
  DiscoBall: lazy(async () => import("./assets/disco-ball.svg")),
  Disk: lazy(async () => import("./assets/disk.svg")),
  Doctor: lazy(async () => import("./assets/doctor.svg")),
  DocumentSigned: lazy(async () => import("./assets/document-signed.svg")),
  Dollar: lazy(async () => import("./assets/dollar.svg")),
  Download: lazy(async () => import("./assets/download.svg")),
  DrinkAlt: lazy(async () => import("./assets/drink-alt.svg")),
  Drumstick: lazy(async () => import("./assets/drumstick.svg")),
  Duplicate: lazy(async () => import("./assets/duplicate.svg")),
  Earnings: lazy(async () => import("./assets/earnings.svg")),
  Edit: lazy(async () => import("./assets/edit.svg")),
  Envelope: lazy(async () => import("./assets/envelope.svg")),
  Euro: lazy(async () => import("./assets/euro.svg")),
  Exclamation: lazy(async () => import("./assets/exclamation.svg")),
  Expand: lazy(async () => import("./assets/expand.svg")),
  Eye: lazy(async () => import("./assets/eye.svg")),
  Feather: lazy(async () => import("./assets/feather.svg")),
  File: lazy(async () => import("./assets/file.svg")),
  Fill: lazy(async () => import("./assets/fill.svg")),
  Film: lazy(async () => import("./assets/film.svg")),
  Filter: lazy(async () => import("./assets/filter.svg")),
  Fingerprint: lazy(async () => import("./assets/fingerprint.svg")),
  Fish: lazy(async () => import("./assets/fish.svg")),
  Flag: lazy(async () => import("./assets/flag.svg")),
  Flame: lazy(async () => import("./assets/flame.svg")),
  Flower: lazy(async () => import("./assets/flower.svg")),
  Folder: lazy(async () => import("./assets/folder.svg")),
  Following: lazy(async () => import("./assets/following.svg")),
  Football: lazy(async () => import("./assets/football.svg")),
  Form: lazy(async () => import("./assets/form.svg")),
  Forward: lazy(async () => import("./assets/forward.svg")),
  Fox: lazy(async () => import("./assets/fox.svg")),
  Frown: lazy(async () => import("./assets/frown.svg")),
  Ftp: lazy(async () => import("./assets/ftp.svg")),
  Gallery: lazy(async () => import("./assets/gallery.svg")),
  Gamepad: lazy(async () => import("./assets/gamepad.svg")),
  Gem: lazy(async () => import("./assets/gem.svg")),
  Gift: lazy(async () => import("./assets/gift.svg")),
  Glasses: lazy(async () => import("./assets/glasses.svg")),
  Globe: lazy(async () => import("./assets/globe.svg")),
  GraduationCap: lazy(async () => import("./assets/graduation-cap.svg")),
  Grid: lazy(async () => import("./assets/grid.svg")),
  GridAlt: lazy(async () => import("./assets/grid-alt.svg")),
  Guitar: lazy(async () => import("./assets/guitar.svg")),
  Gym: lazy(async () => import("./assets/gym.svg")),
  Hamburger: lazy(async () => import("./assets/hamburger.svg")),
  Hashtag: lazy(async () => import("./assets/hashtag.svg")),
  Headphones: lazy(async () => import("./assets/headphones.svg")),
  Headset: lazy(async () => import("./assets/headset.svg")),
  Heart: lazy(async () => import("./assets/heart.svg")),
  Home: lazy(async () => import("./assets/home.svg")),
  Hourglass: lazy(async () => import("./assets/hourglass.svg")),
  Inbox: lazy(async () => import("./assets/inbox.svg")),
  Indent: lazy(async () => import("./assets/indent.svg")),
  Incognito: lazy(async () => import("./assets/incognito.svg")),
  Infinity: lazy(async () => import("./assets/infinity.svg")),
  Info: lazy(async () => import("./assets/info.svg")),
  Interactive: lazy(async () => import("./assets/interactive.svg")),
  Interlining: lazy(async () => import("./assets/interlining.svg")),
  Interrogation: lazy(async () => import("./assets/interrogation.svg")),
  Italic: lazy(async () => import("./assets/italic.svg")),
  Jpg: lazy(async () => import("./assets/jpg.svg")),
  Key: lazy(async () => import("./assets/key.svg")),
  Keyboard: lazy(async () => import("./assets/keyboard.svg")),
  Kite: lazy(async () => import("./assets/kite.svg")),
  Label: lazy(async () => import("./assets/label.svg")),
  Laptop: lazy(async () => import("./assets/laptop.svg")),
  Lasso: lazy(async () => import("./assets/lasso.svg")),
  Laugh: lazy(async () => import("./assets/laugh.svg")),
  Layers: lazy(async () => import("./assets/layers.svg")),
  Leaf: lazy(async () => import("./assets/leaf.svg")),
  Link: lazy(async () => import("./assets/link.svg")),
  Lipstick: lazy(async () => import("./assets/lipstick.svg")),
  List: lazy(async () => import("./assets/list.svg")),
  Lock: lazy(async () => import("./assets/lock.svg")),
  Map: lazy(async () => import("./assets/map.svg")),
  Marker: lazy(async () => import("./assets/marker.svg")),
  MarkerTime: lazy(async () => import("./assets/marker-time.svg")),
  Mars: lazy(async () => import("./assets/mars.svg")),
  Medicine: lazy(async () => import("./assets/medicine.svg")),
  Megaphone: lazy(async () => import("./assets/megaphone.svg")),
  Meh: lazy(async () => import("./assets/meh.svg")),
  MenuBurger: lazy(async () => import("./assets/menu-burger.svg")),
  MenuDots: lazy(async () => import("./assets/menu-dots.svg")),
  Microphone: lazy(async () => import("./assets/microphone.svg")),
  MicrophoneAlt: lazy(async () => import("./assets/microphone-alt.svg")),
  Minus: lazy(async () => import("./assets/minus.svg")),
  MinusSmall: lazy(async () => import("./assets/minus-small.svg")),
  Mobile: lazy(async () => import("./assets/mobile.svg")),
  Money: lazy(async () => import("./assets/money.svg")),
  Moon: lazy(async () => import("./assets/moon.svg")),
  Mouse: lazy(async () => import("./assets/mouse.svg")),
  MugAlt: lazy(async () => import("./assets/mug-alt.svg")),
  Music: lazy(async () => import("./assets/music.svg")),
  Navigation: lazy(async () => import("./assets/navigation.svg")),
  Network: lazy(async () => import("./assets/network.svg")),
  Notebook: lazy(async () => import("./assets/notebook.svg")),
  Opacity: lazy(async () => import("./assets/opacity.svg")),
  Package: lazy(async () => import("./assets/package.svg")),
  Palette: lazy(async () => import("./assets/palette.svg")),
  PaperPlane: lazy(async () => import("./assets/paper-plane.svg")),
  Password: lazy(async () => import("./assets/password.svg")),
  Pause: lazy(async () => import("./assets/pause.svg")),
  Paw: lazy(async () => import("./assets/paw.svg")),
  Pencil: lazy(async () => import("./assets/pencil.svg")),
  Pharmacy: lazy(async () => import("./assets/pharmacy.svg")),
  PhoneCall: lazy(async () => import("./assets/phone-call.svg")),
  PhoneCross: lazy(async () => import("./assets/phone-cross.svg")),
  PhonePause: lazy(async () => import("./assets/phone-pause.svg")),
  PhoneSlash: lazy(async () => import("./assets/phone-slash.svg")),
  Physics: lazy(async () => import("./assets/physics.svg")),
  Picture: lazy(async () => import("./assets/picture.svg")),
  PingPong: lazy(async () => import("./assets/ping-pong.svg")),
  Plane: lazy(async () => import("./assets/plane.svg")),
  Play: lazy(async () => import("./assets/play.svg")),
  PlayAlt: lazy(async () => import("./assets/play-alt.svg")),
  PlayingCards: lazy(async () => import("./assets/playing-cards.svg")),
  Plus: lazy(async () => import("./assets/plus.svg")),
  PokerChip: lazy(async () => import("./assets/poker-chip.svg")),
  Portrait: lazy(async () => import("./assets/portrait.svg")),
  Pound: lazy(async () => import("./assets/pound.svg")),
  Power: lazy(async () => import("./assets/power.svg")),
  Presentation: lazy(async () => import("./assets/presentation.svg")),
  Print: lazy(async () => import("./assets/print.svg")),
  Protractor: lazy(async () => import("./assets/protractor.svg")),
  Pulse: lazy(async () => import("./assets/pulse.svg")),
  Pyramid: lazy(async () => import("./assets/pyramid.svg")),
  QuoteRight: lazy(async () => import("./assets/quote-right.svg")),
  Rainbow: lazy(async () => import("./assets/rainbow.svg")),
  Raindrops: lazy(async () => import("./assets/raindrops.svg")),
  Rec: lazy(async () => import("./assets/rec.svg")),
  Receipt: lazy(async () => import("./assets/receipt.svg")),
  Recycle: lazy(async () => import("./assets/recycle.svg")),
  Redo: lazy(async () => import("./assets/redo.svg")),
  Reflect: lazy(async () => import("./assets/reflect.svg")),
  Refresh: lazy(async () => import("./assets/refresh.svg")),
  Resize: lazy(async () => import("./assets/resize.svg")),
  Resources: lazy(async () => import("./assets/resources.svg")),
  Rewind: lazy(async () => import("./assets/rewind.svg")),
  Rhombus: lazy(async () => import("./assets/rhombus.svg")),
  Road: lazy(async () => import("./assets/road.svg")),
  Rocket: lazy(async () => import("./assets/rocket.svg")),
  Rugby: lazy(async () => import("./assets/rugby.svg")),
  Sad: lazy(async () => import("./assets/sad.svg")),
  Salad: lazy(async () => import("./assets/salad.svg")),
  Scale: lazy(async () => import("./assets/scale.svg")),
  School: lazy(async () => import("./assets/school.svg")),
  Scissors: lazy(async () => import("./assets/scissors.svg")),
  Screen: lazy(async () => import("./assets/screen.svg")),
  Search: lazy(async () => import("./assets/search.svg")),
  Settings: lazy(async () => import("./assets/settings.svg")),
  Share: lazy(async () => import("./assets/share.svg")),
  Shield: lazy(async () => import("./assets/shield.svg")),
  Ship: lazy(async () => import("./assets/ship.svg")),
  Shop: lazy(async () => import("./assets/shop.svg")),
  Shuffle: lazy(async () => import("./assets/shuffle.svg")),
  SignIn: lazy(async () => import("./assets/sign-in.svg")),
  SignOut: lazy(async () => import("./assets/sign-out.svg")),
  Skateboard: lazy(async () => import("./assets/skateboard.svg")),
  Smartphone: lazy(async () => import("./assets/smartphone.svg")),
  Smile: lazy(async () => import("./assets/smile.svg")),
  Snowflake: lazy(async () => import("./assets/snowflake.svg")),
  Soap: lazy(async () => import("./assets/soap.svg")),
  Soup: lazy(async () => import("./assets/soup.svg")),
  Spa: lazy(async () => import("./assets/spa.svg")),
  Speaker: lazy(async () => import("./assets/speaker.svg")),
  Sphere: lazy(async () => import("./assets/sphere.svg")),
  Spinner: lazy(async () => import("./assets/spinner.svg")),
  Square: lazy(async () => import("./assets/square.svg")),
  Star: lazy(async () => import("./assets/star.svg")),
  Stats: lazy(async () => import("./assets/stats.svg")),
  Stethoscope: lazy(async () => import("./assets/stethoscope.svg")),
  Sticker: lazy(async () => import("./assets/sticker.svg")),
  Stop: lazy(async () => import("./assets/stop.svg")),
  Stopwatch: lazy(async () => import("./assets/stopwatch.svg")),
  Subtitles: lazy(async () => import("./assets/subtitles.svg")),
  Sun: lazy(async () => import("./assets/sun.svg")),
  Sunrise: lazy(async () => import("./assets/sunrise.svg")),
  Sword: lazy(async () => import("./assets/sword.svg")),
  Syringe: lazy(async () => import("./assets/syringe.svg")),
  Tablet: lazy(async () => import("./assets/tablet.svg")),
  Target: lazy(async () => import("./assets/target.svg")),
  Taxi: lazy(async () => import("./assets/taxi.svg")),
  Tennis: lazy(async () => import("./assets/tennis.svg")),
  Terrace: lazy(async () => import("./assets/terrace.svg")),
  Test: lazy(async () => import("./assets/test.svg")),
  Text: lazy(async () => import("./assets/text.svg")),
  ThumbsUp: lazy(async () => import("./assets/thumbs-up.svg")),
  Thumbtack: lazy(async () => import("./assets/thumbtack.svg")),
  Ticket: lazy(async () => import("./assets/ticket.svg")),
  TimeForward: lazy(async () => import("./assets/time-forward.svg")),
  Tooth: lazy(async () => import("./assets/tooth.svg")),
  Tornado: lazy(async () => import("./assets/tornado.svg")),
  Transform: lazy(async () => import("./assets/transform.svg")),
  Trash: lazy(async () => import("./assets/trash.svg")),
  Treatment: lazy(async () => import("./assets/treatment.svg")),
  Tree: lazy(async () => import("./assets/tree.svg")),
  Triangle: lazy(async () => import("./assets/triangle.svg")),
  Trophy: lazy(async () => import("./assets/trophy.svg")),
  Umbrella: lazy(async () => import("./assets/umbrella.svg")),
  Underline: lazy(async () => import("./assets/underline.svg")),
  Undo: lazy(async () => import("./assets/undo.svg")),
  Unlock: lazy(async () => import("./assets/unlock.svg")),
  Upload: lazy(async () => import("./assets/upload.svg")),
  User: lazy(async () => import("./assets/user.svg")),
  Utensils: lazy(async () => import("./assets/utensils.svg")),
  Vector: lazy(async () => import("./assets/vector.svg")),
  Venus: lazy(async () => import("./assets/venus.svg")),
  Volleyball: lazy(async () => import("./assets/volleyball.svg")),
  Volume: lazy(async () => import("./assets/volume.svg")),
  Wheelchair: lazy(async () => import("./assets/wheelchair.svg")),
  Wind: lazy(async () => import("./assets/wind.svg")),
  World: lazy(async () => import("./assets/world.svg")),
  Yen: lazy(async () => import("./assets/yen.svg")),

  // Solids

  SolidLabel: lazy(async () => import("./assets/solid-label.svg")),
  SolidCloud: lazy(async () => import("./assets/solid-cloud.svg")),
  SolidAmbulance: lazy(async () => import("./assets/solid-ambulance.svg")),
  SolidVolume: lazy(async () => import("./assets/solid-volume.svg")),
  SolidZoomIn: lazy(async () => import("./assets/solid-zoom-in.svg")),
  SolidZoomOut: lazy(async () => import("./assets/solid-zoom-out.svg")),
};
