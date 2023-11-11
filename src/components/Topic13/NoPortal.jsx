import { useState } from "react";
import ModalContent from "./ModalContent.jsx";
import styles from "./PortalExample.module.css";

export default function NoPortal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setShowModal(true)}>
        Show modal without a portal
      </button>
      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </div>
  );
}
