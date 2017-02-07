export default class Channel {
  constructor(data, channelName = 'default') {
    const listeners = [];
    data = data || {};

    this.subscribe = (fn, name = 'default') => {
      if (name === channelName) {
        listeners.push(fn)
      }
    };

    this.unsubscribe = (fn, name = 'default') => {
      if (name === channelName) {
        const idx = listeners.indexOf(fn);
        if (idx !== -1) listeners.splice(idx, 1);
      }
    };

    this.update = (fn, name = 'default') => {
      if (name === channelName) {
        if (fn) fn(data);
        listeners.forEach((l) => l(data));
      }
    }
  }
}
