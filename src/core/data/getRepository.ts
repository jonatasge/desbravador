import { GetRepository } from "@/core/domain/GetRepository";
import { request } from "@/core/infra/request";

export const getRepository: GetRepository = async (fullName) => {
  const response = await request(
    `${import.meta.env.VITE_API_URL}/repos/${fullName}`
  );

  return await response.json();
};
