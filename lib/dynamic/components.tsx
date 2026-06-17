import dynamic from "next/dynamic";
import Loader from "@/components/UI/Loader/Loader";

export const DynamicNoteModal = dynamic(() => import("@/components/NoteModal/NoteModal"), {
  loading: () => <Loader />,
  ssr: false,
});

export const DynamicStatistics = dynamic(() => import("@/components/Statistics/Statistics"), {
  loading: () => <Loader />,
  ssr: false,
});

export const DynamicProfileForm = dynamic(() => import("@/components/ProfileForm/ProfileForm"), {
  loading: () => <Loader />,
});

export const DynamicProfileSettings = dynamic(
  () => import("@/components/ProfileSettings/ProfileSettings"),
  {
    loading: () => <Loader />,
  },
);
