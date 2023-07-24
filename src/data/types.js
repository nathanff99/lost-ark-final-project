export const CHARACTER_TYPES = [
    {
        name: 'Warrior',
        key: 'warrior',
        description: 'Warriors are the brute-force fighters of Arkesia. They’re not the most agile but they stand their ground and make a big impact.',
        image: 'warrior.webp'
    },
    {
        name: 'Martial Artist',
        key: 'martial-artist',
        description: 'These quick-footed fighters like to rush the enemy with combined attacks at lethal speeds that can only be described as breakneck.',
        image: 'martial-artist.webp'
    },
    {
        name: 'Gunner',
        key: 'gunner',
        description: 'Whether wielding high-tech weapons or bows and arrows that never jam, keep an eagle eye on these sharpshooters or they may even hit you with their worst shot.',
        image: 'gunner.webp'
    },
    {
        name: 'Mage',
        key: 'mage',
        description: 'These mystical conjurers tap into the ancient magic of Arkesia to cast deadly spells on evil forces, heal the wounded, or support allies.',
        image: 'mage.webp'
    },
    {
        name: 'Assassin',
        key: 'assassin',
        description: 'These mysterious melee-makers fight demonic with demonic, channeling the dark powers in the name of the light in quick, colorful attacks.',
        image: 'assassin.webp'
    },
    {
        name: 'Specialist',
        key: 'specialist',
        description: 'Able to tap into ancient mysticism of the Yoz race, this class calls on the magic of the elements and the arts. ',
        image: 'specialist.webp'
    }
]

export const CHARACTER_SUBTYPES = {
    warrior: [
        { name: 'Berserker', image: 'berserker.webp' },
        { name: 'Paladin', image: 'paladin.webp' },
        { name: 'Gunlancer', image: 'gunlancer.webp' },
        { name: 'Destroyer', image: 'destroyer.webp' },
        { name: 'Slayer', image: 'slayer.webp' }
    ],
    'martial-artist': [
        { name: 'Striker', image: 'striker.webp' },
        { name: 'Wardancer', image: 'wardancer.webp' },
        { name: 'Scrapper', image: 'scrapper.webp' },
        { name: 'Soulfist', image: 'soulfist.webp' },
        { name: 'Glaivier', image: 'glaivier.webp' }
    ],
    gunner: [
        { name: 'Gunslinger', image: 'gunslinger.webp' },
        { name: 'Artillerist', image: 'artillerist.webp' },
        { name: 'Deadeye', image: 'deadeye.webp' },
        { name: 'Sharpshooter', image: 'sharpshooter.webp' },
        { name: 'Machinist', image: 'machinist.webp' }
    ],
    mage: [
        { name: 'Bard', image: 'bard.webp' },
        { name: 'Sorceress', image: 'sorceress.webp' },
        { name: 'Arcanist', image: 'arcanist.webp' },
        { name: 'Summoner', image: 'summoner.webp' }
    ],
    assassin: [
        { name: 'Shadowhunter', image: 'shadowhunter.webp' },
        { name: 'Deathblade', image: 'deathblade.webp' },
        { name: 'Reaper', image: 'reaper.webp' }
    ],
    specialist: [
        { name: 'Artist', image: 'artist.webp' }
    ]
}