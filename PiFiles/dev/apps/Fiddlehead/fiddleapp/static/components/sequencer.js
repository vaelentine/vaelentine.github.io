let v_seq = Vue.component('sequencer', {
  props: ['duration'],
  template:
  `<div class="sequencer_div">
    <div class="sequence_settings">
      <div class="range_container">
        <input class="beats" type="range" min="1" :max="max_beats" step="1" v-model.number="beats"/>
        <div class="info_text">beats: {{ beats }}</div>
      </div>
      <div class="range_container">
        <input class="root_note" type="range" min="1" :max="root_note_options.length" step="1" v-model.number="root_note_index"/>
        <div class="info_text">root: {{root_note_options[root_note_index]}}</div>
      </div>
      <div class="range_container">
        <input class="scale_type" type="range" min="1" max="12" step="1" v-model.number="scale_type_index"/>
        <div class="info_text">scale: {{scale_types[scale_type_index]}}</div>
      </div>
    </div>
    <div class="leds_container">
      <div v-for="beat of beats" :beat_number="beat" class="each_led_container">
        <led :beat_number="beat" on="false" />
        <div>{{beat}}</div>
      </div>
    </div>
    <div class="matrix_div" >
      <div v-for="beat of beats" class="beat_container" :beat="beat">
        <div v-for="note in scale_notes" div class="cell" :note_name="note" :beat_number="beat" value="False">{{note}}</div>
      </div>
      <button @click="update_current_beat">update</button>
      <div> current beat {{ update_current_beat() }}</div>
    </div>
  </div>`,
  data() {
    return {
      max_beats: 16,
      beats: 8,
      root_note_options: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
      root_note_index: 3,
      scale_notes: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
      scale_types: ['Chromatic', 'Major', 'Minor'],
      scale_type_index: 0,
      current_beat: 0
    }
  },
  methods: {
    update_current_beat() {
      console.log(player)
      // return player.beat;
     }
  }
})
