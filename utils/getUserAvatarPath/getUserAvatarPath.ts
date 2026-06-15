import { User } from "@/types/auth";
import { withBasePath } from "@/lib/paths";

export const getUserAvatarPath = (user: User | null) => {
  const img = user?.profileImage;
  if (!img) {
    return "";
  } else if (img.startsWith("http") || img.startsWith("blob:") || img.startsWith("data:")) {
    return img;
  }

 const cleanImg = img.startsWith("/") ? img : `/${img}`;
  return withBasePath(cleanImg);
};
