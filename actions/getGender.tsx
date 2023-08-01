import { Gender } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_APP_URL}/gender`;

const getGender = async (): Promise<Gender[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getGender;
