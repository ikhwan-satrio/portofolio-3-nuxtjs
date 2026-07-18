<script setup lang="ts">
import QRCode from "qrcode"

const musicTracks = ref([
  {
    id: 1,
    title: "stephanie",
    artist: "Nafeesisboujee",
    spotifyTrackId: "5rc7178sa2YRDlBFBHY0e8",
    spotifyUrl: "https://open.spotify.com/track/5rc7178sa2YRDlBFBHY0e8?si=304ed99bda8d46d8"
  },
  {
    id: 2,
    title: "here with me",
    artist: "d4vd",
    spotifyTrackId: "0NLm9bQG7ikL5k9x9TtYT7?si=f8646f85cbde41eb",
    spotifyUrl: "https://open.spotify.com/track/0NLm9bQG7ikL5k9x9TtYT7?si=f8646f85cbde41eb"
  },
  {
    id: 3,
    title: "see you again",
    artist: "Tyler, the creator, kali uchis",
    spotifyTrackId: "7KA4W4McWYRpgf0fWsJZWB?si=c05978b3bbb043b0",
    spotifyUrl: "https://open.spotify.com/track/7KA4W4McWYRpgf0fWsJZWB?si=c05978b3bbb043b0"
  }
])

const qrTrack = ref<typeof musicTracks.value[0] | null>(null)
const qrCanvas = useTemplateRef('qrCanvas')

async function showQR(track: typeof musicTracks.value[0]) {
  qrTrack.value = track

  await nextTick()

  if (qrCanvas.value) {
    generateQRCode(track.spotifyUrl)
  }
}

async function generateQRCode(url: string) {
  const canvas = qrCanvas.value
  if (!canvas) return

  await QRCode.toCanvas(canvas, url, {
    width: 200,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  })
}
</script>

<template>
  <!-- Favorite Music Section -->
  <section class="w-full min-h-screen py-24 bg-background">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-14 space-y-3">
        <h2
          class="text-3xl sm:text-4xl font-bold text-foreground">
          Favorite Music
        </h2>
        <p class="text-muted-foreground text-base max-w-xl mx-auto">
          Music that keeps me inspired while coding. Listen on Spotify!
        </p>
      </div>

      <!-- Music Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="track in musicTracks" :key="track.id"
          class="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all duration-200 group">

          <!-- Spotify Embed Player -->
          <div class="w-full aspect-square">
            <iframe :src="`https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator&theme=0`"
              width="100%" height="100%" frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
              class="rounded-t-xl"></iframe>
          </div>

          <!-- Track Info & Actions -->
          <div class="p-4 space-y-3">
            <div>
              <h3 class="font-medium text-foreground text-sm line-clamp-1">
                {{ track.title }}
              </h3>
              <p class="text-muted-foreground text-xs">{{ track.artist }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2">
              <a :href="track.spotifyUrl" target="_blank" rel="noopener noreferrer"
                class="flex-1 px-3 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Open in Spotify
              </a>
              <button @click="showQR(track)"
                class="px-3 py-2 border border-border hover:bg-muted rounded-lg text-xs font-medium transition-all duration-200">
                <Icon name="lucide:qr-code" size="14" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Message -->
      <div
        class="mt-10 bg-muted/30 rounded-xl p-6 border border-border/30 text-center">
        <p class="text-muted-foreground text-sm">
          These tracks fuel my coding sessions. What's on your playlist?
        </p>
      </div>
    </div>
  </section>

  <!-- QR Code Modal -->
  <Teleport to="body">
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="qrTrack" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="qrTrack = null">
        <Transition enter-active-class="transition-all duration-300 ease-out delay-100"
          enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95">
          <div v-if="qrTrack" class="bg-card rounded-2xl p-6 max-w-sm w-full border border-border/50 relative"
            @click.stop>
            <button @click="qrTrack = null"
              class="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors duration-200 text-muted-foreground hover:text-foreground">
              <Icon name="lucide:x" size="16" />
            </button>

            <div class="text-center space-y-5">
              <div>
                <h3 class="text-lg font-semibold text-foreground mb-1">
                  Scan QR Code
                </h3>
                <p class="text-muted-foreground text-xs">
                  Open with Spotify on your phone
                </p>
              </div>

              <div class="bg-muted rounded-xl p-5 inline-block">
                <canvas ref="qrCanvas" class="max-w-full"></canvas>
              </div>

              <div class="space-y-0.5">
                <p class="font-medium text-foreground text-sm">{{ qrTrack.title }}</p>
                <p class="text-xs text-muted-foreground">{{ qrTrack.artist }}</p>
              </div>

              <a :href="qrTrack.spotifyUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-xl text-sm font-medium transition-all duration-200">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Open in Spotify
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
