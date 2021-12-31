const AudioContextClass = (window.AudioContext ||
  window.webkitAudioContext ||
  window.mozAudioContext ||
  window.oAudioContext ||
  window.msAudioContext);

let context = null;

function initAudioContext() {
  if (!context && AudioContextClass) {
    // Web Audio API is available.
    context = new AudioContextClass();
  }
}

let oscillator1, oscillator2;

function dialTone(freq1, freq2){
  initAudioContext();

  stop();

  oscillator1 = context.createOscillator();
  oscillator1.frequency.value = freq1;
  gainNode = context.createGain ? context.createGain() : context.createGainNode();
  oscillator1.connect(gainNode,0,0);
  gainNode.connect(context.destination);
  gainNode.gain.value = .1;
  oscillator1.start ? oscillator1.start(0) : oscillator1.noteOn(0)

  oscillator2 = context.createOscillator();
  oscillator2.frequency.value = freq2;
  gainNode = context.createGain ? context.createGain() : context.createGainNode();
  oscillator2.connect(gainNode);
  gainNode.connect(context.destination);
  gainNode.gain.value = .1;
  oscillator2.start ? oscillator2.start(0) : oscillator2.noteOn(0)
};

function stop() {
  initAudioContext();

  oscillator1 && oscillator1.disconnect();
  oscillator2 && oscillator2.disconnect();
}
