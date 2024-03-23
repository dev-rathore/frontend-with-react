import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export default class AppService {
  appHost: string;

  constructor() {
    this.appHost = `${window.location.protocol}//${window.location.host}`;
  }

  static getAxiosInstance(config?: CreateAxiosDefaults): AxiosInstance {
    return axios.create(config);
  }
}
