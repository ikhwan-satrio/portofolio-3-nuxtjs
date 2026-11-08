<script setup lang="ts">
import QRCode from 'qrcode';

const musicTracks = ref([
  {
    id: 1,
    title: 'stephanie',
    artist: 'Nafeesisboujee',
    spotifyTrackId: '5rc7178sa2YRDlBFBHY0e8',
    spotifyUrl:
      'https://open.spotify.com/track/5rc7178sa2YRDlBFBHY0e8?si=304ed99bda8d46d8',
  },
  {
    id: 2,
    title: 'here with me',
    artist: 'd4vd',
    spotifyTrackId: '0NLm9bQG7ikL5k9x9TtYT7',
    spotifyUrl:
      'https://open.spotify.com/track/0NLm9bQG7ikL5k9x9TtYT7?si=f8646f85cbde41eb',
  },
  {
    id: 3,
    title: 'see you again',
    artist: 'Tyler, the Creator, Kali Uchis',
    spotifyTrackId: '7KA4W4McWYRpgf0fWsJZWB',
    spotifyUrl:
      'https://open.spotify.com/track/7KA4W4McWYRpgf0fWsJZWB?si=c05978b3bbb043b0',
  },
]);

const qrTrack = ref<(typeof musicTracks.value)[0] | null>(null);
const qrCanvas = useTemplateRef('qrCanvas');

const pad = (value: number) => String(value).padStart(2, '0');

async function showQR(track: (typeof musicTracks.value)[0]) {
  qrTrack.value = track;

  await nextTick();

  if (qrCanvas.value) {
    generateQRCode(track.spotifyUrl);
  }
}

async function generateQRCode(url: string) {
  const canvas = qrCanvas.value;
  if (!canvas) return;

  await QRCode.toCanvas(canvas, url, {
    width: 200,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  });
}
</script>

<template>
  <section class="border-y border-border bg-muted/30">
    <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
            On repeat
          </span>
          <h2 class="mt-3 font-display text-4xl leading-[0.9] sm:text-6xl">
            Favorite<br />
            <span class="italic">music</span>
          </h2>
        </div>
        <p class="max-w-sm text-sm leading-relaxed text-muted-foreground">
          The soundtrack to long nights and slow mornings. Scan a code, open
          Spotify, and listen along.
        </p>
      </div>

      <div class="mt-12 grid gap-2 border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(track, index) in musicTracks" :key="track.id" class="group flex flex-col bg-background p-4">
          <div class="flex items-baseline justify-between">
            <span class="font-mono text-[10px] text-muted-foreground">
              {{ pad(index + 1) }}
            </span>
            <span class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Spotify
            </span>
          </div>

          <div class="mt-4 h-58.5 overflow-hidden border rounded-2xl border-border">
            <iframe :src="`https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator&theme=0`"
              width="100%" height="100%" frameborder="0" allow="
                autoplay;
                clipboard-write;
                encrypted-media;
                fullscreen;
                picture-in-picture;
              " loading="lazy" class="h-full w-full" />
          </div>

          <div class="mt-4 flex items-start justify-between gap-3">
            <div class="min-w-0">
              <h3 class="truncate font-display text-2xl leading-none">
                {{ track.title }}
              </h3>
              <p class="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                {{ track.artist }}
              </p>
            </div>
            <button type="button"
              class="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              :aria-label="`Show QR code for ${track.title}`" @click="showQR(track)">
              <Icon name="lucide:qr-code" size="14" />
            </button>
          </div>

          <a :href="track.spotifyUrl" target="_blank" rel="noopener noreferrer"
            class="mt-4 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brand">
            Open in Spotify <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <p class="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
        These tracks fuel my coding sessions. What's on your playlist?
      </p>
    </div>
  </section>

  <UiDialog :open="!!qrTrack" @update:open="v => !v && (qrTrack = null)">
    <UiDialogContent class="rounded-none sm:max-w-md" @click.stop>
      <UiDialogHeader>
        <UiDialogTitle class="font-display text-3xl font-normal">
          Scan the code
        </UiDialogTitle>
        <UiDialogDescription>
          Open this track with Spotify on your phone.
        </UiDialogDescription>
      </UiDialogHeader>

      <div class="space-y-5 text-center">
        <div class="inline-block border border-border bg-white p-4">
          <canvas ref="qrCanvas" class="max-w-full" />
        </div>

        <div class="space-y-0.5">
          <p class="font-display text-xl leading-none">{{ qrTrack?.title }}</p>
          <p class="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            {{ qrTrack?.artist }}
          </p>
        </div>

        <a :href="qrTrack?.spotifyUrl" target="_blank" rel="noopener noreferrer">
          <UiButton class="w-full rounded-none font-mono text-[10px] uppercase tracking-[0.18em]">
            Open in Spotify <span aria-hidden="true">↗</span>
          </UiButton>
        </a>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
