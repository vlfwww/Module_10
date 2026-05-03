import React, { useState, useEffect } from "react";
import style from "./NoteModal.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import { NoteModalProps } from "../../types/notes";
import crossIcon from "../../assets/images/cross.svg";
import envelopeIcon from "../../assets/images/envelope.svg";
import pencilImage from "../../assets/images/pencil.svg";

const NoteModal: React.FC<NoteModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || "",
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTitle(initialData?.title || "");
      setDescription(initialData?.description || "");
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description);
    if (!initialData) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modalWindow} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className={style.header}>
            <p>{initialData ? "Edit note" : "Create a new note"}</p>
            <button
              type="button"
              onClick={onClose}
              className={style.closeButton}
            >
              <img src={crossIcon} alt="close" className={style.closeIcon} />
            </button>
          </div>

          <Input
            label="Title"
            iconSrc={envelopeIcon}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            label="Description"
            iconSrc={pencilImage}
            placeholder="Write description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className={style.footer}>
            <Button type="submit" className={style.modalButton}>
              {initialData ? "Save" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
