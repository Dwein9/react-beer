const beer = [
  {
    id: 1,
    brewery: 'Peak Organic',
    name: 'IPA',
    style: 'IPA',
    month: 'January',
    favorite: false
  },
  {
    id: 2,
    brewery: 'Troegs Independent Brewing',
    name: 'The Mad Elf',
    style: 'Ale',
    month: 'January',
    favorite: true
  },
  {
    id: 3,
    brewery: 'Full Sail Brewing',
    name: 'iPA',
    style: 'IPA',
    month: 'January',
    favorite: false
  },
  {
    id: 4,
    brewery: 'Left Hand Brewing Co.',
    name: 'Wake Up Dead',
    style: 'Stout',
    month: 'January',
    favorite: false
  },
  {
    id: 5,
    brewery: 'Gun Hill Brewing Co.',
    name: 'Void of Light',
    style: 'Stout',
    month: 'January',
    favorite: false
  },
  {
    id: 6,
    brewery: 'Cuauhtémoc Moctezuma Brewery',
    name: 'Tecate',
    style: 'Lager',
    month: 'January',
    favorite: false
  },
  {
    id: 7,
    brewery: 'Anheuser-Busch InBev',
    name: 'Bud Light',
    style: 'Lager',
    month: 'January',
    favorite: false
  },
  {
    id: 8,
    brewery: 'Ballast Point Brewing Co.',
    name: 'Grapefruit Sculpin',
    style: 'IPA',
    month: 'January',
    favorite: false
  },
  {
    id: 9,
    brewery: 'Spoetzl Brewery',
    name: 'Shiner Bock',
    style: 'Bock',
    month: 'January',
    favorite: false
  },
  {
    id: 10,
    brewery: 'Lagunitas Brewing Co.',
    name: 'iPA',
    style: 'IPA',
    month: 'January',
    favorite: false
  },
  {
    id: 11,
    brewery: 'Troegs Independent Brewing',
    name: 'Blizzard of Hops',
    style: 'IPA',
    month: 'January',
    favorite: false
  },
  {
    id: 12,
    brewery: 'Firestone Walker Brewing Co.',
    name: 'Wookey Jack',
    style: 'IPA',
    month: 'January',
    favorite: false
  },
  {
    id: 13,
    brewery: 'Coors Brewing Co.',
    name: 'Coors Light',
    style: 'Lager',
    month: 'January',
    favorite: false
  },
  {
    id: 14,
    brewery: 'Anderson Valley Brewing Co.',
    name: 'Boont Amber',
    style: 'Ale',
    month: 'January',
    favorite: false
  },
  {
    id: 15,
    brewery: 'Evil Twin Brewing',
    name: 'Soft DK',
    style: 'Stout',
    month: 'January',
    favorite: false
  },
  {
    id: 16,
    brewery: 'Cigar City Brewing',
    name: 'Maduro',
    style: 'Ale',
    month: 'January',
    favorite: false
  },
  {
    id: 17,
    brewery: 'Goose Island Beer Co.',
    name: 'Sofie',
    style: 'Saison',
    month: 'January',
    favorite: false
  },
  {
    id: 18,
    brewery: 'Goose Island Beer Co.',
    name: 'Matilda',
    style: 'Ale',
    month: 'January',
    favorite: false
  },
  {
    id: 19,
    brewery: 'Anderson Valley Brewing Co.',
    name: 'Barney Flats',
    style: 'Stout',
    month: 'January',
    favorite: true
  },
  {
    id: 20,
    brewery: 'Anheuser-Busch InBev',
    name: 'Stella Artois',
    style: 'Lager',
    month: 'February',
    favorite: false
  },
  {
    id: 21,
    brewery: 'Abbaye de Leffe S.A.',
    name: 'Leffe Blonde',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 22,
    brewery: 'Sierra Nevada Brewing Co.',
    name: 'Beer Camp Tropical IPA',
    style: 'IPA',
    month: 'February',
    favorite: false
  },
  {
    id: 23,
    brewery: 'Stone Brewing Co.',
    name: 'Go To IPA',
    style: 'IPA',
    month: 'February',
    favorite: false
  },
  {
    id: 24,
    brewery: 'Founder\'s Brewing Co.',
    name: 'All Day IPA',
    style: 'IPA',
    month: 'February',
    favorite: false
  },
  {
    id: 25,
    brewery: 'Bell\'s Brewery',
    name: 'Best Brown Ale',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 26,
    brewery: 'Queens Brewery',
    name: 'Queens Lager',
    style: 'Lager',
    month: 'February',
    favorite: false
  },
  {
    id: 27,
    brewery: 'Coors Brewing Co.',
    name: 'Original',
    style: 'Lager',
    month: 'February',
    favorite: false
  },
  {
    id: 28,
    brewery: 'Moab Brewery',
    name: 'Dead Horse',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 29,
    brewery: 'Uinta Brewing Co.',
    name: '801',
    style: 'Pilsner',
    month: 'February',
    favorite: false
  },
  {
    id: 30,
    brewery: 'Uinta Brewing Co.',
    name: 'Golden Spike',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 31,
    brewery: 'Park City Brewery',
    name: 'Hooker',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 32,
    brewery: 'Moab Brewery',
    name: 'Red Rye IPA',
    style: 'IPA',
    month: 'February',
    favorite: false
  },
  {
    id: 33,
    brewery: 'Epic Brewing Co.',
    name: 'Brainless',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 34,
    brewery: 'Epic Brewing Co.',
    name: 'Capt\'n Cromption\'s',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 35,
    brewery: 'Big Sky Brewing Co.',
    name: 'Moose Drool',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 36,
    brewery: 'North Coast Brewing Co.',
    name: 'Blue Star',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 37,
    brewery: 'Uinta Brewing Co.',
    name: 'Dubhe',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 38,
    brewery: 'Epic Brewing Co.',
    name: 'Big Bad Baptist',
    style: 'Stout',
    month: 'February',
    favorite: true
  },
  {
    id: 39,
    brewery: 'Epic Brewing Co.',
    name: 'Cooper Cone',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 40,
    brewery: 'New Belgium Breweing Co.',
    name: 'Fat Tire',
    style: 'Ale',
    month: 'February',
    favorite: false
  },
  {
    id: 41,
    brewery: 'Squatters Pub Brewery',
    name: 'Hop Rising',
    style: 'IPA',
    month: 'February',
    favorite: false
  },
  {
    id: 42,
    brewery: 'Anchor Brewing Co.',
    name: 'California Lager',
    style: 'Lager',
    month: 'February',
    favorite: false
  },
  {
    id: 43,
    brewery: 'SingleCut Beersmiths',
    name: 'Halfstack',
    style: 'IPA',
    month: 'March',
    favorite: false
  },
  {
    id: 44,
    brewery: 'Six Point Brewery',
    name: 'Sweet Action',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 45,
    brewery: 'Green Flash Brewing Co.',
    name: 'Cosmic Ristretto',
    style: 'Porter',
    month: 'March',
    favorite: false
  },
  {
    id: 46,
    brewery: 'Aecht Schlenkerla',
    name: 'Helles Lagerbier',
    style: 'Rauchbier',
    month: 'March',
    favorite: false
  },
  {
    id: 47,
    brewery: 'Brouwerij Verhaeghe',
    name: 'Duchesse De Bourgogne',
    style: 'Ale',
    month: 'March',
    favorite: true
  },
  {
    id: 48,
    brewery: 'Hoegaarden Brewery',
    name: 'Original White Ale',
    style: 'Witbier',
    month: 'March',
    favorite: false
  },
  {
    id: 49,
    brewery: 'Brouwerij Palm',
    name: 'Palm Speciale',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 50,
    brewery: 'Brouwerij van Steenberge',
    name: 'Gulden Draak',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 51,
    brewery: 'Montauk Brewing Co.',
    name: 'Driftwood',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 52,
    brewery: 'Alphabet City Beer Co.',
    name: 'Easy Blonde',
    style: 'Kolsch',
    month: 'March',
    favorite: false
  },
  {
    id: 53,
    brewery: 'Boulevard Brewing Co.',
    name: 'The Calling',
    style: 'IPA',
    month: 'March',
    favorite: false
  },
  {
    id: 54,
    brewery: 'Bell\'s Brewery',
    name: 'Java Stout',
    style: 'Stout',
    month: 'March',
    favorite: false
  },
  {
    id: 55,
    brewery: 'Six Point Brewery',
    name: 'The Crisp',
    style: 'Lager',
    month: 'March',
    favorite: false
  },
  {
    id: 56,
    brewery: 'Sierra Nevada Brewing Co.',
    name: 'Torpedo',
    style: 'IPA',
    month: 'March',
    favorite: false
  },
  {
    id: 57,
    brewery: 'Shock Top Brewing Co.',
    name: 'Belgian White',
    style: 'Witbier',
    month: 'March',
    favorite: false
  },
  {
    id: 58,
    brewery: 'Firestone Walker Brewing Co.',
    name: 'Double Jack',
    style: 'IPA',
    month: 'March',
    favorite: true
  },
  {
    id: 59,
    brewery: 'Anheuser-Busch InBev',
    name: 'Rolling Rock',
    style: 'Lager',
    month: 'March',
    favorite: false
  },
  {
    id: 60,
    brewery: 'Miller Brewing Co.',
    name: 'Miller High Life',
    style: 'Pilsner',
    month: 'March',
    favorite: false
  },
  {
    id: 61,
    brewery: 'Troegs Independent Brewing',
    name: 'Troeganator',
    style: 'Bock',
    month: 'March',
    favorite: false
  },
  {
    id: 62,
    brewery: 'Gun Hill Brewing Co.',
    name: 'Frosted Hop Strong Ale',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 63,
    brewery: 'Kent Falls Brewing Co.',
    name: 'Common Table',
    style: 'Porter',
    month: 'March',
    favorite: false
  },
  {
    id: 64,
    brewery: 'SingleCut Beersmiths',
    name: 'Billy Fullstack',
    style: 'IPA',
    month: 'March',
    favorite: false
  },
  {
    id: 65,
    brewery: 'Radeberger Exportbierbrauerei',
    name: 'Pilsner',
    style: 'Pilsner',
    month: 'March',
    favorite: false
  },
  {
    id: 66,
    brewery: 'Bayerische Staatsbrauerei Weihenstephan',
    name: 'Vitus',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 67,
    brewery: 'Bunker Brewing Co.',
    name: 'Bunker Brown Ale',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 68,
    brewery: 'Finback Brewery',
    name: 'Family',
    style: 'Saison',
    month: 'March',
    favorite: false
  },
  {
    id: 69,
    brewery: 'Other Half Brewing Co.',
    name: 'iPA',
    style: 'IPA',
    month: 'March',
    favorite: false
  },
  {
    id: 70,
    brewery: 'Maine Beer Co.',
    name: 'Peeper Ale',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 71,
    brewery: 'Bell\'s Brewery',
    name: 'Expedition Stout',
    style: 'Stout',
    month: 'March',
    favorite: false
  },
  {
    id: 72,
    brewery: 'Green Flash Brewing Co.',
    name: 'Passion Fruit Kicker',
    style: 'Ale',
    month: 'March',
    favorite: false
  },
  {
    id: 73,
    brewery: 'New Belgium Breweing Co.',
    name: 'Rampant',
    style: 'IPA',
    month: 'March',
    favorite: false
  },
  {
    id: 74,
    brewery: 'Blue Point Brewing Co.',
    name: 'Toasted Lager',
    style: 'Lager',
    month: 'April',
    favorite: false
  },
  {
    id: 75,
    brewery: 'Stone Brewing Co.',
    name: 'Enjoy by 04.20.16',
    style: 'IPA',
    month: 'April',
    favorite: false
  },
  {
    id: 76,
    brewery: 'Bell\'s Brewery',
    name: 'Oberon Ale',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 77,
    brewery: 'Black Hog Brewing Co.',
    name: 'Granola Brown Ale',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 78,
    brewery: 'Porterhouse Brewing Company',
    name: 'Oyster Stout',
    style: 'Stout',
    month: 'April',
    favorite: false
  },
  {
    id: 79,
    brewery: 'Porterhouse Brewing Company',
    name: 'Porterhouse Red ',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 80,
    brewery: 'Left Hand Brewing Co.',
    name: 'Sawtooth ',
    style: 'ESB',
    month: 'April',
    favorite: false
  },
  {
    id: 81,
    brewery: 'Taproom 307',
    name: 'House lager ',
    style: 'Lager',
    month: 'April',
    favorite: false
  },
  {
    id: 82,
    brewery: 'Anheuser-Busch InBev',
    name: 'Budweiser',
    style: 'Lager',
    month: 'April',
    favorite: false
  },
  {
    id: 83,
    brewery: 'Abita Brewing Co.',
    name: 'Purple Haze',
    style: 'Fruit Beer',
    month: 'April',
    favorite: false
  },
  {
    id: 84,
    brewery: 'Alphabet City Beer Co.',
    name: 'Alpha Male',
    style: 'IPA',
    month: 'April',
    favorite: false
  },
  {
    id: 85,
    brewery: 'Grupo Modelo S.A. de C.V.',
    name: 'Modelo Especial',
    style: 'Lager',
    month: 'April',
    favorite: false
  },
  {
    id: 86,
    brewery: 'Plzeňský Prazdroj',
    name: 'Pilsner Urquell',
    style: 'Pilsner',
    month: 'April',
    favorite: false
  },
  {
    id: 87,
    brewery: 'Anchor Brewing Co.',
    name: 'Summer Wheat',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 88,
    brewery: 'Green Flash Brewing Co.',
    name: '30th Street Pale Ale',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 89,
    brewery: 'Southern Tier Brewing Co.',
    name: 'Live',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 90,
    brewery: 'New Belgium Breweing Co.',
    name: 'Slow ride',
    style: 'IPA',
    month: 'April',
    favorite: false
  },
  {
    id: 91,
    brewery: 'Almanac Beer Co.',
    name: 'Dolores',
    style: 'Saison',
    month: 'April',
    favorite: false
  },
  {
    id: 92,
    brewery: 'Brooklyn Brewery',
    name: 'Lager',
    style: 'Lager',
    month: 'April',
    favorite: false
  },
  {
    id: 93,
    brewery: 'Two Roads Brewing Co.',
    name: 'Espressway ',
    style: 'Stout',
    month: 'April',
    favorite: false
  },
  {
    id: 94,
    brewery: 'Black Hog Brewing Co.',
    name: 'Ghost Rye\'Da White Rye IPA',
    style: 'IPA',
    month: 'April',
    favorite: false
  },
  {
    id: 95,
    brewery: 'Bell\'s Brewery',
    name: 'Midwestern Pale Ale',
    style: 'Ale',
    month: 'April',
    favorite: false
  },
  {
    id: 96,
    brewery: 'Grimm Artisanal Ales',
    name: 'Neon lights',
    style: 'Ale',
    month: 'April',
    favorite: true
  },
  {
    id: 97,
    brewery: 'Six Point Brewery',
    name: 'Jammer',
    style: 'Gose',
    month: 'April',
    favorite: false
  },
  {
    id: 98,
    brewery: 'Hill Farmstead Brewery',
    name: 'Edward',
    style: 'Ale',
    month: 'May',
    favorite: true
  },
  {
    id: 99,
    brewery: 'Blue Point Brewing Co.',
    name: 'Nitro Armchair ',
    style: 'Stout',
    month: 'May',
    favorite: false
  },
  {
    id: 100,
    brewery: 'Bell\'s Brewery',
    name: 'Lager of the Lakes',
    style: 'Lager',
    month: 'May',
    favorite: false
  }
];

export default beer;
