import AxiosInstance from '../../../core/api/axiosInstance';
import paramsSerializer from '../../../shared/utils/paramsSerializer';

export default {
  /**
   * CalculatePayments API
   */
  getData(data: any) {
    const { params } = data;

    console.log('SERVICE data=', data);

    return AxiosInstance().get(
      `https://api.dev.maroom.ru/api/v1/calculate_payments?${paramsSerializer(
        params,
      )}`,
    );
  },
};
