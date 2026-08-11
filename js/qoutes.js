/*
- LINDO FOR ETERNITY
- Bible Quote Database
*/

const QUOTES = [
    {
        reference: "John 3:16",
        phrase: "For God so loved the world",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "David",
            "Isaiah"
        ]
    },

    {
        reference: "Matthew 14:29",
        phrase: "Come",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Moses",
            "John"
        ]
    },

    {
        reference: "Psalm 23:1",
        phrase: "The Lord is my shepherd",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Samuel",
            "Isaiah"
        ]
    },

    {
        reference: "Isaiah 41:10",
        phrase: "Fear not, for I am with you",
        speaker: "God",
        options: [
            "God",
            "Isaiah",
            "Jeremiah",
            "David"
        ]
    },

    {
        reference: "Philippians 4:13",
        phrase: "I can do all things through Christ",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "Timothy"
        ]
    },

    {
        reference: "Ruth 1:16",
        phrase: "Where you go I will go",
        speaker: "Ruth",
        options: [
            "Ruth",
            "Esther",
            "Mary",
            "Naomi"
        ]
    },

    {
        reference: "1 Samuel 3:10",
        phrase: "Speak, for your servant hears",
        speaker: "Samuel",
        options: [
            "Samuel",
            "David",
            "Eli",
            "Moses"
        ]
    },

    {
        reference: "Genesis 4:9",
        phrase: "Am I my brother's keeper?",
        speaker: "Cain",
        options: [
            "Cain",
            "Abel",
            "Adam",
            "Noah"
        ]
    },

    {
        reference: "Luke 1:38",
        phrase: "Let it be to me according to your word",
        speaker: "Mary",
        options: [
            "Mary",
            "Elizabeth",
            "Ruth",
            "Esther"
        ]
    },

    {
        reference: "Joshua 24:15",
        phrase: "As for me and my house, we will serve the Lord",
        speaker: "Joshua",
        options: [
            "Joshua",
            "Moses",
            "Samuel",
            "David"
        ]
    },

    {
        reference: "1 Kings 3:9",
        phrase: "Give your servant therefore an understanding mind",
        speaker: "Solomon",
        options: [
            "Solomon",
            "David",
            "Saul",
            "Samuel"
        ]
    },

    {
        reference: "Esther 4:14",
        phrase: "Who knows whether you have not come to the kingdom",
        speaker: "Mordecai",
        options: [
            "Mordecai",
            "Esther",
            "Ezra",
            "Nehemiah"
        ]
    },

    {
        reference: "Matthew 16:16",
        phrase: "You are the Christ, the Son of the living God",
        speaker: "Peter",
        options: [
            "Peter",
            "John",
            "Paul",
            "James"
        ]
    },

    {
        reference: "Psalm 27:1",
        phrase: "The Lord is my light and my salvation",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Isaiah",
            "Moses"
        ]
    },

    {
        reference: "Jeremiah 1:7",
        phrase: "Whatever I command you, you shall speak",
        speaker: "God",
        options: [
            "God",
            "Jeremiah",
            "Isaiah",
            "Moses"
        ]
    },

    {
        reference: "Exodus 3:14",
        phrase: "I AM WHO I AM",
        speaker: "God",
        options: [
            "God",
            "Moses",
            "Aaron",
            "Joshua"
        ]
    },

    {
        reference: "Matthew 11:28",
        phrase: "Come to me, all who labor and are heavy laden",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 14:6",
        phrase: "I am the way, and the truth, and the life",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "Genesis 1:3",
        phrase: "Let there be light",
        speaker: "God",
        options: [
            "God",
            "Moses",
            "Adam",
            "Noah"
        ]
    },

    {
        reference: "Genesis 12:1",
        phrase: "Go from your country and your kindred",
        speaker: "God",
        options: [
            "God",
            "Abraham",
            "Moses",
            "Isaac"
        ]
    },

    {
        reference: "Genesis 15:1",
        phrase: "Fear not, Abram, I am your shield",
        speaker: "God",
        options: [
            "God",
            "Abraham",
            "Isaac",
            "Jacob"
        ]
    },

    {
        reference: "Genesis 22:12",
        phrase: "Do not lay your hand on the boy",
        speaker: "Angel of the Lord",
        options: [
            "Angel of the Lord",
            "Abraham",
            "Isaac",
            "God"
        ]
    },

    {
        reference: "Genesis 32:28",
        phrase: "Your name shall no longer be called Jacob",
        speaker: "God",
        options: [
            "God",
            "Jacob",
            "Esau",
            "Isaac"
        ]
    },

    {
        reference: "Genesis 45:4",
        phrase: "I am your brother, Joseph",
        speaker: "Joseph",
        options: [
            "Joseph",
            "Judah",
            "Benjamin",
            "Jacob"
        ]
    },

    {
        reference: "Exodus 4:12",
        phrase: "Now therefore go, and I will be with your mouth",
        speaker: "God",
        options: [
            "God",
            "Moses",
            "Aaron",
            "Joshua"
        ]
    },

    {
        reference: "Exodus 14:13",
        phrase: "Fear not, stand firm, and see the salvation of the Lord",
        speaker: "Moses",
        options: [
            "Moses",
            "Aaron",
            "Joshua",
            "God"
        ]
    },

    {
        reference: "Exodus 20:3",
        phrase: "You shall have no other gods before me",
        speaker: "God",
        options: [
            "God",
            "Moses",
            "Aaron",
            "Joshua"
        ]
    },

    {
        reference: "Leviticus 19:18",
        phrase: "You shall love your neighbor as yourself",
        speaker: "God",
        options: [
            "God",
            "Moses",
            "Aaron",
            "Jesus"
        ]
    },

    {
        reference: "Numbers 6:24",
        phrase: "The Lord bless you and keep you",
        speaker: "God",
        options: [
            "God",
            "Moses",
            "Aaron",
            "Joshua"
        ]
    },

    {
        reference: "Deuteronomy 6:5",
        phrase: "You shall love the Lord your God",
        speaker: "Moses",
        options: [
            "Moses",
            "Joshua",
            "Aaron",
            "David"
        ]
    },

    {
        reference: "Deuteronomy 31:6",
        phrase: "Be strong and courageous",
        speaker: "Moses",
        options: [
            "Moses",
            "Joshua",
            "David",
            "Samuel"
        ]
    },

    {
        reference: "Joshua 1:9",
        phrase: "Be strong and courageous",
        speaker: "God",
        options: [
            "God",
            "Joshua",
            "Moses",
            "Caleb"
        ]
    },

    {
        reference: "Judges 6:12",
        phrase: "The Lord is with you, mighty man of valor",
        speaker: "Angel of the Lord",
        options: [
            "Angel of the Lord",
            "Gideon",
            "God",
            "Joshua"
        ]
    },

    {
        reference: "Ruth 1:17",
        phrase: "Where you die I will die",
        speaker: "Ruth",
        options: [
            "Ruth",
            "Naomi",
            "Esther",
            "Mary"
        ]
    },

    {
        reference: "1 Samuel 16:7",
        phrase: "The Lord looks on the heart",
        speaker: "God",
        options: [
            "God",
            "Samuel",
            "David",
            "Saul"
        ]
    },

    {
        reference: "1 Samuel 17:45",
        phrase: "I come to you in the name of the Lord",
        speaker: "David",
        options: [
            "David",
            "Saul",
            "Jonathan",
            "Samuel"
        ]
    },

    {
        reference: "2 Samuel 12:13",
        phrase: "I have sinned against the Lord",
        speaker: "David",
        options: [
            "David",
            "Saul",
            "Nathan",
            "Solomon"
        ]
    },

    {
        reference: "1 Kings 18:21",
        phrase: "How long will you go limping between two different opinions?",
        speaker: "Elijah",
        options: [
            "Elijah",
            "Elisha",
            "Isaiah",
            "Samuel"
        ]
    },

    {
        reference: "1 Kings 18:39",
        phrase: "The Lord, he is God",
        speaker: "The people",
        options: [
            "The people",
            "Elijah",
            "Ahab",
            "Obadiah"
        ]
    },

    {
        reference: "2 Kings 5:11",
        phrase: "I thought that he would surely come out to me",
        speaker: "Naaman",
        options: [
            "Naaman",
            "Elisha",
            "Gehazi",
            "Elijah"
        ]
    },

    {
        reference: "1 Chronicles 16:8",
        phrase: "Oh give thanks to the Lord",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Asaph",
            "Samuel"
        ]
    },

    {
        reference: "2 Chronicles 7:14",
        phrase: "If my people who are called by my name",
        speaker: "God",
        options: [
            "God",
            "Solomon",
            "David",
            "Isaiah"
        ]
    },

    {
        reference: "Ezra 7:10",
        phrase: "Ezra had set his heart to study the Law",
        speaker: "Ezra",
        options: [
            "Ezra",
            "Nehemiah",
            "Moses",
            "Joshua"
        ]
    },

    {
        reference: "Nehemiah 2:20",
        phrase: "The God of heaven will make us prosper",
        speaker: "Nehemiah",
        options: [
            "Nehemiah",
            "Ezra",
            "Zerubbabel",
            "Joshua"
        ]
    },

    {
        reference: "Job 1:21",
        phrase: "The Lord gave, and the Lord has taken away",
        speaker: "Job",
        options: [
            "Job",
            "David",
            "Moses",
            "Elijah"
        ]
    },

    {
        reference: "Job 19:25",
        phrase: "I know that my Redeemer lives",
        speaker: "Job",
        options: [
            "Job",
            "David",
            "Isaiah",
            "Jeremiah"
        ]
    },

    {
        reference: "Psalm 19:1",
        phrase: "The heavens declare the glory of God",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Asaph",
            "Moses"
        ]
    },

    {
        reference: "Psalm 34:8",
        phrase: "Oh, taste and see that the Lord is good",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Asaph",
            "Isaiah"
        ]
    },

    {
        reference: "Psalm 37:4",
        phrase: "Delight yourself in the Lord",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Moses",
            "Asaph"
        ]
    },

    {
        reference: "Psalm 46:1",
        phrase: "God is our refuge and strength",
        speaker: "Sons of Korah",
        options: [
            "Sons of Korah",
            "David",
            "Solomon",
            "Moses"
        ]
    },

    {
        reference: "Psalm 51:10",
        phrase: "Create in me a clean heart, O God",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Asaph",
            "Samuel"
        ]
    },

    {
        reference: "Psalm 91:1",
        phrase: "He who dwells in the shelter of the Most High",
        speaker: "Unknown",
        options: [
            "Unknown",
            "David",
            "Moses",
            "Solomon"
        ]
    },

    {
        reference: "Psalm 100:1",
        phrase: "Make a joyful noise to the Lord",
        speaker: "Unknown",
        options: [
            "Unknown",
            "David",
            "Solomon",
            "Moses"
        ]
    },

    {
        reference: "Psalm 119:105",
        phrase: "Your word is a lamp to my feet",
        speaker: "Unknown",
        options: [
            "Unknown",
            "David",
            "Solomon",
            "Moses"
        ]
    },

    {
        reference: "Psalm 121:1",
        phrase: "I lift up my eyes to the hills",
        speaker: "Unknown",
        options: [
            "Unknown",
            "David",
            "Solomon",
            "Isaiah"
        ]
    },

    {
        reference: "Psalm 139:14",
        phrase: "I am fearfully and wonderfully made",
        speaker: "David",
        options: [
            "David",
            "Solomon",
            "Moses",
            "Isaiah"
        ]
    },

    {
        reference: "Proverbs 3:5",
        phrase: "Trust in the Lord with all your heart",
        speaker: "Solomon",
        options: [
            "Solomon",
            "David",
            "Moses",
            "Samuel"
        ]
    },

    {
        reference: "Proverbs 4:23",
        phrase: "Keep your heart with all vigilance",
        speaker: "Solomon",
        options: [
            "Solomon",
            "David",
            "Samuel",
            "Moses"
        ]
    },

    {
        reference: "Proverbs 16:3",
        phrase: "Commit your work to the Lord",
        speaker: "Solomon",
        options: [
            "Solomon",
            "David",
            "Samuel",
            "Moses"
        ]
    },

    {
        reference: "Proverbs 18:10",
        phrase: "The name of the Lord is a strong tower",
        speaker: "Solomon",
        options: [
            "Solomon",
            "David",
            "Asaph",
            "Moses"
        ]
    },

    {
        reference: "Ecclesiastes 3:1",
        phrase: "For everything there is a season",
        speaker: "Solomon",
        options: [
            "Solomon",
            "David",
            "Moses",
            "Samuel"
        ]
    },

    {
        reference: "Isaiah 6:8",
        phrase: "Here I am! Send me",
        speaker: "Isaiah",
        options: [
            "Isaiah",
            "Jeremiah",
            "Ezekiel",
            "Samuel"
        ]
    },

    {
        reference: "Isaiah 7:14",
        phrase: "Behold, the virgin shall conceive",
        speaker: "Isaiah",
        options: [
            "Isaiah",
            "Jeremiah",
            "Moses",
            "David"
        ]
    },

    {
        reference: "Isaiah 9:6",
        phrase: "For to us a child is born",
        speaker: "Isaiah",
        options: [
            "Isaiah",
            "Jeremiah",
            "David",
            "Micah"
        ]
    },

    {
        reference: "Isaiah 40:31",
        phrase: "Those who wait for the Lord shall renew their strength",
        speaker: "Isaiah",
        options: [
            "Isaiah",
            "Jeremiah",
            "Ezekiel",
            "Daniel"
        ]
    },

    {
        reference: "Jeremiah 29:11",
        phrase: "For I know the plans I have for you",
        speaker: "God",
        options: [
            "God",
            "Jeremiah",
            "Isaiah",
            "Moses"
        ]
    },

    {
        reference: "Jeremiah 33:3",
        phrase: "Call to me and I will answer you",
        speaker: "God",
        options: [
            "God",
            "Jeremiah",
            "Isaiah",
            "David"
        ]
    },

    {
        reference: "Lamentations 3:23",
        phrase: "Great is your faithfulness",
        speaker: "Jeremiah",
        options: [
            "Jeremiah",
            "Isaiah",
            "David",
            "Moses"
        ]
    },

    {
        reference: "Ezekiel 36:26",
        phrase: "I will give you a new heart",
        speaker: "God",
        options: [
            "God",
            "Ezekiel",
            "Jeremiah",
            "Isaiah"
        ]
    },

    {
        reference: "Daniel 3:17",
        phrase: "Our God whom we serve is able to deliver us",
        speaker: "Shadrach, Meshach and Abednego",
        options: [
            "Shadrach, Meshach and Abednego",
            "Daniel",
            "Nebuchadnezzar",
            "Moses"
        ]
    },

    {
        reference: "Daniel 6:10",
        phrase: "He got down on his knees three times a day and prayed",
        speaker: "Daniel",
        options: [
            "Daniel",
            "David",
            "Nehemiah",
            "Ezra"
        ]
    },

    {
        reference: "Jonah 2:9",
        phrase: "Salvation belongs to the Lord",
        speaker: "Jonah",
        options: [
            "Jonah",
            "Isaiah",
            "David",
            "Moses"
        ]
    },

    {
        reference: "Micah 6:8",
        phrase: "Do justice, love kindness, and walk humbly",
        speaker: "Micah",
        options: [
            "Micah",
            "Isaiah",
            "Jeremiah",
            "Amos"
        ]
    },

    {
        reference: "Habakkuk 2:4",
        phrase: "The righteous shall live by his faith",
        speaker: "God",
        options: [
            "God",
            "Habakkuk",
            "Isaiah",
            "Jeremiah"
        ]
    },

    {
        reference: "Matthew 4:4",
        phrase: "Man shall not live by bread alone",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Moses",
            "Peter",
            "Paul"
        ]
    },

    {
        reference: "Matthew 5:14",
        phrase: "You are the light of the world",
        speaker: "Jesus",
        options: [
            "Jesus",
            "John",
            "Peter",
            "Paul"
        ]
    },

    {
        reference: "Matthew 5:16",
        phrase: "Let your light shine before others",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "Matthew 6:33",
        phrase: "Seek first the kingdom of God",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "Matthew 7:7",
        phrase: "Ask, and it will be given to you",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "James"
        ]
    },

    {
        reference: "Matthew 7:12",
        phrase: "Whatever you wish that others would do to you",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "Matthew 9:12",
        phrase: "Those who are well have no need of a physician",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Matthew",
            "Peter",
            "Paul"
        ]
    },

    {
        reference: "Matthew 22:37",
        phrase: "You shall love the Lord your God",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Moses",
            "Paul",
            "Peter"
        ]
    },

    {
        reference: "Matthew 22:39",
        phrase: "You shall love your neighbor as yourself",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "Matthew 28:19",
        phrase: "Go therefore and make disciples of all nations",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "Mark 10:27",
        phrase: "With man it is impossible, but not with God",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "Mark 11:24",
        phrase: "Whatever you ask in prayer, believe that you have received it",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "James"
        ]
    },

    {
        reference: "Luke 6:31",
        phrase: "Do to others as you would have them do to you",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "Luke 9:23",
        phrase: "If anyone would come after me, let him deny himself",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "Luke 15:24",
        phrase: "For this my son was dead, and is alive again",
        speaker: "Father",
        options: [
            "Father",
            "Jesus",
            "Elder Brother",
            "Servant"
        ]
    },

    {
        reference: "Luke 18:16",
        phrase: "Let the children come to me",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "John",
            "Paul"
        ]
    },

    {
        reference: "Luke 19:10",
        phrase: "The Son of Man came to seek and to save the lost",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 8:12",
        phrase: "I am the light of the world",
        speaker: "Jesus",
        options: [
            "Jesus",
            "John",
            "Peter",
            "Paul"
        ]
    },

    {
        reference: "John 8:32",
        phrase: "You will know the truth, and the truth will set you free",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 10:11",
        phrase: "I am the good shepherd",
        speaker: "Jesus",
        options: [
            "Jesus",
            "David",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 11:25",
        phrase: "I am the resurrection and the life",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Martha",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 13:34",
        phrase: "Love one another as I have loved you",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "John 15:5",
        phrase: "I am the vine; you are the branches",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 16:33",
        phrase: "In the world you will have tribulation",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "John 19:30",
        phrase: "It is finished",
        speaker: "Jesus",
        options: [
            "Jesus",
            "Peter",
            "John",
            "Paul"
        ]
    },

    {
        reference: "Acts 4:20",
        phrase: "We cannot but speak of what we have seen and heard",
        speaker: "Peter and John",
        options: [
            "Peter and John",
            "Paul and Barnabas",
            "Peter and Paul",
            "James and John"
        ]
    },

    {
        reference: "Acts 9:6",
        phrase: "Lord, what do you want me to do?",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "Stephen",
            "Barnabas"
        ]
    },

    {
        reference: "Romans 1:16",
        phrase: "I am not ashamed of the gospel",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "Romans 8:28",
        phrase: "All things work together for good",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "Romans 12:2",
        phrase: "Be transformed by the renewal of your mind",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "1 Corinthians 13:13",
        phrase: "Faith, hope, and love abide",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "1 Corinthians 16:14",
        phrase: "Let all that you do be done in love",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "2 Corinthians 5:17",
        phrase: "If anyone is in Christ, he is a new creation",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "Galatians 2:20",
        phrase: "It is no longer I who live, but Christ who lives in me",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "Timothy"
        ]
    },

    {
        reference: "Galatians 5:22",
        phrase: "The fruit of the Spirit is love, joy, peace",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "Ephesians 2:8",
        phrase: "By grace you have been saved through faith",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "Ephesians 6:11",
        phrase: "Put on the whole armor of God",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "Philippians 1:21",
        phrase: "To live is Christ, and to die is gain",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "Timothy"
        ]
    },

    {
        reference: "Colossians 3:23",
        phrase: "Whatever you do, work heartily",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "1 Thessalonians 5:16",
        phrase: "Rejoice always",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "James"
        ]
    },

    {
        reference: "2 Timothy 1:7",
        phrase: "God gave us a spirit not of fear",
        speaker: "Paul",
        options: [
            "Paul",
            "Peter",
            "John",
            "Timothy"
        ]
    },

    {
        reference: "Hebrews 11:1",
        phrase: "Faith is the assurance of things hoped for",
        speaker: "Unknown",
        options: [
            "Unknown",
            "Paul",
            "Peter",
            "John"
        ]
    },

    {
        reference: "James 1:5",
        phrase: "If any of you lacks wisdom, let him ask God",
        speaker: "James",
        options: [
            "James",
            "Peter",
            "Paul",
            "John"
        ]
    },

    {
        reference: "1 Peter 5:7",
        phrase: "Cast all your anxieties on him",
        speaker: "Peter",
        options: [
            "Peter",
            "Paul",
            "John",
            "James"
        ]
    },

    {
        reference: "1 John 4:8",
        phrase: "God is love",
        speaker: "John",
        options: [
            "John",
            "Peter",
            "Paul",
            "James"
        ]
    },

    {
        reference: "Revelation 3:20",
        phrase: "Behold, I stand at the door and knock",
        speaker: "Jesus",
        options: [
            "Jesus",
            "John",
            "Peter",
            "Paul"
        ]
    },

    {
        reference: "Revelation 21:5",
        phrase: "Behold, I am making all things new",
        speaker: "God",
        options: [
            "God",
            "Jesus",
            "John",
            "Angel"
        ]
    }
];