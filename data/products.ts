export type PlantCategory = "indoor" | "succulents" | "balcony" | "flowering";
export type PotCategory =
  | "plastic"
  | "ceramic"
  | "roto-moulded"
  | "iron"
  | "metal-stands"
  | "designer";

export interface Plant {
  id: string;
  name: string;
  category?: PlantCategory;
  image: string;
  price: number | null;
  actualPrice?: number | null;
  quantity?: string;
  description?: string;
}

export interface PotColor {
  hex: string;
}

export const COLOR_NAMES: Record<string, string> = {
  "#000000": "Black",
  "#FFFFFF": "White",
  "#22C55E": "Green",
  "#C65D3B": "Terracotta",
  "#F5F5DC": "Cream",
  "#808080": "Gray",
  "#8B4513": "Brown",
  "#3B82F6": "Blue",
  "#056FE8": "Blue",
  "#1E88E5": "Blue",
  "#26C6DA": "Blue-Green",
  "#4FC3F7": "Sky blue",
  "#63C3F2": "Sky blue",
  "#81C784": "Lime green",
  "#8CC63F": "Lime green",
  "#7B1FA2": "Purple",
  "#7B31A8": "Purple",
  "#FF6D00": "Orange",
  "#E91E63": "Pink",
  "#EC2A7B": "Pink",
  "#FFEB3B": "Yellow",
  "#BF360C": "Terracotta",
  "#FFD700": "Gold",
  "#FFC80A": "Gold",
  "#B87333": "Copper",
  "#FC9630": "Orange",
  "#A3A5A8": "Gray",
  "#28B411": "Green",
  "#E50953": "Pink",
  "#5D11B5": "Purple",
  "#212224": "Black",
  "#D898CE": "Pink",
  "#9AD4CE": "Blue-Green",
  "#ABE3E9": "Blue-Green",
  "#AFC4B3": "Green",
  "#B8A496": "Brown",
  "#B9BFAC": "Green",
  "#DFCCB5": "Cream",
  "#D2AD89": "Brown",
  "#E2DBCF": "Cream",
  "#EDECEF": "White",
  "#EFEFEF": "White",
  "#96AD01": "Citron",
  "#CE4413": "Terracotta",
  "#E90E1D": "Red",
  "#562CA1": "Purple",
  "#56575E": "Gray",
  "#596167": "Gray",
  "#779A67": "Green",
  "#A08C63": "Brown",
  "#B8CB7E": "Green",
  "#CCE210": "Citron",
  "#FF80BF": "Pink",
  "#AB47BC": "Purple",
  "#853A11": "Brown",
  "#B0560A": "Copper",
};

export function getColorName(hex: string): string {
  return COLOR_NAMES[hex.toUpperCase()] || "Unknown";
}

export interface PotVariant {
  size: string;
  price: number | null;
  compareAtPrice?: number | null;
}

export interface Pot {
  id: string;
  code: string;
  name: string;
  category: PotCategory;
  image: string;
  variants: PotVariant[];
  colors?: PotColor[];
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
  { value: "designer", label: "Designer Pots" },
];

export const plants: Plant[] = [
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    category: "indoor",
    image: "/images/plants/rubber-plant.jpg",
    price: 200,
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "indoor",
    image: "/images/plants/snake-plant.jpg",
    price: 600,
  },
  {
    id: "peperomia",
    name: "Peperomia",
    category: "indoor",
    image: "/images/plants/peperomia.jpg",
    price: 300,
  },
  {
    id: "monstera",
    name: "Monstera",
    category: "indoor",
    image: "/images/plants/monstera.jpg",
    price: 400,
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    category: "indoor",
    image: "/images/plants/peace-lily.jpg",
    price: 500,
  },
  {
    id: "anthurium-red",
    name: "Anthurium Red",
    category: "flowering",
    image: "/images/plants/anthurium-red.jpg",
    price: 500,
  },
  {
    id: "aralia",
    name: "Aralia",
    category: "indoor",
    image: "/images/plants/aralia.jpg",
    price: 120,
  },
  {
    id: "aglonema",
    name: "Aglonema Lipstic",
    category: "indoor",
    image: "/images/plants/aglonema.jpg",
    price: 400,
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    category: "indoor",
    image: "/images/plants/zz-plant.jpg",
    price: 350,
  },
  {
    id: "table-palm",
    name: "Table Palm",
    category: "indoor",
    image: "/images/plants/table-palm.jpg",
    price: 200,
  },
  {
    id: "pedilanthus",
    name: "Pedilanthus",
    category: "indoor",
    image: "/images/plants/pedilanthus.jpg",
    price: 120,
  },
  {
    id: "lipstick-plant",
    name: "Lipstick Plant",
    category: "indoor",
    image: "/images/plants/lipstick-plant.jpg",
    price: 500,
  },
  {
    id: "pothos",
    name: "Pothos",
    category: "indoor",
    image: "/images/plants/pothos.jpg",
    price: 150,
  },
  {
    id: "marble-pothos",
    name: "Marble Pothos",
    category: "indoor",
    image: "/images/plants/marble-pothos.jpg",
    price: 150,
  },
  {
    id: "varigated-agave",
    name: "Varigated Agave",
    category: "indoor",
    image: "/images/plants/varigated-agave.jpg",
    price: 800,
  },
  {
    id: "syngonium",
    name: "Syngonium",
    category: "indoor",
    image: "/images/plants/syngonium.jpg",
    price: 200,
  },
  {
    id: "variegated-insulin-plant",
    name: "Variegated Insulin Plant ",
    category: "indoor",
    image: "/images/plants/variegated-insulin-plant.jpg",
    price: 250,
  },

  {
    id: "snow-bush",
    name: "Snow Bush",
    category: "indoor",
    image: "/images/plants/snow-bush.jpg",
    price: 150,
  },
  {
    id: "aglaonema-white-stem",
    name: "Aglaonema White Stem",
    category: "indoor",
    image: "/images/plants/aglaonema-white-stem.jpg",
    price: 200,
  },
  {
    id: "dieffenbachia-tropic-snow",
    name: "Dieffenbachia Tropic Snow",
    category: "indoor",
    image: "/images/plants/dieffenbachia-tropic-snow.jpg",
    price: 300,
  },
  {
    id: "birds-nest-snake-plant",
    name: "Bird's Nest Snake Plant",
    category: "indoor",
    image: "/images/plants/birds-nest-snake-plant.jpg",
    price: 250,
  },
  {
    id: "philodendron-moonlight",
    name: "Philodendron Moonlight",
    category: "indoor",
    image: "/images/plants/philodendron-moonlight.jpg",
    price: 100,
  },
  {
    id: "jade",
    name: "Jade",
    category: "succulents",
    image: "/images/plants/jade.jpg",
    price: 200,
  },
  {
    id: "aloe",
    name: "Aloe",
    category: "succulents",
    image: "/images/plants/aloe.jpg",
    price: 150,
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    category: "indoor",
    image: "/images/plants/areca-palm.jpg",
    price: 300,
  },
  {
    id: "orange-heliconia",
    name: "Orange Heliconia",
    category: "indoor",
    image: "/images/plants/orange-heliconia.jpg",
    price: 400,
  },
  {
    id: "thulasi",
    name: "Thulasi",
    category: "balcony",
    image: "/images/plants/thulasi.jpg",
    price: 120,
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    category: "flowering",
    image: "/images/plants/hibiscus.jpg",
    price: 80,
  },
  {
    id: "ixora",
    name: "Ixora",
    category: "flowering",
    image: "/images/plants/ixora.jpg",
    price: 100,
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    category: "indoor",
    image: "/images/plants/bird-of-paradise.jpg",
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

// Plant Care products — kept separate from the main `plants` list
export const plantCare: Plant[] = [
  {
    id: "pc-fertilizing",
    name: "Magic Spray - Natural Nutrition Spray",
    image: "/images/plant-care/fertilizing.jpg",
    price: 175,
    actualPrice: 185,
    quantity: "825 ml",
  },
  {
    id: "pc-pruning",
    name: "Garden Glow - Plant Growth Promoter | Seaweed Extract",
    image: "/images/plant-care/pruning.jpg",
    price: 175,
    actualPrice: 185,
    quantity: "825 ml",
  },
  {
    id: "pc-repotting",
    name: "Magic Balls - Granular Plant Growth Promoter",
    image: "/images/plant-care/repotting.jpg",
    price: 250,
    actualPrice: 260,
    quantity: "500 gms",
  },
  {
    id: "pc-pests",
    name: "N Care - Plant Protector from Mealybugs - White Fungus - Insects - Mites - Aphids",
    image: "/images/plant-care/pests.jpg",
    price: 225,
    actualPrice: 235,
    quantity: "825 ml",
  },
  {
    id: "pc-propagation",
    name: "Organic Booster Concentrated Seaweed Extract",
    image: "/images/plant-care/propagation.jpg",
    price: 80,
    actualPrice: 90,
    quantity: "30 ml",
  },
  {
    id: "pc-light",
    name: "Vatika Nemax",
    image: "/images/plant-care/light-care.jpg",
    price: 80,
    actualPrice: 90,
    quantity: "30 ml",
  },
  {
    id: "pc-humidity",
    name: "Lucky Bamboo Spray",
    image: "/images/plant-care/humidity.jpg",
    price: 110,
    actualPrice: 120,
    quantity: "50 ml",
  },
];

export const pots: Pot[] = [
  // ── Plastic Pots (verified from PDF) ──
  { id: "ll-pla001", code: "LL-PLA001", name: "Round Hanging Balcony Planter", category: "plastic", image: "/images/pots/pot-001.jpg", variants: [{ size: '6"', price: 169 }], colors: [{ hex: "#d898ce" }, { hex: "#dfccb5" }, { hex: "#562ca1" }, { hex: "#e90e1d" }, { hex: "#efefef" }] },
  { id: "ll-pla002", code: "LL-PLA002", name: "Square Hanging Balcony Planter", category: "plastic", image: "/images/pots/pot-002.jpg", variants: [{ size: '6"', price: 169 }], colors: [{ hex: "#056fe8" }, { hex: "#dfccb5" }, { hex: "#562ca1" }, { hex: "#96ad01" }, { hex: "#efefef" }] },
  { id: "ll-pla003", code: "LL-PLA003", name: "Rectangular Hanging Balcony Planter", category: "plastic", image: "/images/pots/pot-003.jpg", variants: [{ size: '6"', price: 169 }], colors: [{ hex: "#056fe8" }, { hex: "#dfccb5" }, { hex: "#562ca1" }, { hex: "#fc9630" }, { hex: "#efefef" }] },
  { id: "ll-pla004", code: "LL-PLA004", name: "Rectangular Planter Box with Tray", category: "plastic", image: "/images/pots/pot-004.jpg", variants: [
    { size: '12" Planter', price: 100 },
    { size: '17" Planter', price: 250 },
    { size: '12" Tray', price: 35 },
    { size: '17" Tray', price: 80 },
  ], colors: [{ hex: "#000000" }, { hex: "#C65D3B" }] },
  { id: "ll-pla005", code: "LL-PLA005", name: "Decorative Round Flower Pot", category: "plastic", image: "/images/pots/pot-005.jpg", variants: [{ size: '5"', price: 130 }], colors: [{ hex: "#808080" }, { hex: "#FFFFFF" }] },
  { id: "ll-pla006", code: "LL-PLA006", name: "Indoor Outdoor Round Planter", category: "plastic", image: "/images/pots/pot-006.jpg", variants: [
    { size: '3"', price: 49 },
    { size: '5"', price: 99 },
    { size: '6"', price: 129 },
    { size: '8"', price: 199 },
    { size: '10"', price: 299 },
  ], colors: [{ hex: "#FFFFFF" }, { hex: "#CCE210" }, { hex: "#1E88E5" }, { hex: "#26C6DA" }, { hex: "#FF80BF" }, { hex: "#AB47BC" }] },
  { id: "ll-pla007", code: "LL-PLA007", name: "Kit Pot", category: "plastic", image: "/images/pots/pot-007.jpg", variants: [
    { size: '5"', price: 39 },
    { size: '6"', price: 49 },
    { size: '8"', price: 79 },
    { size: '10"', price: 110 },
  ], colors: [{ hex: "#000000" }, { hex: "#C65D3B" }] },
  { id: "ll-pla008", code: "LL-PLA008", name: "Pedestal Flower Vases / Urn Planters", category: "plastic", image: "/images/pots/pot-008.jpg", variants: [
    { size: '6"', price: 199 },
    { size: '8"', price: 299 },
  ], colors: [{ hex: "#9ad4ce" }, { hex: "#e2dbcf" }] },
  { id: "ll-pla009", code: "LL-PLA009", name: "Black Round Premium Planter", category: "plastic", image: "/images/pots/pla009.jpg", variants: [
    { size: '5"', price: 25 },
    { size: '6"', price: 30 },
    { size: '7"', price: 50 },
    { size: '8"', price: 70 },
    { size: '10"', price: 90 },
    { size: '12"', price: 150 },
  ], colors: [{ hex: "#000000" }] },
  { id: "ll-pla010", code: "LL-PLA010", name: "Terracotta Round Premium Planter", category: "plastic", image: "/images/pots/pla010.jpg", variants: [
    { size: '5"', price: 35 },
    { size: '6"', price: 40 },
    { size: '7"', price: 60 },
    { size: '8"', price: 80 },
    { size: '10"', price: 100 },
    { size: '12"', price: 160 },
  ], colors: [{ hex: "#C65D3B" }] },
  { id: "ll-pla011", code: "LL-PLA011", name: "Square Premium Planter", category: "plastic", image: "/images/pots/pot-009.jpg", variants: [
    { size: '8"', price: 79 },
    { size: '10"', price: 139 },
    { size: '12"', price: 159 },
  ], colors: [{ hex: "#000000" }] },
  { id: "ll-pla012", code: "LL-PLA012", name: "Square Premium Planter (Variant)", category: "plastic", image: "/images/pots/pot-010.jpg", variants: [
    { size: '8"', price: 99 },
    { size: '10"', price: 159 },
  ], colors: [{ hex: "#C65D3B" }] },
  { id: "ll-pla013", code: "LL-PLA013", name: "Balcony Railing Planter", category: "plastic", image: "/images/pots/pot-011.jpg", variants: [{ size: "Standard", price: 500 }], colors: [{ hex: "#000000" }, { hex: "#22C55E" }, { hex: "#8B4513" }] },
  { id: "ll-pla014", code: "LL-PLA014", name: "Hanging Pot", category: "plastic", image: "/images/pots/pot-012.jpg", variants: [
    { size: "Small", price: 60 },
    { size: "Large", price: 80 },
  ], colors: [{ hex: "#000000" }] },
  { id: "ll-pla015", code: "LL-PLA015", name: "Diamond Hanging Pot", category: "plastic", image: "/images/pots/pot-013.jpg", variants: [{ size: "Standard", price: 80 }], colors: [{ hex: "#A3A5A8" }, { hex: "#28B411" }, { hex: "#E50953" }, { hex: "#5D11B5" }, { hex: "#FFFFFF" }, { hex: "#212224" }] },
  { id: "ll-pla016", code: "LL-PLA016", name: "Round Tray (Black)", category: "plastic", image: "/images/pots/pot-014.jpg", variants: [
    { size: '6"', price: 20 },
    { size: '8"', price: 25 },
    { size: '10"', price: 35 },
  ], colors: [{ hex: "#000000" }] },
  { id: "ll-pla017", code: "LL-PLA017", name: "Round Tray (Terracotta)", category: "plastic", image: "/images/pots/pot-015.jpg", variants: [
    { size: '6"', price: 25 },
    { size: '8"', price: 29 },
    { size: '10"', price: 45 },
  ], colors: [{ hex: "#C65D3B" }] },
  { id: "ll-pla018", code: "LL-PLA018", name: "Square Tray (Black)", category: "plastic", image: "/images/pots/pot-016.jpg", variants: [
    { size: '8"', price: 30 },
    { size: '10"', price: 40 },
    { size: '12"', price: 55 },
  ], colors: [{ hex: "#000000" }] },
  { id: "ll-pla019", code: "LL-PLA019", name: "Square Tray (Terracotta)", category: "plastic", image: "/images/pots/pot-017.jpg", variants: [
    { size: '8"', price: 40 },
    { size: '10"', price: 50 },
  ], colors: [{ hex: "#C65D3B" }] },
  { id: "ll-pla020", code: "LL-PLA020", name: "Wave Pot", category: "plastic", image: "/images/pots/pot-018.jpg", variants: [{ size: '12"', price: 499 }], colors: [{ hex: "#779a67" }, { hex: "#FFFFFF" }, { hex: "#808080" }] },
  { id: "ll-pla021", code: "LL-PLA021", name: "Square Pot", category: "plastic", image: "/images/pots/pot-019.jpg", variants: [
    { size: '3"', price: null },
    { size: '5"', price: null },
    { size: '6"', price: null },
    { size: '8"', price: null },
    { size: '10"', price: null },
  ], colors: [
    { hex: "#81C784" },
    { hex: "#FFFFFF" },
    { hex: "#7B1FA2" },
    { hex: "#FF6D00" },
    { hex: "#4FC3F7" },
    { hex: "#E91E63" },
    { hex: "#FFEB3B" },
    { hex: "#000000" },
    { hex: "#BF360C" },
  ] },
  { id: "ll-pla022", code: "LL-PLA022", name: "Triangle Pot", category: "plastic", image: "/images/pots/pot-020.jpg", variants: [
    { size: '3"', price: null },
    { size: '5"', price: null },
    { size: '6"', price: null },
    { size: '8"', price: null },
    { size: '10"', price: null },
  ], colors: [
    { hex: "#8CC63F" },
    { hex: "#7B31A8" },
    { hex: "#EC2A7B" },
    { hex: "#63C3F2" },
  ] },
  // ── Ceramic Pots (PDF has codes and sizes only, no names or prices) ──
  { id: "ll-cer001", code: "LL-CER001", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-021.jpg", variants: [{ size: '4"', price: 349 }], colors: [{ hex: "#FF6D00" }, { hex: "#FFEB3B" }] },
  { id: "ll-cer002", code: "LL-CER002", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-022.jpg", variants: [{ size: '4"', price: 299 }, { size: '7"', price: 650 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer003", code: "LL-CER003", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-023.jpg", variants: [{ size: '4"', price: 299 }, { size: '5"', price: 499 }, { size: '6"', price: 699 }], colors: [{ hex: "#abe3e9" }] },
  { id: "ll-cer004", code: "LL-CER004", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-024.jpg", variants: [{ size: '5"', price: 399 }], colors: [{ hex: "#e2dbcf" }] },
  { id: "ll-cer005", code: "LL-CER005", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-025.jpg", variants: [{ size: '5"', price: 349 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer007", code: "LL-CER007", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-027.jpg", variants: [{ size: '6"', price: 499 }, { size: '7"', price: 699 }, { size: '8"', price: 799 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer008", code: "LL-CER008", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-028.jpg", variants: [{ size: '7"', price: 750 }], colors: [{ hex: "#FFFFFF" }, { hex: "#808080" }, { hex: "#b8a496" }] },
  { id: "ll-cer009", code: "LL-CER009", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-029.jpg", variants: [{ size: '7"', price: 750 }], colors: [{ hex: "#e2dbcf" }] },
  { id: "ll-cer010", code: "LL-CER010", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-030.jpg", variants: [{ size: '7" x 4"', price: null }], colors: [{ hex: "#b8cb7e" }] },
  { id: "ll-cer011", code: "LL-CER011", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-031.jpg", variants: [{ size: '5"', price: 499 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer012", code: "LL-CER012", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-032.jpg", variants: [{ size: '8"', price: 950 }], colors: [{ hex: "#afc4b3" }] },
  { id: "ll-cer013", code: "LL-CER013", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-033.jpg", variants: [{ size: '3"', price: 149 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer014", code: "LL-CER014", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-034.jpg", variants: [{ size: '3"', price: 99 }], colors: [{ hex: "#b9bfac" }] },
  { id: "ll-cer015", code: "LL-CER015", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-035.jpg", variants: [{ size: '5"', price: 249 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer016", code: "LL-CER016", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-036.jpg", variants: [{ size: '5"', price: 499 }], colors: [{ hex: "#FFFFFF" }] },
  { id: "ll-cer017", code: "LL-CER017", name: "Ceramic Pot", category: "ceramic", image: "/images/pots/pot-037.jpg", variants: [{ size: '4"', price: 299 }, { size: '5"', price: 499 }, { size: '6"', price: 699 }], colors: [{ hex: "#FFFFFF" }] },
  // ── Roto Moulded Pots (PDF has names and sizes only, no prices) ──
  { id: "ll-roto001", code: "LL-ROTO001", name: "Blo-Jas Lotus Pot", category: "roto-moulded", image: "/images/pots/pot-038.jpg", variants: [{ size: '30" x 12"', price: null }], colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto002", code: "LL-ROTO002", name: "Tulsi Pot", category: "roto-moulded", image: "/images/pots/pot-039.jpg", variants: [{ size: '12" x 12"', price: null }, { size: '16" x 24"', price: null }], colors: [{ hex: "#d2ad89" }, { hex: "#000000" }] },
  { id: "ll-roto003", code: "LL-ROTO003", name: "Rhino", category: "roto-moulded", image: "/images/pots/pot-040.jpg", variants: [{ size: '24" x 12" x 11"', price: null }, { size: '36" x 12" x 11"', price: null }], colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto004", code: "LL-ROTO004", name: "Small Boat", category: "roto-moulded", image: "/images/pots/pot-041.jpg", variants: [{ size: '24" x 12" x 12"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto005", code: "LL-ROTO005", name: "Tublo", category: "roto-moulded", image: "/images/pots/pot-042.jpg", variants: [{ size: '18" x 11" x 8"', price: null }, { size: '24" x 14" x 10"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto006", code: "LL-ROTO006", name: "Zen", category: "roto-moulded", image: "/images/pots/pot-043.jpg", variants: [{ size: '24" x 10" x 13"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto007", code: "LL-ROTO007", name: "Fantasy", category: "roto-moulded", image: "/images/pots/pot-044.jpg", variants: [{ size: '28" x 14" x 14"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto008", code: "LL-ROTO008", name: "Blo-Tulip", category: "roto-moulded", image: "/images/pots/pot-045.jpg", variants: [{ size: '14" x 9.5" x 18"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto009", code: "LL-ROTO009", name: "Blo-Vista", category: "roto-moulded", image: "/images/pots/pot-046.jpg", variants: [{ size: '39" x 12" x 8"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto010", code: "LL-ROTO010", name: "Blo-Rombus", category: "roto-moulded", image: "/images/pots/pot-047.jpg", variants: [
    { size: '10" x 7" x 9"', price: null },
    { size: '12" x 9.5" x 11"', price: null },
    { size: '14" x 10.5" x 12"', price: null },
    { size: '15.5" x 12" x 13.5"', price: null },
    { size: '18" x 13.5" x 16"', price: null },
  ],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto011", code: "LL-ROTO011", name: "Blo-Pentas", category: "roto-moulded", image: "/images/pots/pot-048.jpg", variants: [
    { size: '10" x 7" x 9"', price: null },
    { size: '12" x 9" x 10"', price: null },
    { size: '14" x 10" x 12"', price: null },
    { size: '16" x 12" x 13"', price: null },
    { size: '18" x 12.5" x 15"', price: null },
  ],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto012", code: "LL-ROTO012", name: "Blo-Rectek", category: "roto-moulded", image: "/images/pots/pot-049.jpg", variants: [
    { size: '16" x 8" x 8"', price: null },
    { size: '20" x 10" x 10"', price: null },
    { size: '24" x 12" x 12"', price: null },
    { size: '36" x 13" x 15"', price: null },
    { size: '40" x 20" x 20"', price: null },
  ],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto013", code: "LL-ROTO013", name: "Blo-Floral", category: "roto-moulded", image: "/images/pots/pot-050.jpg", variants: [
    { size: '12" x 10" x 8"', price: null },
    { size: '15" x 12" x 9"', price: null },
    { size: '17" x 14" x 10"', price: null },
    { size: '20" x 17" x 13"', price: null },
    { size: '24" x 21" x 16"', price: null },
    { size: '29" x 25" x 19"', price: null },
    { size: '44" x 34" x 26"', price: null },
  ],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto014", code: "LL-ROTO014", name: "Blo-Crystal", category: "roto-moulded", image: "/images/pots/pot-051.jpg", variants: [
    { size: '13" x 9.5" x 10"', price: null },
    { size: '17" x 13" x 14"', price: null },
    { size: '20" x 15" x 17"', price: null },
    { size: '24" x 18" x 20"', price: null },
    { size: '30" x 23" x 25"', price: null },
  ],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto015", code: "LL-ROTO015", name: "Octopus", category: "roto-moulded", image: "/images/pots/pot-052.jpg", variants: [{ size: '11" x 11" x 15"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto016", code: "LL-ROTO016", name: "Fortune", category: "roto-moulded", image: "/images/pots/pot-053.jpg", variants: [
    { size: '16" x 11" x 12"', price: null },
    { size: '20" x 14.5" x 15"', price: null },
    { size: '24" x 17.5" x 18"', price: null },
    { size: '32" x 24" x 24"', price: null },
  ],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto017", code: "LL-ROTO017", name: "Cano", category: "roto-moulded", image: "/images/pots/pot-054.jpg", variants: [{ size: '14" x 14" x 13"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto018", code: "LL-ROTO018", name: "Seltos", category: "roto-moulded", image: "/images/pots/pot-055.jpg", variants: [{ size: '14" x 14" x 14"', price: null }, { size: '16" x 16" x 16"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto019", code: "LL-ROTO019", name: "Nova", category: "roto-moulded", image: "/images/pots/pot-056.jpg", variants: [{ size: '13" x 13" x 12"', price: null }, { size: '20" x 20" x 20"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto020", code: "LL-ROTO020", name: "Rainbow", category: "roto-moulded", image: "/images/pots/pot-057.jpg", variants: [{ size: '12" x 8"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto021", code: "LL-ROTO021", name: "Top Square", category: "roto-moulded", image: "/images/pots/pot-058.jpg", variants: [{ size: '11" x 30"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto022", code: "LL-ROTO022", name: "Icon", category: "roto-moulded", image: "/images/pots/pot-059.jpg", variants: [{ size: '13" x 24"', price: null }, { size: '15" x 30"', price: null }, { size: '19" x 22"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto023", code: "LL-ROTO023", name: "Xylo", category: "roto-moulded", image: "/images/pots/pot-060.jpg", variants: [{ size: '15" x 8" x 14.5"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto024", code: "LL-ROTO024", name: "Sumo", category: "roto-moulded", image: "/images/pots/pot-061.jpg", variants: [{ size: '18" x 12" x 10.5"', price: null }, { size: '24" x 17" x 12"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto025", code: "LL-ROTO025", name: "Charkona", category: "roto-moulded", image: "/images/pots/pot-062.jpg", variants: [{ size: '13" x 9" x 24"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto026", code: "LL-ROTO026", name: "Atlas", category: "roto-moulded", image: "/images/pots/pot-063.jpg", variants: [{ size: '16" x 16" x 14.5"', price: null }, { size: '24" x 24" x 21"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto027", code: "LL-ROTO027", name: "Nexa", category: "roto-moulded", image: "/images/pots/pot-064.jpg", variants: [{ size: '12" x 36" x 24"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto028", code: "LL-ROTO028", name: "Altura", category: "roto-moulded", image: "/images/pots/pot-065.jpg", variants: [{ size: '27" x 27" x 25.5"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto029", code: "LL-ROTO029", name: "Vega", category: "roto-moulded", image: "/images/pots/pot-066.jpg", variants: [{ size: '15" x 15" x 14"', price: null }, { size: '20" x 20" x 22"', price: null }],  colors: [{ hex: "#56575e" }, { hex: "#d2ad89" }, { hex: "#edecef" }] },
  { id: "ll-roto030", code: "LL-ROTO030", name: "Barrel", category: "roto-moulded", image: "/images/pots/pot-067.jpg", variants: [{ size: '16" x 24"', price: null }], colors: [{ hex: "#d2ad89" }] },
  // ── Iron Pots (PDF lists LL-IRON001 x4 = 4 different designs, same price) ──
  { id: "ll-iron001a", code: "LL-IRON001", name: "Iron Pot - Design A", category: "iron", image: "/images/pots/pot-068.jpg", variants: [{ size: '3"', price: 120 }], colors: [{ hex: "#853a11" }] },
  { id: "ll-iron001b", code: "LL-IRON001", name: "Iron Pot - Design B", category: "iron", image: "/images/pots/pot-069.jpg", variants: [{ size: '3"', price: 120 }], colors: [{ hex: "#a08c63" }] },
  { id: "ll-iron001c", code: "LL-IRON001", name: "Iron Pot - Design C", category: "iron", image: "/images/pots/pot-070.jpg", variants: [{ size: '3"', price: 120 }], colors: [{ hex: "#596167" }] },
  { id: "ll-iron001d", code: "LL-IRON001", name: "Iron Pot - Design D", category: "iron", image: "/images/pots/pot-071.jpg", variants: [{ size: '3"', price: 120 }], colors: [{ hex: "#000000" }] },
  { id: "ll-iron002", code: "LL-IRON002", name: "Iron Pot - Premium", category: "iron", image: "/images/pots/pot-072.jpg", variants: [{ size: '3.5" x 2"', price: 300 }], colors: [{ hex: "#b0560a" }] },
  // ── Metal Stands ──
  { id: "ll-sta001", code: "LL-STA001", name: "Metal Stand - Round Hanger", category: "metal-stands", image: "/images/stands/stand-001.jpg", variants: [{ size: "H 19.5cm, D 21cm", price: 210 }] },
  { id: "ll-sta002", code: "LL-STA002", name: "Metal Stand - Square", category: "metal-stands", image: "/images/stands/stand-002.jpg", variants: [{ size: "L 25cm, W 25cm, H 11.5cm", price: 210 }] },
  { id: "ll-sta003", code: "LL-STA003", name: "Metal Stand - Rectangle", category: "metal-stands", image: "/images/stands/rectangular-stand.jpg", variants: [{ size: '24"', price: 210 }] },
  { id: "ll-sta004", code: "LL-STA004", name: "Metal Stand - Rectangle Premium", category: "metal-stands", image: "/images/stands/rectangular-stand-premium.jpg", variants: [{ size: '24"', price: 449 }] },
  { id: "ll-sta005", code: "LL-STA005", name: "Metal Stand - Round", category: "metal-stands", image: "/images/stands/round.jpg", variants: [{ size: 'Dia 7.8", H 3.8"', price: 129 }] },
  // ── Designer Pots ──
  { id: "ll-dsg001", code: "LL-DSG001", name: "Designer Pot - Couple Smiley", category: "designer", image: "/images/pots/designer/designer-smiley-duo.jpg", variants: [{ size: 'Standard', price: 699, compareAtPrice: 1299 }] },
  { id: "ll-dsg002", code: "LL-DSG002", name: "Designer Pot - Scooter Buddy", category: "designer", image: "/images/pots/designer/designer-scooter-buddy.jpg", variants: [{ size: 'Standard', price: 699, compareAtPrice: 1299 }] },
  { id: "ll-dsg003", code: "LL-DSG003", name: "Designer Pot - Swing Seat", category: "designer", image: "/images/pots/designer/designer-swing-seat.jpg", variants: [{ size: 'Standard', price: 499, compareAtPrice: 999 }] },
  { id: "ll-dsg004", code: "LL-DSG004", name: "Designer Pot - Guitarist", category: "designer", image: "/images/pots/designer/designer-guitarist.jpg", variants: [{ size: 'Standard', price: 399, compareAtPrice: 499 }] },
  { id: "ll-dsg005", code: "LL-DSG005", name: "Designer Pot - Mom & Kid", category: "designer", image: "/images/pots/designer/designer-garden-couple.jpg", variants: [{ size: 'Standard', price: 599, compareAtPrice: 799 }] },
  { id: "ll-dsg006", code: "LL-DSG006", name: "Designer Pot - Rocking Chair", category: "designer", image: "/images/pots/designer/designer-rocking-chair.jpg", variants: [{ size: 'Standard', price: 599, compareAtPrice: 799 }] },
];
