export type Endorsement = {
  quote: string;
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  isPlaceholder?: boolean;
};

// Replace these placeholder entries with real, permission-granted endorsements
// and reader reviews as they come in. Each entry that isn't marked as a
// placeholder is rendered into the page's Review structured data.
export const endorsements: Endorsement[] = [
  {
    quote:
      "Add your first endorsement here — a quote from a youth pastor, ministry director, or parent who has used ROOTED with their students.",
    name: "Your Name Here",
    role: "Title, Church or Organization",
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote:
      "This card is a placeholder too. Swap in a second endorsement once you've collected feedback from early readers.",
    name: "Your Name Here",
    role: "Title, Church or Organization",
    rating: 5,
    isPlaceholder: true,
  },
];
