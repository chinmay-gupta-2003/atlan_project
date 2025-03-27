import { useState } from "react";
import {
  MicrophoneIcon,
  PaperAirplaneIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import Modal from "components/Modal/Modal";
import styles from "components/Query/Query.module.css";

import { startRecording, stopRecording } from "utils/speechRecognition";

function GenerateQueryModal({
  openModalGenerate,
  setOpenModalGenerate,
  generateQuery,
  setGenerateQuery,
  handleKeyDownGenerate,
}) {
  const [generateActive, setGenerateActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Modal open={openModalGenerate} setOpen={setOpenModalGenerate}>
      <div className={styles.generateInputContainer}>
        <div
          className={`${styles.input} ${generateActive ? styles.active : ""}`}
        >
          <SparklesIcon height={18} className={styles.queryIcon} />
          <input
            type="text"
            placeholder="Type a query, or use microphone"
            value={generateQuery}
            onChange={(e) => setGenerateQuery(e.target.value)}
            onKeyDown={handleKeyDownGenerate}
            onFocus={() => setGenerateActive(true)}
            onBlur={() => setGenerateActive(false)}
          />
          <MicrophoneIcon
            height={18}
            className={styles.queryIcon}
            onClick={() => {
              if (!isRecording)
                startRecording(setIsRecording, setGenerateQuery);
              else stopRecording(setIsRecording);
            }}
          />
        </div>
        <button
          className={`${styles.btn} ${styles.btnGradient}`}
          onClick={handleKeyDownGenerate}
        >
          <span>Send</span>
          <PaperAirplaneIcon height={16} />
        </button>
      </div>
    </Modal>
  );
}

export default GenerateQueryModal;
