import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export default class AppService {
  appHost: string;

  constructor() {
    if (process.env.PROD_SERVER_URL) {
      this.appHost = process.env.PROD_SERVER_URL;
    } else {
      this.appHost = `${window.location.protocol}//${window.location.host}`;
    }
  }

  static getAxiosInstance(config?: CreateAxiosDefaults): AxiosInstance {
    return axios.create(config);
  }
}
