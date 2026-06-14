export const ISR_REVALIDATE_SECONDS = 3600;

export const ssgConfig = {
  dynamic: "force-static" as const,
};

export const isrConfig = {
  revalidate: ISR_REVALIDATE_SECONDS,
};
