export const siteConfig = {
  name: "ROOTED",
  title: "ROOTED: A 52-Week Lesson Plan for Christian Youth Ministry",
  shortTitle: "ROOTED",
  subtitle: "A 52-Week Lesson Plan for Christian Youth Ministry",
  description:
    "ROOTED is a complete 52-week Christian youth ministry curriculum built around Identity, Character, Community, and Wisdom. Every week includes a game, a message, small group questions, a weekly challenge, and a closing prayer.",
  verse: "Let your roots grow down into Him, and let your lives be built on Him.",
  verseReference: "Colossians 2:7",
  // TODO: replace with the production domain before deploying.
  url: "https://www.rootedyouthministry.com",
  // TODO: replace with the live Amazon product listing for the book.
  amazonUrl: "https://www.amazon.com/dp/XXXXXXXXXX",
  author: {
    name: "Jeremy Johnson",
    email: "hello@rootedym.com",
  },
  ogImage: "/opengraph-image",
  keywords: [
    "Christian youth ministry curriculum",
    "52 week youth group lesson plan",
    "youth pastor lesson plans",
    "Bible study curriculum for teens",
    "youth group games and lessons",
    "small group questions for teens",
    "ROOTED youth ministry book",
    "Colossians 2:7 Bible study",
    "church youth group curriculum",
    "middle school and high school ministry",
  ],
} as const;

export type Quarter = {
  id: "q1" | "q2" | "q3" | "q4";
  number: 1 | 2 | 3 | 4;
  theme: string;
  months: string;
  weekRange: string;
  description: string;
  icon: "compass" | "heart-handshake" | "users-round" | "book-marked";
};

export const quarters: Quarter[] = [
  {
    id: "q1",
    number: 1,
    theme: "Identity",
    months: "January – March",
    weekRange: "Weeks 1–13",
    description:
      "Students dig into who they are in Christ before the world tells them who to be — identity, belovedness, and being made on purpose.",
    icon: "compass",
  },
  {
    id: "q2",
    number: 2,
    theme: "Character",
    months: "April – June",
    weekRange: "Weeks 14–26",
    description:
      "A walk through the fruit of the Spirit and the daily choices that shape integrity, self-control, and Christlike character.",
    icon: "heart-handshake",
  },
  {
    id: "q3",
    number: 3,
    theme: "Community",
    months: "July – September",
    weekRange: "Weeks 27–39",
    description:
      "Friendship, service, forgiveness, and mission — learning that faith was never meant to be lived alone.",
    icon: "users-round",
  },
  {
    id: "q4",
    number: 4,
    theme: "Wisdom",
    months: "October – December",
    weekRange: "Weeks 40–52",
    description:
      "Practical, real-world wisdom for money, relationships, screens, doubt, and finishing the year rooted for life.",
    icon: "book-marked",
  },
];

export const lessonStructure = [
  {
    step: 1,
    title: "Game",
    description:
      "A high-energy icebreaker that hooks students and quietly sets up the night's Big Idea before a word of teaching is spoken.",
    icon: "gamepad-2",
  },
  {
    step: 2,
    title: "Message",
    description:
      "A ready-to-teach, Scripture-rooted message with a clear Big Idea, illustrations, and application built for a teenage audience.",
    icon: "mic-2",
  },
  {
    step: 3,
    title: "Small Group",
    description:
      "Discussion questions that move from icebreaker to Scripture to honest, personal application in a safe small-group setting.",
    icon: "users",
  },
  {
    step: 4,
    title: "Weekly Challenge",
    description:
      "A tangible, take-home action step so the lesson doesn't stay in the room — it gets lived out Monday through Saturday.",
    icon: "target",
  },
  {
    step: 5,
    title: "Closing Prayer",
    description:
      "A guided prayer that closes the night in worship and invites the Holy Spirit into what was just taught and discussed.",
    icon: "hand-heart",
  },
] as const;
