import { createHash } from 'crypto';

import { endpoints } from './endpoints';

type OVHOptions = {
  endpoint?: keyof typeof endpoints;
};

class OVHBase {
  appKey: string;
  appSecret: string;
  consumerKey: string;
  options: OVHOptions;

  constructor(appKey: string, appSecret: string, consumerKey: string, options?: OVHOptions) {
    this.appKey = appKey;
    this.appSecret = appSecret;
    this.consumerKey = consumerKey;
    this.options = {
      endpoint: 'ovh-eu',
      ...options,
    };
  }

  async request(method: string, path: string, body?: any) {
    const host = endpoints[this.options.endpoint].host;
    const headers = {
      'Content-Type': 'application/json',
      'X-Ovh-Application': this.appKey,
      'X-Ovh-Consumer': this.consumerKey,
      'X-Ovh-Timestamp': `${Math.round(Date.now() / 1000)}`,
    };

    let reqBody = null;
    if (body) {
      reqBody = JSON.stringify(body);
      headers['Content-Length'] = reqBody.length;
    }

    const url = `https://${host}/1.0${path}`;

    headers['X-Ovh-Signature'] = this.signRequest(method, url, reqBody, headers['X-Ovh-Timestamp']);

    const result = await fetch(url, {
      headers,
      method,
      body: reqBody,
    });

    if (result.status !== 200) {
      throw new Error(`OVH API error: ${result.status} ${result.statusText}`);
    }

    return result.json();
  }

  signRequest(method: string, url: string, body: string, timestamp: string) {
    const s = [this.appSecret, this.consumerKey, method, url, body || '', timestamp];
    return '$1$' + createHash('sha1').update(s.join('+')).digest('hex');
  }
}

export default OVHBase;
