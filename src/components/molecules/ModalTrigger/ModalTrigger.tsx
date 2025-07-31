import { useState, type ReactNode } from "react";
import styles from "./ModalTrigger.module.scss";

interface ModalTriggerProps {
  triggerLabel: string;
  children: ReactNode;
  modalTitle?: string;
  modalWidth?: string;
}

export const ModalTrigger = ({
  triggerLabel,
  children,
  modalTitle,
  modalWidth = "400px",
}: ModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.trigger} onClick={() => setIsOpen(true)}>
        {triggerLabel}
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modal}
            style={{ width: modalWidth }}
            onClick={(e) => e.stopPropagation()}
          >
            {modalTitle && <h3 className={styles.title}>{modalTitle}</h3>}
            <div className={styles.content}>{children}</div>
            <button className={styles.close} onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};
