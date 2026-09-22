"use client";

import { useSyncExternalStore } from "react";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { ResourcesUnlockForm } from "@/components/ResourcesUnlockForm";

const STORAGE_KEY = "rooted_resources_unlocked";
const UNLOCK_EVENT = "rooted-resources-unlocked-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(UNLOCK_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(UNLOCK_EVENT, callback);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

export function ResourcesGate() {
  const isUnlocked = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function handleUnlock() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Write failed (private browsing, blocked storage, etc.) — the grid
      // still unlocks for the rest of this session via the dispatched event.
    }
    window.dispatchEvent(new Event(UNLOCK_EVENT));
  }

  if (isUnlocked) {
    return <ResourcesGrid />;
  }

  return (
    <div className="mt-10">
      <ResourcesUnlockForm onUnlock={handleUnlock} />

      <div className="relative mt-10">
        <div
          inert
          aria-hidden="true"
          className="pointer-events-none select-none opacity-60 blur-sm"
        >
          <ResourcesGrid />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink" />
      </div>
    </div>
  );
}
