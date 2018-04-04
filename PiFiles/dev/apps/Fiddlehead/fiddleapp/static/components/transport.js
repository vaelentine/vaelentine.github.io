Vue.component('transport', {
  props: [

  ],
  template:
  `<div class="transport_module_div">
    <div class="digital_display_div inset">
      <div class="song_header">
        <div class="inline" id="song_name">song name</div>
        <div> </div>
        <div class="inline" id="song_pos">{{ currentMeasure }}:{{ currentBeat }}</div>
        <div class="inline"> / </div>
        <div class="inline" id="song_end">song_end </div>
        <div> </div>
        <div class="inline" id="seq_name">sequence name</div>
        <div class="inline" id="seq_number"> sequence number </div>
        <div class="inline"> / </div>
        <div class="inline" id="seq_total"> last sequence </div>
      </div>
      <div class="arrangement_cont">
        <div class="timeline">
          <div class="progress">
            <div class="seq_disp"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bt_cont">
      <div class="slot">
        <div class="tr_bt inline" id="prev_bt" > ◂◂ </div>
        <div class="tr_bt inline" id="play_bt" v-on:click=play()> ▶  </div>
        <div class="tr_bt inline" id="pause_bt" v-on:click=pause() > ❙❙ </div>
        <div class="tr_bt inline" id="stop_bt" v-on:click=stop() > ■ </div>
        <div class="tr_bt inline" id="next_bt"> ▸▸ </div>
      </div>
    </div>
  </div>`,
  data() {
    return {
      measuresPerSong: 1,
      stepsPerMeasure: 8,
      currentMeasure: 1,
      currentBeat: 1,
      bpm: 120,
      playing: false,
    }
  },
  methods: {
    update_clock() {

      let transport = this;
      if (playing) {
        console.log('!!')

        let timer = setTimeout( function () {
          transport.update_clock()
          transport.currentBeat += 1
          if (transport.currentBeat >= transport.stepsPerMeasure) {
            transport.currentBeat = 1;
            transport.currentMeasure += 1;
            transport.currentMeasure = transport.currentMeasure % transport.measuresPerSong
          }
          vm.$emit('currentBeat', transport.currentBeat)
          vm.$emit('currentMeasure', transport.currentMeasure)
        }, 60000/transport.bpm)
      }
        //callback to update position every 16 note starting at time 0
    },
    play() {

      playing = true;
      let transport = this;
      transport.currentBeat = 1;
      transport.update_clock()
    },
    pause() {
      playing = false;
      // paused = !paused;
      // paused? Tone.Transport.start(): Tone.Transport.pause()
    },
    stop() {
      playing = false;
      currentBeat = 1;
      // playing = false;
      // Tone.Transport.stop();
    },
    seekPrev() {
      currentMeasure -= 1;
    },
    seekNext() {
      currentMeasure += 1;
    }
  },
})
