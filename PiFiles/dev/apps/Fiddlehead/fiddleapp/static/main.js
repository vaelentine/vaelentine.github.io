class Note {
  //note information
  constructor(name, duration, beat, velocity) {
    this.name = name;
    this.duration = duration;
    this.beat = beat;
    this.velocity = velocity;
  }
}

class Sequence {
  //One measure
  constructor(number_of_notes, measure, bpm) {
    //init sequence
    this.name = 'untitled'
    this.measure = measure || 0;
    this.notes = [];
    this.number_of_notes = number_of_notes;
    this.bpm = bpm || 120;
  }
  addNote(note) {
    this.notes.push(note)
    // console.log(`added ${note}`)
    // console.log(this.notes)
  }
  get length() {
    return this.notes.length
  }
}

class Arrangement {
  //manages arrangement of sequences (measures)
  //TODO expand to multitrack
  constructor() {
    this.name = 'untitled';
    this.measures = [];
  }
  add_measure(measure) {
    this.measures.push(measure);
  }
  remove_last_measure() {
    this.measures.pop();
  }
  remove_by_index(index) {
    this.measures.splice(index, 1);
  }

}

// class Player {
//   // manages current play position for instruments, sequences notes
//   constructor(arrangement, instrument) {
//     this.playing = false;
//     this.arrangement = arrangement;
//     this.measure = 0;
//     this.beat = 0;
//     this.instrument = instrument;
//   }
//   play() {
//     playing = true;
//     this.measure = 0;
//     this.beat = 0;
//     this.playBeat();
//   }
//   playBeat() {
//     let player = this;
//     let timeout = setTimeout(function() {
//       if (playing) {
//       //callback
//       player.playBeat();
//       //get the sequence to play
//       let sequence = player.arrangement.measures[player.measure];
//       // console.log(sequence)
//       //get the note to play
//       let note = sequence.notes[player.beat];
//       // console.log(note)
//       player.instrument.triggerAttackRelease(note.name, note.duration);
//       //increment the current beat
//       player.beat += 1;
//       // console.log(player.beat);
//
//       if (player.beat >= sequence.notes.length) {
//         // console.log('sequence length' + sequence.length)
//         player.beat = 0;
//         player.measure += 1;
//         player.measure = player.measure % player.arrangement.measures.length;
//       }
//     }
//     }, 60000 / player.arrangement.measures[player.measure].bpm)
//   };
//   stop() {
//     playing = false;
//   }
//   get currentBeat() {
//     return player.beat;
//   }
// };


//init Tone.js nodes
let synth = new Tone.Synth();
// let noise_synth = new Tone.NoiseSynth()
let velocity = new Tone.Gain();
let reverb = new Tone.Freeverb();
let p_p_delay = new Tone.PingPongDelay();
let filter = new Tone.Filter();
let distortion = new Tone.Distortion();
let chorus = new Tone.Chorus();
// let lfo = Tone.lfo();

//patch nodes to master output
synth.connect(velocity).connect(distortion).connect(filter).connect(chorus).connect(p_p_delay).connect(reverb).toMaster();

let note_set = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
let octaves = [...Array(6).keys()];

let sequence1 = new Sequence(4, 0, 110);
sequence1.addNote(new Note('A4', '4n', 0, 0.5));
sequence1.addNote(new Note('G4', '4n', 1, 0.5));
sequence1.addNote(new Note('C4', '4n', 2, 0.5));
sequence1.addNote(new Note('D4', '4n', 3, 0.5));
let arrangement = new Arrangement();
arrangement.add_measure(sequence1);
let player = new Player(arrangement, synth)
player.play();
console.log(player)


const fh_data = {
    beat: 1,
    measure: 1,
    beatsPerMeasure: 8,
    bpm: 150,
    beats: [],
    sequences:[],
    totalMeasures: 2,
    playing: false,
    songName: 'untitled',
    sequenceName: 'sequence',
    rootNoteIndex: 3,
    notes: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    scales: ['Chromatic', 'Major', 'Minor'],
}
