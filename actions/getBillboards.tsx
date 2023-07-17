import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_APP_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboards;
