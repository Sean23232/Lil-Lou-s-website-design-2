// Brand + contact constants
export const BUSINESS = {
  name: "Lil Lou's Courier & Tours",
  shortName: "Lil Lou's",
  tagline: "More Than Just a Ride. It's an Experience!",
  trustLine: "Safe • Reliable • Comfortable",
  secondaryLine: "Your Ride. Our Way.",
  phoneDisplay: "803-718-1119",
  phoneTel: "+18037181119",
  phoneSms: "+18037181119",
  // PLACEHOLDER: Replace with real email from flyer / business records
  email: "hello@lillouscouriertours.com",
  area: "Rock Hill & Columbia, SC",
  // PLACEHOLDER: Replace with real hours of operation
  hours: "Mon–Sun • Hours available on request",
};

// Stock image URLs used as placeholders until real photos are uploaded.
// Each entry is marked [PLACEHOLDER] so they are easy to find & swap.
// Using Pexels direct URLs with fit=crop for responsive performance.
const px = (id: string, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMAGES = {
  // [PLACEHOLDER] Replace with real photo of Lil Lou's tour/party bus
  heroBus: px("32330784", 1920, 1080),

  // [PLACEHOLDER] Replace with real bus exterior shots
  busExterior1: px("32330784", 1200, 800),
  busExterior2: px("8552649", 1200, 800),

  // [PLACEHOLDER] Replace with real party bus interior / group photos
  partyBus1: px("35496801", 1200, 800),
  partyBus2: px("29893552", 1200, 800),

  // [PLACEHOLDER] Replace with real courier / delivery vehicle photos
  courierVan: px("6407376", 1200, 800),
  courierDelivery: px("6169135", 1200, 800),

  // [PLACEHOLDER] Replace with real wheelchair accessible vehicle photo
  wheelchair: px("35831410", 1200, 800),
  wheelchair2: px("35831411", 1200, 800),

  // [PLACEHOLDER] Replace with real beach trip photo from the business
  beach: px("15916206", 1200, 800),
  beach2: px("15916211", 1200, 800),

  // [PLACEHOLDER] Replace with real driver / team photo
  driver: px("35788376", 1200, 800),
};

// Gallery items with alt text. All marked [PLACEHOLDER] until real photos uploaded.
export const GALLERY = [
  { src: IMAGES.busExterior1, alt: "[PLACEHOLDER] Lil Lou's tour bus exterior — replace with real photo" },
  { src: IMAGES.partyBus1, alt: "[PLACEHOLDER] Party bus interior with celebration lights — replace with real photo" },
  { src: IMAGES.partyBus2, alt: "[PLACEHOLDER] Friends enjoying a night out on the party bus — replace with real photo" },
  { src: IMAGES.courierVan, alt: "[PLACEHOLDER] White courier delivery van — replace with real photo" },
  { src: IMAGES.wheelchair, alt: "[PLACEHOLDER] Wheelchair accessible van with lift — replace with real photo" },
  { src: IMAGES.beach, alt: "[PLACEHOLDER] Beach sunset trip — replace with real photo" },
  { src: IMAGES.busExterior2, alt: "[PLACEHOLDER] Bus on the road — replace with real photo" },
  { src: IMAGES.driver, alt: "[PLACEHOLDER] Friendly driver — replace with real photo" },
];
