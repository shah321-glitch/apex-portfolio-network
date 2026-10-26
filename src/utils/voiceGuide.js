// Voice Guide Utility with natural speech synthesis tuning & fallbacks

class VoiceEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.initialized = false;

    if (this.synth) {
      this.loadVoices();
      if (typeof window !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = () => {
          this.loadVoices();
        };
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices() || [];
    if (this.voices.length > 0) {
      this.initialized = true;
    }
  }

  getBestVoice(personId) {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }

    const langPreferences = {
      vijay: ['en-IN', 'ta-IN', 'en-GB', 'en-US'],
      pavel: ['en-GB', 'en-US', 'en'],
      salman: ['en-IN', 'hi-IN', 'en-GB', 'en-US']
    };

    const prefs = langPreferences[personId] || ['en-US', 'en'];

    // Try finding matching voice by language preference
    for (const pref of prefs) {
      const match = this.voices.find(v => v.lang.toLowerCase().startsWith(pref.toLowerCase()) && !v.name.includes('female'));
      if (match) return match;
    }

    // Fallback: any English male or neutral voice
    const fallback = this.voices.find(v => v.lang.startsWith('en')) || this.voices[0];
    return fallback || null;
  }

  speak(personId, text, onEnd, onError, onStart) {
    if (!this.synth) {
      if (onEnd) setTimeout(onEnd, 4000);
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getBestVoice(personId);
    if (voice) {
      utterance.voice = voice;
    }

    // Tuning personality-specific acoustics
    switch (personId) {
      case 'vijay':
        // Authoritative, composed, statesperson cadence
        utterance.pitch = 0.88;
        utterance.rate = 0.92;
        utterance.volume = 1.0;
        break;
      case 'pavel':
        // Sharp, articulate, modern digital architect cadence
        utterance.pitch = 1.05;
        utterance.rate = 0.98;
        utterance.volume = 1.0;
        break;
      case 'salman':
        // Deep, charismatic, warm resonant baritone
        utterance.pitch = 0.78;
        utterance.rate = 0.88;
        utterance.volume = 1.0;
        break;
      default:
        utterance.pitch = 1.0;
        utterance.rate = 1.0;
        utterance.volume = 1.0;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (err) => {
      if (onError) onError(err);
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  isSpeaking() {
    return this.synth ? this.synth.speaking : false;
  }
}

export const voiceEngine = new VoiceEngine();

