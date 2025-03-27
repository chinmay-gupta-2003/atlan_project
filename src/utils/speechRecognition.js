const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

export const startRecording = (setIsRecording, setGenerateQuery) => {
  if (!recognition) {
    alert("Speech recognition is not supported in your browser.");
    return;
  }

  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  recognition.onstart = () => setIsRecording(true);

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setGenerateQuery(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setIsRecording(false);
  };

  recognition.onend = () => setIsRecording(false);

  recognition.start();
};

export const stopRecording = (setIsRecording) => {
  if (!recognition) return;

  recognition.stop();
  setIsRecording(false);
};
