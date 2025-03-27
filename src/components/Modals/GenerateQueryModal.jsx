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
  onClick,
  setFindQuery,
  openModalGenerate,
  setOpenModalGenerate,
}) {
  const [query, setQuery] = useState("");

  const [active, setActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const onClickHandler = () => {
    setFindQuery(query);
    onClick(query);
    setOpenModalGenerate(false);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onClickHandler();
    }
  };

  return (
    <Modal
      open={openModalGenerate}
      setOpen={() => {
        setOpenModalGenerate(false);
      }}
    >
      <div className={styles.generateInputContainer}>
        <div className={`${styles.input} ${active ? styles.active : ""}`}>
          <SparklesIcon height={18} className={styles.queryIcon} />
          <input
            type="text"
            placeholder="Type a query, or use microphone"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <MicrophoneIcon
            height={18}
            className={`${isRecording ? styles.recordIcon : styles.queryIcon}`}
            onClick={() => {
              if (!isRecording) startRecording(setIsRecording, setQuery);
              else stopRecording(setIsRecording);
            }}
          />
        </div>
        <button
          className={`${styles.btn} ${styles.btnGradient}`}
          onClick={onClickHandler}
        >
          <span>Send</span>
          <PaperAirplaneIcon height={16} />
        </button>
      </div>
    </Modal>
  );
}

export default GenerateQueryModal;
