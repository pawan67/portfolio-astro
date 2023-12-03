import type { Track } from "@/types/spotify";

export async function recentTrack() {
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=pawan67&api_key=${
      import.meta.env.PUBLIC_LAST_FM_API_KEY
    }&format=json`
  );
  const data = await res.json();
  const tracks: Track[] = data.recenttracks.track;
  return tracks[0];
}
