export type Resource = {
  title: string;
  description: string;
  category:
    | "Printables"
    | "Quarterly Supply Lists"
    | "Social Media Post Appendices";
  fileSize: string;
  // TODO: replace with the real hosted PDF path once files are uploaded (e.g. /downloads/file.pdf).
  href: string;
};

export const resources: Resource[] = [
  {
    title: "September Week 5 Service Night Launch Kit",
    description:
      "Everything you need to plan and run a Service Night gathering during Week 5 of September, including setup steps and project ideas.",
    category: "Printables",
    fileSize: "PDF · 4.2 MB",
    href: "/downloads/September%20Week%205%20Service%20Night%20Launch%20Kit.pdf",
  },
  {
    title: "November Week 5 Gratitude Feast Appendix",
    description:
      "Supplemental activity guide and discussion questions for hosting a Gratitude Feast gathering during Week 5 of November.",
    category: "Printables",
    fileSize: "PDF · 4.3 MB",
    href: "/downloads/November%20Week%205%20Gratitude%20Feast%20Appendix.pdf",
  },
  {
    title: "December Week 5 New Year Dedication Ceremony Appendix",
    description:
      "Guide and materials for leading a New Year Dedication Ceremony with your group during Week 5 of December.",
    category: "Printables",
    fileSize: "PDF · 4.4 MB",
    href: "/downloads/December%20Week%205%20New%20Year%20Dedication%20Ceremony%20Appendix.pdf",
  },
  {
    title: "Quarter 1 Supply List",
    description:
      "Everything you'll need to gather ahead of time for every lesson and activity in the Identity quarter.",
    category: "Quarterly Supply Lists",
    fileSize: "PDF · 4.0 MB",
    href: "/downloads/Quarter%201%20Supply%20List.pdf",
  },
  {
    title: "Quarter 2 Supply List",
    description:
      "Everything you'll need to gather ahead of time for every lesson and activity in the Character quarter.",
    category: "Quarterly Supply Lists",
    fileSize: "PDF · 4.0 MB",
    href: "/downloads/Quarter%202%20Supply%20List.pdf",
  },
  {
    title: "Quarter 3 Supply List",
    description:
      "Everything you'll need to gather ahead of time for every lesson and activity in the Community quarter.",
    category: "Quarterly Supply Lists",
    fileSize: "PDF · 4.0 MB",
    href: "/downloads/Quarter%203%20Supply%20List.pdf",
  },
  {
    title: "Quarter 4 Supply List",
    description:
      "Everything you'll need to gather ahead of time for every lesson and activity in the Wisdom quarter.",
    category: "Quarterly Supply Lists",
    fileSize: "PDF · 4.0 MB",
    href: "/downloads/Quarter%204%20Supply%20List.pdf",
  },
  {
    title: "Quarter 1 Social Media Posts",
    description:
      "Ready-to-use social media graphics and promotional copy for church updates throughout the Identity quarter.",
    category: "Social Media Post Appendices",
    fileSize: "PDF · 4.2 MB",
    href: "/downloads/Quarter%201%20Social%20Media%20Appendix.pdf",
  },
  {
    title: "Quarter 2 Social Media Posts",
    description:
      "Ready-to-use social media graphics and promotional copy for church updates throughout the Character quarter.",
    category: "Social Media Post Appendices",
    fileSize: "PDF · 4.2 MB",
    href: "/downloads/Quarter%202%20Social%20Media%20Appendix.pdf",
  },
  {
    title: "Quarter 3 Social Media Posts",
    description:
      "Ready-to-use social media graphics and promotional copy for church updates throughout the Community quarter.",
    category: "Social Media Post Appendices",
    fileSize: "PDF · 4.2 MB",
    href: "/downloads/Quarter%203%20Social%20Media%20Appendix.pdf",
  },
  {
    title: "Quarter 4 Social Media Posts",
    description:
      "Ready-to-use social media graphics and promotional copy for church updates throughout the Wisdom quarter.",
    category: "Social Media Post Appendices",
    fileSize: "PDF · 4.2 MB",
    href: "/downloads/Quarter%204%20Social%20Media%20Appendix.pdf",
  },
];

export const resourceCategories = [
  "All",
  "Printables",
  "Quarterly Supply Lists",
  "Social Media Post Appendices",
] as const;
