import axios, { AxiosRequestConfig } from 'axios';

import { apiClient } from './client';

export class ApiService {
  private config?: AxiosRequestConfig = {};

  private cancellationToken = axios.CancelToken.source();

  public static createInstance(): ApiService {
    const activeInstance = new ApiService();
    activeInstance.cancellationToken = axios.CancelToken.source();
    activeInstance.config.cancelToken = activeInstance.cancellationToken.token;
    return activeInstance;
  }

  public cancelRequests() {
    this.cancellationToken.cancel('RequestCancellation');
    return ApiService.createInstance();
  }

  public getCharacters = (id: number, randomT = 12) => {
    return apiClient.get(`/v0/item/${id}.json?t=${randomT}`);
  };
}
