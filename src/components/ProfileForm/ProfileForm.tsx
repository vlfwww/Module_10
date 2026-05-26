import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import style from "./ProfileForm.module.css";
import { useAuth } from "../../context/AuthContext";
import { validateEmail } from "../../utils/validation";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";
import userIcon from "../../assets/images/fi-sr-user.svg";
import envelope from "../../assets/images/envelope.svg";
import pencil from "../../assets/images/pencil.svg";
import profileImg from "../../assets/images/eye.svg";
import { ProfileFormValues } from "../../types/auth";
import { useNotification } from "../../context/NotificationContext";
import { Avatar } from "@mui/material";

const ProfileInfoForm: React.FC = () => {
  const { t } = useTranslation();
  const { user, updateUserInfo, isLoading } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showNotification } = useNotification();

  const [profileImage, setProfileImage] = useState(user?.profileImage || profileImg);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isValid },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      description: user?.description || "",
    },
    mode: "onTouched",
  });

  const usernameValue = watch("username") || "";
  const emailValue = watch("email") || "";
  const descriptionValue = watch("description") || "";

  useEffect(() => {
    if (user) {
      reset({
        username: user.username || "",
        email: user.email || "",
        description: user.description || "",
      });
      setProfileImage(user.profileImage || profileImg);
    }
  }, [user, reset]);

  const handleUpdate = async (data: ProfileFormValues) => {
    try {
      await updateUserInfo({
        ...data,
        profileImage,
      });
      showNotification(t("profile_form.notifications.updated"), "success");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : t("profile_form.notifications.error");
      showNotification(errorMessage, "error");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      showNotification(t("profile_form.notifications.invalid_image"), "warning");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleChangePhotoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={style.infoForm} role="form" aria-labelledby="profile-title">
      <h2 id="profile-title" className={style.srOnly} style={{ display: "none" }}>
        {t("profile_form.title")}
      </h2>
      <div className={style.avatarSection}>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
          aria-hidden="true"
        />
        <Avatar alt={user?.username || "User"} src={profileImage} className={style.avatarImage} />
        <div className={style.avatarInfo}>
          <p className={style.userName}>{user?.username}</p>
          <button
            type="button"
            className={style.changePhotoBtn}
            onClick={handleChangePhotoClick}
            disabled={isLoading}
          >
            {t("profile_form.change_photo")}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <Input
          label={t("profile_form.username")}
          iconSrc={userIcon}
          pageType="profile"
          disabled={isLoading}
          isError={touchedFields.username && !!errors.username}
          isValid={touchedFields.username && !errors.username && usernameValue.length >= 3}
          errorMessage={errors.username?.message}
          {...register("username", {
            required: t("profile_form.errors.username_required"),
            minLength: { value: 3, message: t("profile_form.errors.username_short") },
          })}
        />

        <Input
          label={t("profile_form.email")}
          iconSrc={envelope}
          type="email"
          pageType="profile"
          disabled={isLoading}
          isError={touchedFields.email && !!errors.email}
          isValid={touchedFields.email && !errors.email && emailValue.length > 0}
          errorMessage={errors.email?.message}
          {...register("email", {
            required: t("profile_form.errors.email_required"),
            validate: (value) => validateEmail(value) || t("profile_form.errors.email_invalid"),
          })}
        />

        <Textarea
          label={t("profile_form.description")}
          iconSrc={pencil}
          placeholder={t("profile_form.desc_placeholder")}
          disabled={isLoading}
          value={descriptionValue}
          {...register("description", {
            maxLength: { value: 200, message: t("profile_form.errors.desc_max") },
          })}
        />

        <Button type="submit" className={style.saveBtn} disabled={!isValid || isLoading}>
          {isLoading ? t("profile_form.saving") : t("profile_form.save_changes")}
        </Button>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
