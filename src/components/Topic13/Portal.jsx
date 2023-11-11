import { useState } from "react";
import ModalContent from "./ModalContent.jsx";
import styles from "./PortalExample.module.css";
import { createPortal } from "react-dom";

export default function Portal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}
