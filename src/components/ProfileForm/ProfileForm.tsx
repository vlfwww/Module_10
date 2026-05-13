import React, { useState, useMemo, useRef } from "react";
import style from "./ProfileForm.module.css";
import { useAuth } from "../../context/AuthContext";
import { validateEmail } from "../../utils/validation";
import { getStorageItem } from "../../utils/storage";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";
import userIcon from "../../assets/images/fi-sr-user.svg";
import envelope from "../../assets/images/envelope.svg";
import pencil from "../../assets/images/pencil.svg";
import profileImg from "../../assets/images/profile.jpg";

const ProfileInfoForm: React.FC = () => {
  const { user, updateUserInfo } = useAuth();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [description, setDescription] = useState(user?.description || "");
  const [avatar, setAvatar] = useState(user?.avatar || profileImg);

  const isEmailFormatValid = useMemo(() => validateEmail(email), [email]);

  const isEmailTaken = useMemo(() => {
    if (email === user?.email) return false;
    const allUsers = getStorageItem("users", []);
    return allUsers.some((u: any) => u.email === email && u.id !== user?.id);
  }, [email, user]);

  const emailError = useMemo(() => {
    if (email.length > 0 && !isEmailFormatValid) return "Email is not valid";
    if (isEmailTaken) return "Email is already in use";
    return "";
  }, [email, isEmailFormatValid, isEmailTaken]);

  const isUsernameTaken = useMemo(() => {
    if (!username || username === user?.username) return false;
    const allUsers = getStorageItem("users", []);
    return allUsers.some(
      (u: any) => u.username === username && u.id !== user?.id,
    );
  }, [username, user]);

  const usernameError = useMemo(() => {
    if (username.length > 0 && username.length < 3)
      return "At least 3 characters";
    if (isUsernameTaken) return "This username is already taken";
    return "";
  }, [username, isUsernameTaken]);

  const canSave =
    !emailError && !usernameError && username.length >= 3 && isEmailFormatValid;

  const handleUpdate = () => {
    if (canSave) {
      updateUserInfo(email, username, description, avatar);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageToString = reader.result as string;
      setAvatar(imageToString);
    };

    reader.readAsDataURL(file);
  };

  const handleChangePhotoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={style.infoForm}>
      <div className={style.avatarSection}>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
        <img src={avatar} alt="profile" className={style.avatarImage} />
        <div className={style.avatarInfo}>
          <p className={style.userName}>Helena Hills</p>
          <button
            type="button"
            className={style.changePhotoBtn}
            onClick={handleChangePhotoClick}
          >
            Change profile photo
          </button>
        </div>
      </div>

      <Input
        label="Username"
        iconSrc={userIcon}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isError={!!usernameError}
        isValid={username.length >= 3 && !isUsernameTaken}
        errorMessage={usernameError}
        pageType="profile"
      />

      <Input
        label="Email"
        iconSrc={envelope}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isError={!!emailError}
        isValid={isEmailFormatValid && !isEmailTaken}
        errorMessage={emailError}
        pageType="profile"
      />

      <Textarea
        label="Description"
        iconSrc={pencil}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Tell us about yourself..."
      />

      <Button
        className={style.saveBtn}
        textColor="white"
        onClick={handleUpdate}
        disabled={!canSave}
      >
        Save Profile Changes
      </Button>
    </div>
  );
};

export default ProfileInfoForm;
