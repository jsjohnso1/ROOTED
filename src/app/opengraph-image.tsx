import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            color: "#D97706",
            fontWeight: 700,
            display: "flex",
          }}
        >
          CHRISTIAN YOUTH MINISTRY CURRICULUM
        </div>
        <div
          style={{
            fontSize: 148,
            fontWeight: 800,
            letterSpacing: 8,
            color: "#F8FAFC",
            marginTop: 24,
            display: "flex",
          }}
        >
          ROOTED
        </div>
        <div
          style={{
            width: 160,
            height: 4,
            background: "#D97706",
            marginTop: 8,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 32,
            color: "#CBD5E1",
            marginTop: 28,
            display: "flex",
          }}
        >
          {siteConfig.subtitle}
        </div>
        <div
          style={{
            fontSize: 24,
            fontStyle: "italic",
            color: "#94A3B8",
            marginTop: 40,
            display: "flex",
          }}
        >
          &ldquo;{siteConfig.verse}&rdquo; — {siteConfig.verseReference}
        </div>
      </div>
    ),
    { ...size }
  );
}
