export type PlantCategory = "indoor" | "succulents" | "balcony" | "flowering";
export type PotCategory =
  | "plastic"
  | "ceramic"
  | "roto-moulded"
  | "iron"
  | "metal-stands";

export interface Plant {
  id: string;
  name: string;
  category: PlantCategory;
  image: string;
  price: number | null;
  description?: string;
}

export interface PotVariant {
  size: string;
  price: number | null;
}

export interface Pot {
  id: string;
  code: string;
  name: string;
  category: PotCategory;
  image: string;
  variants: PotVariant[];
  description?: string;
}

export const PLANT_CATEGORIES: { value: PlantCategory; label: string }[] = [
  { value: "indoor", label: "Indoor" },
  { value: "balcony", label: "Balcony" },
  { value: "flowering", label: "Flowering" },
  { value: "succulents", label: "Succulents" },
];

export const POT_CATEGORIES: { value: PotCategory; label: string }[] = [
  { value: "plastic", label: "Plastic" },
  { value: "ceramic", label: "Ceramic" },
  { value: "roto-moulded", label: "Roto Moulded" },
  { value: "iron", label: "Iron" },
  { value: "metal-stands", label: "Metal Stands" },
];

export const plants: Plant[] = [
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    category: "indoor",
    image: "/images/plants/rubber-plant.jpg",
    price: null,
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "indoor",
    image: "/images/plants/snake-plant.jpg",
    price: null,
  },
  {
    id: "peperomia",
    name: "Peperomia",
    category: "indoor",
    image: "/images/plants/peperomia.jpg",
    price: null,
  },
  {
    id: "monstera",
    name: "Monstera",
    category: "indoor",
    image: "/images/plants/monstera.jpg",
    price: null,
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    category: "indoor",
    image: "/images/plants/peace-lily.jpg",
    price: null,
  },
  {
    id: "anthurium-red",
    name: "Anthurium Red",
    category: "flowering",
    image: "/images/plants/anthurium-red.jpg",
    price: null,
  },
  {
    id: "aralia",
    name: "Aralia",
    category: "indoor",
    image: "/images/plants/aralia.jpg",
    price: null,
  },
  {
    id: "aglonema",
    name: "Aglonema",
    category: "indoor",
    image: "/images/plants/aglonema.jpg",
    price: null,
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    category: "indoor",
    image: "/images/plants/zz-plant.jpg",
    price: null,
  },
  {
    id: "table-palm",
    name: "Table Palm",
    category: "indoor",
    image: "/images/plants/table-palm.jpg",
    price: null,
  },
  {
    id: "pedilanthus",
    name: "Pedilanthus",
    category: "indoor",
    image: "/images/plants/pedilanthus.jpg",
    price: null,
  },
  {
    id: "lipstick-plant",
    name: "Lipstick Plant",
    category: "indoor",
    image: "/images/plants/lipstick-plant.jpg",
    price: null,
  },
  {
    id: "pothos",
    name: "Pothos",
    category: "indoor",
    image: "/images/plants/pothos.jpg",
    price: null,
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    category: "indoor",
    image: "/images/plants/fiddle-leaf-fig.jpg",
    price: null,
  },
  {
    id: "aglaonema",
    name: "Aglaonema",
    category: "indoor",
    image: "/images/plants/aglaonema.jpg",
    price: null,
  },
  {
    id: "jade",
    name: "Jade",
    category: "succulents",
    image: "/images/plants/jade.jpg",
    price: null,
  },
  {
    id: "aloe",
    name: "Aloe",
    category: "succulents",
    image: "/images/plants/aloe.jpg",
    price: null,
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    category: "indoor",
    image: "/images/plants/areca-palm.jpg",
    price: null,
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    category: "indoor",
    image: "/images/plants/bird-of-paradise.jpg",
    price: null,
  },
  {
    id: "thulasi",
    name: "Thulasi",
    category: "balcony",
    image: "/images/plants/thulasi.jpg",
    price: null,
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    category: "flowering",
    image: "/images/plants/hibiscus.jpg",
    price: null,
  },
  {
    id: "ixora",
    name: "Ixora",
    category: "flowering",
    image: "/images/plants/ixora.jpg",
    price: null,
  },
  {
    id: "plumeria",
    name: "Plumeria",
    category: "flowering",
    image: "/images/plants/plumeria.jpg",
    price: null,
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    category: "flowering",
    image: "/images/plants/bougainvillea.jpg",
    price: null,
  },
  {
    id: "portulaca",
    name: "Portulaca (Table Rose)",
    category: "flowering",
    image: "/images/plants/portulaca.jpg",
    price: null,
  },
  {
    id: "adenium",
    name: "Adenium",
    category: "flowering",
    image: "/images/plants/adenium.jpg",
    price: null,
  },
  {
    id: "jasmine",
    name: "Jasmine",
    category: "flowering",
    image: "/images/plants/jasmine.jpg",
    price: null,
  },
];

export const pots: Pot[] = [
  // ── Plastic Pots (verified from PDF) ──
  { id: "ll-pla001", code: "LL-PLA001", name: "Round Hanging Balcony Planter", category: "plastic", image: "/images/pots/pot-001.jpg", variants: [{ size: '6"', price: 169 }] },
  { id: "ll-pla002", code: "LL-PLA002", name: "Square Hanging Balcony Planter", category: "plastic", image: "/images/pots/pot-002.jpg", variants: [{ size: '8"', price: 199 }] },
  { id: "ll-pla003", code: "LL-PLA003", name: "Rectangular Hanging Balcony Planter", category: "plastic", image: "/images/pots/pot-003.jpg", variants: [{ size: '6"', price: 299 }] },
  { id: "ll-pla004", code: "LL-PLA004", name: "Rectangular Planter Box with Tray", category: "plastic", image: "/images/pots/pot-004.jpg", variants: [
    { size: '12" Planter', price: 100 },
    { size: '17" Planter', price: 250 },
    { size: '12" Tray', price: 35 },
    { size: '17" Tray', price: 80 },
  ] },
  { id: "ll-pla005", code: "LL-PLA005", name: "Decorative Round Flower Pot", category: "plastic", image: "/images/pots/pot-005.jpg", variants: [{ size: '5"', price: 130 }] },
  { id: "ll-pla006", code: "LL-PLA006", name: "Indoor Outdoor Round Planter", category: "plastic", image: "/images/pots/pot-006.jpg", variants: [
    { size: '3"', price: 49 },
    { size: '5"', price: 99 },
    { size: '6"', price: 129 },
    { size: '8"', price: 199 },
    { size: '10"', price: 299 },
  ] },
  { id: "ll-pla007", code: "LL-PLA007", name: "Kit Pot", category: "plastic", image: "/images/pots/pot-007.jpg", variants: [
    { size: '5"', price: 39 },
    { size: '6"', price: 49 },
    { size: '8"', price: 79 },
    { size: '10"', price: 110 },
  ] },
  { id: "ll-pla008", code: "LL-PLA008", name: "Pedestal Flower Vases / Urn Planters", category: "plastic", image: "/images/pots/pot-008.jpg", variants: [
    { size: '6"', price: 199 },
    { size: '8"', price: 299 },
  ] },
  { id: "ll-pla009", code: "LL-PLA009", name: "Black Round Premium Planter", category: "plastic", image: "/images/pots/pla009.jpg", variants: [
    { size: '5"', price: 25 },
    { size: '6"', price: 30 },
    { size: '7"', price: 50 },
    { size: '8"', price: 70 },
    { size: '10"', price: 90 },
    { size: '12"', price: 150 },
  ] },
  { id: "ll-pla010", code: "LL-PLA010", name: "Terracotta Round Premium Planter", category: "plastic", image: "/images/pots/pla010.jpg", variants: [
    { size: '5"', price: 35 },
    { size: '6"', price: 40 },
    { size: '7"', price: 60 },
    { size: '8"', price: 80 },
    { size: '10"', price: 100 },
    { size: '12"', price: 160 },
  ] },
  { id: "ll-pla011", code: "LL-PLA011", name: "Square Premium Planter", category: "plastic", image: "/images/pots/pot-009.jpg", variants: [
    { size: '8"', price: 79 },
    { size: '10"', price: 139 },
    { size: '12"', price: 159 },
  ] },
  { id: "ll-pla012", code: "LL-PLA012", name: "Square Premium Planter (Variant)", category: "plastic", image: "/images/pots/pot-010.jpg", variants: [
    { size: '8"', price: 99 },
    { size: '10"', price: 159 },
  ] },
  { id: "ll-pla013", code: "LL-PLA013", name: "Balcony Railing Planter", category: "plastic", image: "/images/pots/pot-011.jpg", variants: [{ size: "Standard", price: 500 }] },
  { id: "ll-pla014", code: "LL-PLA014", name: "Hanging Pot", category: "plastic", image: "/images/pots/pot-012.jpg", variants: [
    { size: "Small", price: 60 },
    { size: "Large", price: 80 },
  ] },
  { id: "ll-pla015", code: "LL-PLA015", name: "Diamond Hanging Pot", category: "plastic", image: "/images/pots/pot-013.jpg", variants: [{ size: "Standard", price: 80 }] },
  { id: "ll-pla016", code: "LL-PLA016", name: "Round Tray (Black)", category: "plastic", image: "/images/pots/pot-014.jpg", variants: [
    { size: '6"', price: 20 },
    { size: '8"', price: 25 },
    { size: '10"', price: 35 },
  ] },
  { id: "ll-pla017", code: "LL-PLA017", name: "Round Tray (Terracotta)", category: "plastic", image: "/images/pots/pot-015.jpg", variants: [
    { size: '6"', price: 25 },
    { size: '8"', price: 29 },
    { size: '10"', price: 45 },
  ] },
  { id: "ll-pla018", code: "LL-PLA018", name: "Square Tray (Black)", category: "plastic", image: "/images/pots/pot-016.jpg", variants: [
    { size: '8"', price: 30 },
    { size: '10"', price: 40 },
    { size: '12"', price: 55 },
  ] },
  { id: "ll-pla019", code: "LL-PLA019", name: "Square Tray (Terracotta)", category: "plastic", image: "/images/pots/pot-017.jpg", variants: [
    { size: '8"', price: 40 },
    { size: '10"', price: 50 },
  ] },
  { id: "ll-pla020", code: "LL-PLA020", name: "Wave Pot", category: "plastic", image: "/images/pots/pot-018.jpg", variants: [{ size: '12"', price: 499 }] },
  { id: "ll-pla021", code: "LL-PLA021", name: "Square Pot", category: "plastic", image: "/images/pots/pot-019.jpg", variants: [
    { size: '3"', price: null },
    { size: '5"', price: null },
    { size: '6"', price: null },
    { size: '8"', price: null },
    { size: '10"', price: null },
  ] },
  { id: "ll-pla022", code: "LL-PLA022", name: "Triangle Pot", category: "plastic", image: "/images/pots/pot-020.jpg", variants: [
    { size: '3"', price: null },
    { size: '5"', price: null },
    { size: '6"', price: null },
    { size: '8"', price: null },
    { size: '10"', price: null },
  ] },
  // ── Ceramic Pots (PDF has codes and sizes only, no names or prices) ──
  { id: "ll-cer001", code: "LL-CER001", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-021.jpg", variants: [{ size: '4"', price: null }] },
  { id: "ll-cer002", code: "LL-CER002", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-022.jpg", variants: [{ size: '4"', price: null }, { size: '7"', price: null }] },
  { id: "ll-cer003", code: "LL-CER003", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-023.jpg", variants: [{ size: '3"', price: null }] },
  { id: "ll-cer004", code: "LL-CER004", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-024.jpg", variants: [{ size: '5"', price: null }] },
  { id: "ll-cer005", code: "LL-CER005", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-025.jpg", variants: [{ size: '5"', price: null }] },
  { id: "ll-cer006", code: "LL-CER006", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-026.jpg", variants: [{ size: '8"', price: null }] },
  { id: "ll-cer007", code: "LL-CER007", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-027.jpg", variants: [{ size: '6"', price: null }, { size: '7"', price: null }, { size: '8"', price: null }] },
  { id: "ll-cer008", code: "LL-CER008", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-028.jpg", variants: [{ size: '7"', price: null }, { size: '8"', price: null }] },
  { id: "ll-cer009", code: "LL-CER009", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-029.jpg", variants: [{ size: '7"', price: null }] },
  { id: "ll-cer010", code: "LL-CER010", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-030.jpg", variants: [{ size: '7" x 4"', price: null }] },
  { id: "ll-cer011", code: "LL-CER011", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-031.jpg", variants: [{ size: '5"', price: null }] },
  { id: "ll-cer012", code: "LL-CER012", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-032.jpg", variants: [{ size: '8"', price: null }] },
  { id: "ll-cer013", code: "LL-CER013", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-033.jpg", variants: [{ size: '3"', price: null }] },
  { id: "ll-cer014", code: "LL-CER014", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-034.jpg", variants: [{ size: '3"', price: null }] },
  { id: "ll-cer015", code: "LL-CER015", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-035.jpg", variants: [{ size: '4"', price: null }] },
  { id: "ll-cer016", code: "LL-CER016", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-036.jpg", variants: [{ size: '5"', price: null }] },
  { id: "ll-cer017", code: "LL-CER017", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-037.jpg", variants: [{ size: '4"', price: null }, { size: '5"', price: null }, { size: '6"', price: null }] },
  // ── Roto Moulded Pots (PDF has names and sizes only, no prices) ──
  { id: "ll-roto001", code: "LL-ROTO001", name: "Blo-Jas Lotus Pot", category: "roto-moulded", image: "/images/pots/pot-038.jpg", variants: [{ size: '30" x 12"', price: null }] },
  { id: "ll-roto002", code: "LL-ROTO002", name: "Tulsi Pot", category: "roto-moulded", image: "/images/pots/pot-039.jpg", variants: [{ size: '12" x 12"', price: null }, { size: '16" x 24"', price: null }] },
  { id: "ll-roto003", code: "LL-ROTO003", name: "Rhino", category: "roto-moulded", image: "/images/pots/pot-040.jpg", variants: [{ size: '24" x 12" x 11"', price: null }, { size: '36" x 12" x 11"', price: null }] },
  { id: "ll-roto004", code: "LL-ROTO004", name: "Small Boat", category: "roto-moulded", image: "/images/pots/pot-041.jpg", variants: [{ size: '24" x 12" x 12"', price: null }] },
  { id: "ll-roto005", code: "LL-ROTO005", name: "Tublo", category: "roto-moulded", image: "/images/pots/pot-042.jpg", variants: [{ size: '18" x 11" x 8"', price: null }, { size: '24" x 14" x 10"', price: null }] },
  { id: "ll-roto006", code: "LL-ROTO006", name: "Zen", category: "roto-moulded", image: "/images/pots/pot-043.jpg", variants: [{ size: '24" x 10" x 13"', price: null }] },
  { id: "ll-roto007", code: "LL-ROTO007", name: "Fantasy", category: "roto-moulded", image: "/images/pots/pot-044.jpg", variants: [{ size: '28" x 14" x 14"', price: null }] },
  { id: "ll-roto008", code: "LL-ROTO008", name: "Blo-Tulip", category: "roto-moulded", image: "/images/pots/pot-045.jpg", variants: [{ size: '14" x 9.5" x 18"', price: null }] },
  { id: "ll-roto009", code: "LL-ROTO009", name: "Blo-Vista", category: "roto-moulded", image: "/images/pots/pot-046.jpg", variants: [{ size: '39" x 12" x 8"', price: null }] },
  { id: "ll-roto010", code: "LL-ROTO010", name: "Blo-Rombus", category: "roto-moulded", image: "/images/pots/pot-047.jpg", variants: [
    { size: '10" x 7" x 9"', price: null },
    { size: '12" x 9.5" x 11"', price: null },
    { size: '14" x 10.5" x 12"', price: null },
    { size: '15.5" x 12" x 13.5"', price: null },
    { size: '18" x 13.5" x 16"', price: null },
  ] },
  { id: "ll-roto011", code: "LL-ROTO011", name: "Blo-Pentas", category: "roto-moulded", image: "/images/pots/pot-048.jpg", variants: [
    { size: '10" x 7" x 9"', price: null },
    { size: '12" x 9" x 10"', price: null },
    { size: '14" x 10" x 12"', price: null },
    { size: '16" x 12" x 13"', price: null },
    { size: '18" x 12.5" x 15"', price: null },
  ] },
  { id: "ll-roto012", code: "LL-ROTO012", name: "Blo-Rectek", category: "roto-moulded", image: "/images/pots/pot-049.jpg", variants: [
    { size: '16" x 8" x 8"', price: null },
    { size: '20" x 10" x 10"', price: null },
    { size: '24" x 12" x 12"', price: null },
    { size: '36" x 13" x 15"', price: null },
    { size: '40" x 20" x 20"', price: null },
  ] },
  { id: "ll-roto013", code: "LL-ROTO013", name: "Blo-Floral", category: "roto-moulded", image: "/images/pots/pot-050.jpg", variants: [
    { size: '12" x 10" x 8"', price: null },
    { size: '15" x 12" x 9"', price: null },
    { size: '17" x 14" x 10"', price: null },
    { size: '20" x 17" x 13"', price: null },
    { size: '24" x 21" x 16"', price: null },
    { size: '29" x 25" x 19"', price: null },
    { size: '44" x 34" x 26"', price: null },
  ] },
  { id: "ll-roto014", code: "LL-ROTO014", name: "Blo-Crystal", category: "roto-moulded", image: "/images/pots/pot-051.jpg", variants: [
    { size: '13" x 9.5" x 10"', price: null },
    { size: '17" x 13" x 14"', price: null },
    { size: '20" x 15" x 17"', price: null },
    { size: '24" x 18" x 20"', price: null },
    { size: '30" x 23" x 25"', price: null },
  ] },
  { id: "ll-roto015", code: "LL-ROTO015", name: "Octopus", category: "roto-moulded", image: "/images/pots/pot-052.jpg", variants: [{ size: '11" x 11" x 15"', price: null }] },
  { id: "ll-roto016", code: "LL-ROTO016", name: "Fortune", category: "roto-moulded", image: "/images/pots/pot-053.jpg", variants: [
    { size: '16" x 11" x 12"', price: null },
    { size: '20" x 14.5" x 15"', price: null },
    { size: '24" x 17.5" x 18"', price: null },
    { size: '32" x 24" x 24"', price: null },
  ] },
  { id: "ll-roto017", code: "LL-ROTO017", name: "Cano", category: "roto-moulded", image: "/images/pots/pot-054.jpg", variants: [{ size: '14" x 14" x 13"', price: null }] },
  { id: "ll-roto018", code: "LL-ROTO018", name: "Seltos", category: "roto-moulded", image: "/images/pots/pot-055.jpg", variants: [{ size: '14" x 14" x 14"', price: null }, { size: '16" x 16" x 16"', price: null }] },
  { id: "ll-roto019", code: "LL-ROTO019", name: "Nova", category: "roto-moulded", image: "/images/pots/pot-056.jpg", variants: [{ size: '13" x 13" x 12"', price: null }, { size: '20" x 20" x 20"', price: null }] },
  { id: "ll-roto020", code: "LL-ROTO020", name: "Rainbow", category: "roto-moulded", image: "/images/pots/pot-057.jpg", variants: [{ size: '12" x 8"', price: null }] },
  { id: "ll-roto021", code: "LL-ROTO021", name: "Top Square", category: "roto-moulded", image: "/images/pots/pot-058.jpg", variants: [{ size: '11" x 30"', price: null }] },
  { id: "ll-roto022", code: "LL-ROTO022", name: "Icon", category: "roto-moulded", image: "/images/pots/pot-059.jpg", variants: [{ size: '13" x 24"', price: null }, { size: '15" x 30"', price: null }, { size: '19" x 22"', price: null }] },
  { id: "ll-roto023", code: "LL-ROTO023", name: "Xylo", category: "roto-moulded", image: "/images/pots/pot-060.jpg", variants: [{ size: '15" x 8" x 14.5"', price: null }] },
  { id: "ll-roto024", code: "LL-ROTO024", name: "Sumo", category: "roto-moulded", image: "/images/pots/pot-061.jpg", variants: [{ size: '18" x 12" x 10.5"', price: null }, { size: '24" x 17" x 12"', price: null }] },
  { id: "ll-roto025", code: "LL-ROTO025", name: "Charkona", category: "roto-moulded", image: "/images/pots/pot-062.jpg", variants: [{ size: '13" x 9" x 24"', price: null }] },
  { id: "ll-roto026", code: "LL-ROTO026", name: "Atlas", category: "roto-moulded", image: "/images/pots/pot-063.jpg", variants: [{ size: '16" x 16" x 14.5"', price: null }, { size: '24" x 24" x 21"', price: null }] },
  { id: "ll-roto027", code: "LL-ROTO027", name: "Nexa", category: "roto-moulded", image: "/images/pots/pot-064.jpg", variants: [{ size: '12" x 36" x 24"', price: null }] },
  { id: "ll-roto028", code: "LL-ROTO028", name: "Altura", category: "roto-moulded", image: "/images/pots/pot-065.jpg", variants: [{ size: '27" x 27" x 25.5"', price: null }] },
  { id: "ll-roto029", code: "LL-ROTO029", name: "Vega", category: "roto-moulded", image: "/images/pots/pot-066.jpg", variants: [{ size: '15" x 15" x 14"', price: null }, { size: '20" x 20" x 22"', price: null }] },
  { id: "ll-roto030", code: "LL-ROTO030", name: "Barrel", category: "roto-moulded", image: "/images/pots/pot-067.jpg", variants: [{ size: '16" x 24"', price: null }] },
  // ── Iron Pots (PDF lists LL-IRON001 x4 = 4 different designs, same price) ──
  { id: "ll-iron001a", code: "LL-IRON001", name: "Iron Pot - Design A", category: "iron", image: "/images/pots/pot-068.jpg", variants: [{ size: '3"', price: 120 }] },
  { id: "ll-iron001b", code: "LL-IRON001", name: "Iron Pot - Design B", category: "iron", image: "/images/pots/pot-069.jpg", variants: [{ size: '3"', price: 120 }] },
  { id: "ll-iron001c", code: "LL-IRON001", name: "Iron Pot - Design C", category: "iron", image: "/images/pots/pot-070.jpg", variants: [{ size: '3"', price: 120 }] },
  { id: "ll-iron001d", code: "LL-IRON001", name: "Iron Pot - Design D", category: "iron", image: "/images/pots/pot-071.jpg", variants: [{ size: '3"', price: 120 }] },
  { id: "ll-iron002", code: "LL-IRON002", name: "Iron Pot - Premium", category: "iron", image: "/images/pots/pot-072.jpg", variants: [{ size: '3.5" x 2"', price: 300 }] },
  // ── Metal Stands ──
  { id: "ll-sta001", code: "LL-STA001", name: "Metal Stand - Round Hanger", category: "metal-stands", image: "/images/pots/pot-073.jpg", variants: [{ size: "H 19.5cm, D 21cm", price: 210 }] },
  { id: "ll-sta002", code: "LL-STA002", name: "Metal Stand - Square", category: "metal-stands", image: "/images/pots/pot-074.jpg", variants: [{ size: "L 25cm, W 25cm, H 11.5cm", price: 210 }] },
  { id: "ll-sta003", code: "LL-STA003", name: "Metal Stand - Rectangle", category: "metal-stands", image: "/images/stands/rectangular-stand.jpg", variants: [{ size: '24"', price: 210 }] },
  { id: "ll-sta004", code: "LL-STA004", name: "Metal Stand - Rectangle Premium", category: "metal-stands", image: "/images/stands/rectangular-stand-premium.jpg", variants: [{ size: '24"', price: 449 }] },
  { id: "ll-sta005", code: "LL-STA005", name: "Metal Stand - Round", category: "metal-stands", image: "/images/stands/round.jpg", variants: [{ size: 'Dia 7.8", H 3.8"', price: 129 }] },
];
