export type Lesson = {
  week: number;
  title: string;
  verse: string;
};

export type Month = {
  name: string;
  lessons: Lesson[];
};

export type QuarterCurriculum = {
  id: "q1" | "q2" | "q3" | "q4";
  number: 1 | 2 | 3 | 4;
  theme: string;
  weekRange: string;
  months: Month[];
};

export const curriculum: QuarterCurriculum[] = [
  {
    id: "q1",
    number: 1,
    theme: "Identity",
    weekRange: "Weeks 1–13",
    months: [
      {
        name: "January",
        lessons: [
          { week: 1, title: "Rooted: Our Foundation in Christ", verse: "Colossians 2:6-7" },
          { week: 2, title: "Made on Purpose", verse: "Psalm 139:13-16" },
          { week: 3, title: "A New Name, A New Identity", verse: "2 Corinthians 5:17" },
          { week: 4, title: "Chosen and Loved", verse: "Ephesians 1:4-5" },
          { week: 5, title: "Who Does God Say I Am?", verse: "1 Peter 2:9" },
        ],
      },
      {
        name: "February",
        lessons: [
          { week: 6, title: "Image Bearers", verse: "Genesis 1:27" },
          { week: 7, title: "Beyond the Mirror: Identity vs. Image", verse: "Romans 12:2" },
          { week: 8, title: "Adopted into the Family", verse: "Galatians 4:4-7" },
          { week: 9, title: "Created for Good Works", verse: "Ephesians 2:10" },
        ],
      },
      {
        name: "March",
        lessons: [
          { week: 10, title: "The Lie of Comparison", verse: "Galatians 6:4-5" },
          { week: 11, title: "Secure in Christ, Not in Others' Opinions", verse: "John 15:15" },
          { week: 12, title: "My Story, His Glory", verse: "2 Corinthians 5:18-20" },
          { week: 13, title: "Identity Under Pressure", verse: "Daniel 1:8" },
        ],
      },
    ],
  },
  {
    id: "q2",
    number: 2,
    theme: "Character",
    weekRange: "Weeks 14–26",
    months: [
      {
        name: "April",
        lessons: [
          { week: 14, title: "The Fruit of the Spirit: An Overview", verse: "Galatians 5:22-23" },
          { week: 15, title: "Love That Looks Like Action", verse: "1 Corinthians 13:4-7" },
          { week: 16, title: "Joy in Every Season", verse: "Nehemiah 8:10" },
          { week: 17, title: "Peace That Guards Your Heart", verse: "Philippians 4:6-7" },
        ],
      },
      {
        name: "May",
        lessons: [
          { week: 18, title: "Patience: Playing the Long Game", verse: "James 1:2-4" },
          { week: 19, title: "Kindness as a Lifestyle", verse: "Ephesians 4:32" },
          { week: 20, title: "Goodness: Doing Right When No One's Watching", verse: "Micah 6:8" },
          { week: 21, title: "Faithfulness in the Small Things", verse: "Luke 16:10" },
          { week: 22, title: "Gentleness in a Harsh World", verse: "Colossians 3:12" },
        ],
      },
      {
        name: "June",
        lessons: [
          { week: 23, title: "Self-Control: Winning the Battle Within", verse: "1 Corinthians 9:24-27" },
          { week: 24, title: "Integrity: Who You Are in the Dark", verse: "Proverbs 10:9" },
          { week: 25, title: "Humility Over Pride", verse: "Philippians 2:3-4" },
          { week: 26, title: "Character Test: Facing Temptation", verse: "1 Corinthians 10:13" },
        ],
      },
    ],
  },
  {
    id: "q3",
    number: 3,
    theme: "Community",
    weekRange: "Weeks 27–39",
    months: [
      {
        name: "July",
        lessons: [
          { week: 27, title: "Made for Community", verse: "Genesis 2:18" },
          { week: 28, title: "The Church as Family", verse: "Acts 2:42-47" },
          { week: 29, title: "Loving Your Neighbor", verse: "Mark 12:30-31" },
          { week: 30, title: "Friendship That Sharpens", verse: "Proverbs 27:17" },
        ],
      },
      {
        name: "August",
        lessons: [
          { week: 31, title: "Serving Like Jesus", verse: "John 13:12-15" },
          { week: 32, title: "Unity in a Divided World", verse: "Ephesians 4:1-3" },
          { week: 33, title: "Forgiveness and Reconciliation", verse: "Matthew 18:21-22" },
          { week: 34, title: "Encouraging One Another", verse: "1 Thessalonians 5:11" },
          { week: 35, title: "Standing Up for the Outsider", verse: "James 2:1-9" },
        ],
      },
      {
        name: "September",
        lessons: [
          { week: 36, title: "Sharing Your Faith with Confidence", verse: "1 Peter 3:15" },
          { week: 37, title: "Living on Mission", verse: "Matthew 28:18-20" },
          { week: 38, title: "Generosity That Gives First", verse: "2 Corinthians 9:6-7" },
          { week: 39, title: "Community Project: Serving Our City", verse: "Galatians 6:9-10" },
        ],
      },
    ],
  },
  {
    id: "q4",
    number: 4,
    theme: "Wisdom",
    weekRange: "Weeks 40–52",
    months: [
      {
        name: "October",
        lessons: [
          { week: 40, title: "The Beginning of Wisdom", verse: "Proverbs 9:10" },
          { week: 41, title: "Discerning God's Voice", verse: "1 Kings 19:11-13" },
          { week: 42, title: "Wise Words, Tamed Tongue", verse: "James 3:5-10" },
          { week: 43, title: "Money and Wisdom", verse: "Proverbs 3:9-10" },
        ],
      },
      {
        name: "November",
        lessons: [
          { week: 44, title: "Navigating Friendships and Peer Pressure", verse: "Proverbs 13:20" },
          { week: 45, title: "Wisdom for Dating and Relationships", verse: "1 Thessalonians 4:3-4" },
          { week: 46, title: "Screens, Social Media, and Wisdom", verse: "Philippians 4:8" },
          { week: 47, title: "Handling Doubt and Hard Questions", verse: "Jude 1:22" },
        ],
      },
      {
        name: "December",
        lessons: [
          { week: 48, title: "Walking in Purity", verse: "Psalm 119:9-11" },
          { week: 49, title: "Discerning Your Calling", verse: "Jeremiah 29:11" },
          { week: 50, title: "Finishing Well: Perseverance", verse: "Hebrews 12:1-2" },
          { week: 51, title: "A Legacy of Faith", verse: "2 Timothy 1:5" },
          { week: 52, title: "Rooted for Life: Commissioning", verse: "Colossians 2:7" },
        ],
      },
    ],
  },
];

export const totalWeeks = curriculum.reduce(
  (sum, quarter) =>
    sum + quarter.months.reduce((mSum, month) => mSum + month.lessons.length, 0),
  0
);
