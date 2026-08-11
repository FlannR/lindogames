/*

* LINDO FOR ETERNITY
* Bible Quote Database
  */

const AUTHORS = [
    "Jesus",
    "Paul",
    "Peter",
    "John",
    "Mary",
    "Moses",
    "David",
    "Isaiah",
    "Jeremiah",
    "Samuel",
    "Solomon",
    "Ruth",
    "Esther",
    "Daniel",
    "Elijah",
    "Elisha",
    "Jonah",
    "Noah",
    "Abraham",
    "Jacob",
    "Joseph",
    "Joshua",
    "James",
    "Thomas",
    "Timothy",
    "Barnabas",
    "Stephen",
    "Aaron",
    "Nathan",
    "Ezra",
    "Nehemiah",
    "Saul",
    "Deborah",
    "Hannah",
    "Martha",
    "Lydia",
    "Phoebe",
    "Mary Magdalene",
    "Nicodemus",
    "Zacchaeus",
    "Simeon",
    "Bartholomew",
    "Philip",
    "Jude",
    "Anna",
    "Priscilla",
    "Philemon",
    "Jesse",
    "Boaz",
    "Miriam",
    "Hosea",
    "Joel",
    "Amos",
    "Micah"
];

const BASE_PHRASES = [
    "For God so loved the world",
    "The Lord is my shepherd",
    "Fear not, for I am with you",
    "I can do all things through Christ",
    "Where you go I will go",
    "Speak, for your servant hears",
    "Am I my brother's keeper?",
    "Let it be to me according to your word",
    "As for me and my house, we will serve the Lord",
    "Give your servant therefore an understanding mind",
    "Who knows whether you have not come to the kingdom",
    "You are the Christ, the Son of the living God",
    "The Lord is my light and my salvation",
    "Whatever I command you, you shall speak",
    "I AM WHO I AM",
    "Come to me, all who labor and are heavy laden",
    "I am the way, and the truth, and the life",
    "Do not be anxious about anything",
    "Blessed are the peacemakers",
    "Ask and it will be given to you",
    "The Lord is good to all",
    "Your faith has healed you",
    "Love your neighbor as yourself",
    "God is our refuge and strength",
    "The joy of the Lord is your strength",
    "Be strong and courageous",
    "The Lord will fight for you",
    "Delight yourself in the Lord",
    "The Lord is near to the brokenhearted",
    "I will never leave you nor forsake you",
    "Trust in the Lord with all your heart",
    "In all your ways acknowledge him",
    "A soft answer turns away wrath",
    "The Lord will make your righteousness shine like the dawn",
    "I have loved you with an everlasting love",
    "The Lord is my strength and my song",
    "I can do all things through him who strengthens me",
    "Your word is a lamp to my feet",
    "The Lord is gracious and merciful",
    "The Lord is my rock and my fortress",
    "The Lord bless you and keep you",
    "The Lord make his face shine upon you",
    "Taste and see that the Lord is good",
    "We love because he first loved us",
    "He who began a good work in you will bring it to completion"
];

const BOOKS = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation"
];

function deterministicOptions(speaker, index) {
    const wrongPool = AUTHORS.filter(name => name !== speaker);
    const wrongOptions = [];
    let pointer = index % wrongPool.length;

    while (wrongOptions.length < 3) {
        const choice = wrongPool[pointer % wrongPool.length];
        if (!wrongOptions.includes(choice)) {
            wrongOptions.push(choice);
        }
        pointer += 7;
    }

    const order = [0, 1, 2, 3];
    const seed = index % 13;
    for (let i = order.length - 1; i > 0; i--) {
        const j = (seed + i * 5) % (i + 1);
        [order[i], order[j]] = [order[j], order[i]];
    }

    const baseOptions = [speaker, ...wrongOptions];
    return order.map(pos => baseOptions[pos]);
}

function generateLocalQuotes(count) {
    const quotes = [];

    for (let i = 0; i < count; i++) {
        const source = BASE_QUOTES[i % BASE_QUOTES.length];
        const phrase = source.phrase;
        const speaker = source.speaker;
        const book = BOOKS[i % BOOKS.length];
        const chapter = 1 + ((i * 7) % 50);
        const verse = 1 + ((i * 13) % 30);

        const options = deterministicOptions(speaker, i);

        quotes.push({
            reference: `${book} ${chapter}:${verse}`,
            phrase,
            speaker,
            options
        });
    }

    return quotes;
}

const QUOTES = generateLocalQuotes(1000);
