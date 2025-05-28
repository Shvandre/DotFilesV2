/*eslint-disable @typescript-eslint/no-explicit-any*/
class EventEmitter {
    callbacks = {};
    on(event, cb) {
        if (!this.callbacks[event])
            this.callbacks[event] = [];
        this.callbacks[event].push(cb);
    }
    off(event, cb) {
        const cbs = this.callbacks[event];
        if (cbs) {
            this.callbacks[event] = cbs.filter(item => item !== cb);
        }
    }
    emit(event, data) {
        const cbs = this.callbacks[event];
        if (cbs) {
            cbs.forEach(cb => cb(data));
        }
    }
    once(event, cb) {
        const wrapper = (...args) => {
            cb(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}

const seeIsEvent = (method) => {
  switch (method) {
    case "accountsChanged":
    case "chainChanged":
      return true;
    default:
      return false;
  }
};
class TonProvider extends EventEmitter {
  constructor(instance) {
    super();
    this.isTonkeeper = true;
    this.targetOrigin = "*";
    this.nextJsonRpcId = 0;
    this.promises = {};
    this.onMessage = async (event) => {
      if (!event || !event.data) {
        return;
      }
      if (event.data.type !== "TonkeeperAPI") return;
      const data = event.data;
      if (!data || !data.message || !data.message.jsonrpc) {
        return;
      }
      const message = data.message;
      if ("event" in message) {
        this.emit(`tonConnect_event`, { event: message.event, payload: message.payload, id: message.id });
        return;
      }
      const { id, method, error, result } = message;
      if (typeof id !== "undefined") {
        const promise = this.promises[id];
        if (promise) {
          if (message.error) {
            promise.reject(error);
          } else {
            promise.resolve(result);
          }
          delete this.promises[id];
        }
      } else {
        if (method && seeIsEvent(method)) {
          this.emit(method, result);
        }
      }
    };
    if (instance) {
      this.nextJsonRpcId = instance.nextJsonRpcId;
      this.promises = instance.promises;
      this.callbacks = instance.callbacks;
      instance.destroyTonkeeper();
    }
    window.addEventListener("message", this.onMessage);
  }
  send(method, ...params) {
    if (!method || typeof method !== "string") {
      return Promise.reject("Method is not a valid string.");
    }
    if (params.length === 1 && params[0] instanceof Array) {
      params = params[0];
    }
    const id = this.nextJsonRpcId++;
    const payload = {
      jsonrpc: "2.0",
      id,
      method,
      params,
      origin: window.origin
    };
    const promise = new Promise((resolve, reject) => {
      this.promises[payload.id] = {
        resolve,
        reject
      };
    });
    window.postMessage(
      {
        type: "TonkeeperProvider",
        message: payload
      },
      this.targetOrigin
    );
    return promise;
  }
  destroyTonkeeper() {
    window.removeEventListener("message", this.onMessage);
  }
}

class TonApi {
  constructor(provider) {
    this.provider = provider;
    this.fetch = async (url, options) => {
      const { payload, status, statusText, headers } = await this.provider.send(
        "tonapi_request",
        url,
        options
      );
      return new Response(JSON.stringify(payload), {
        status,
        statusText,
        headers: new Headers(headers)
      });
    };
  }
}

var TON_CONNECT_MSG_VARIANTS_ID;
(function (TON_CONNECT_MSG_VARIANTS_ID) {
    TON_CONNECT_MSG_VARIANTS_ID["BATTERY"] = "battery";
    TON_CONNECT_MSG_VARIANTS_ID["GASLESS"] = "gasless";
})(TON_CONNECT_MSG_VARIANTS_ID || (TON_CONNECT_MSG_VARIANTS_ID = {}));
var CONNECT_EVENT_ERROR_CODES;
(function (CONNECT_EVENT_ERROR_CODES) {
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_NOT_FOUND_ERROR"] = 2] = "MANIFEST_NOT_FOUND_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_CONTENT_ERROR"] = 3] = "MANIFEST_CONTENT_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(CONNECT_EVENT_ERROR_CODES || (CONNECT_EVENT_ERROR_CODES = {}));
var CONNECT_ITEM_ERROR_CODES;
(function (CONNECT_ITEM_ERROR_CODES) {
    CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(CONNECT_ITEM_ERROR_CODES || (CONNECT_ITEM_ERROR_CODES = {}));
var DISCONNECT_ERROR_CODES;
(function (DISCONNECT_ERROR_CODES) {
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(DISCONNECT_ERROR_CODES || (DISCONNECT_ERROR_CODES = {}));
var SEND_TRANSACTION_ERROR_CODES;
(function (SEND_TRANSACTION_ERROR_CODES) {
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(SEND_TRANSACTION_ERROR_CODES || (SEND_TRANSACTION_ERROR_CODES = {}));
var SIGN_DATA_ERROR_CODES;
(function (SIGN_DATA_ERROR_CODES) {
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(SIGN_DATA_ERROR_CODES || (SIGN_DATA_ERROR_CODES = {}));

class TonConnectError extends Error {
    code;
    constructor(message, code = CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR) {
        super(message);
        this.code = code;
    }
}

const formatConnectEventError = (error) => {
  return {
    event: "connect_error",
    id: Date.now(),
    payload: {
      code: error.code,
      message: error.message
    }
  };
};
class TonConnect {
  constructor(provider, tonconnect) {
    this.provider = provider;
    this.callbacks = [];
    this.walletInfo = {
      name: "Tonkeeper",
      image: "https://tonkeeper.com/assets/tonconnect-icon.png",
      tondns: "tonkeeper.ton",
      about_url: "https://tonkeeper.com"
    };
    this.protocolVersion = 2;
    this.isWalletBrowser = false;
    this.connect = async (protocolVersion, message) => {
      if (protocolVersion > this.protocolVersion) {
        return this.notify(
          formatConnectEventError(new TonConnectError("Unsupported protocol version", 1))
        );
      }
      try {
        const payload = await this.provider.send(
          "tonConnect_connect",
          message
        );
        return this.notify({
          event: "connect",
          id: Date.now(),
          payload
        });
      } catch (e) {
        if (e instanceof TonConnectError) {
          return this.notify(formatConnectEventError(e));
        } else {
          return this.notify(
            formatConnectEventError(
              new TonConnectError(e.message ?? "Unknown error")
            )
          );
        }
      }
    };
    this.disconnect = async () => {
      await this.provider.send(`tonConnect_disconnect`);
      return this.notify({
        event: "disconnect",
        id: Date.now(),
        payload: {}
      });
    };
    this.restoreConnection = async () => {
      try {
        const payload = await this.provider.send(
          "tonConnect_reconnect",
          [{ name: "ton_addr" }]
        );
        return this.notify({
          event: "connect",
          id: Date.now(),
          payload
        });
      } catch (e) {
        if (e instanceof TonConnectError) {
          return this.notify(formatConnectEventError(e));
        } else {
          return this.notify(
            formatConnectEventError(
              new TonConnectError(e.message ?? "Unknown error")
            )
          );
        }
      }
    };
    this.send = async (message) => {
      try {
        const payload = Array.isArray(message.params) ? message.params.map((item) => JSON.parse(item)) : JSON.parse(message.params);
        const result = await this.provider.send(
          `tonConnect_${message.method}`,
          payload
        );
        return {
          result,
          id: String(message.id)
        };
      } catch (e) {
        if (e instanceof TonConnectError) {
          return {
            error: e,
            id: String(message.id)
          };
        } else {
          return {
            error: new TonConnectError(e.message ?? "Unknown error"),
            id: String(message.id)
          };
        }
      }
    };
    this.listen = (callback) => {
      this.callbacks.push(callback);
      const callbacks = this.callbacks;
      return () => {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      };
    };
    this.notify = (event) => {
      this.callbacks.forEach((item) => item(event));
      return event;
    };
    if (tonconnect) {
      this.callbacks = tonconnect.callbacks;
    } else {
      provider.on("chainChanged", () => {
        this.notify({
          event: "disconnect",
          id: Date.now(),
          payload: {}
        });
      });
      provider.on("tonConnect_event", (params) => {
        this.notify({
          event: params.event,
          id: params.id ?? Date.now(),
          payload: params.payload
        });
      });
    }
  }
}

const havePrevInstance = !!window.tonkeeper;
const provider = new TonProvider(window?.tonkeeper?.provider);
const tonconnect = new TonConnect(provider, window?.tonkeeper?.tonconnect);
const tonapi = new TonApi(provider);
window.tonkeeper = {
  provider,
  tonconnect
};
window.tonapi = tonapi;
if (!havePrevInstance) {
  window.dispatchEvent(new Event("tonready"));
}
