import { api } from '@/adapter';

const getServiceStatusDesc = async (payload: any): Promise<any> => {
  return api({
    url: "performFind",
    method: "get",
    params: payload,
    cache: true
  });
}

export const UtilService = {
  getServiceStatusDesc
}