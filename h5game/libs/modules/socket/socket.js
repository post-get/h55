var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    /**
     * The egret.WebSocket class enables code to establish a TCP socket connection, for sending and receiving character string or binary data.
     * To use the methods of the egret.WebSocket class, first use the constructor function new egret.WebSocket to create an egret.WebSocket object.
     * The socket transmits and receives data in asynchronous mode.
     * @event egret.Event.CONNECT Successfully connect to the server???
     * @event egret.ProgressEvent.SOCKET_DATA Receiving server data???
     * @event egret.Event.CLOSE Dispatched when the server closes the connection.
     * @event egret.ProgressEvent Dispatched when an IO error causes a send or load operation to fail.
     * @see http://edn.egret.com/cn/docs/page/602 WebSocket
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/socket/WebSocket.ts
     * @language en_US
     */
    /**
     * egret.WebSocket ?????????????????????????????????????????? (TCP) ?????????????????????????????????????????????????????????????????????
     * ????????? egret.WebSocket ??????????????????????????????????????? new egret.WebSocket ???????????? egret.WebSocket ?????????
     * ????????????????????????????????????????????????
     * @event egret.Event.CONNECT ????????????????????????
     * @event egret.ProgressEvent.SOCKET_DATA ????????????????????????
     * @event egret.Event.CLOSE ????????????????????????????????????
     * @event egret.IOErrorEvent.IO_ERROR ???????????????/???????????????????????????????????????????????????????????????
     * @see http://edn.egret.com/cn/docs/page/602 WebSocket
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/socket/WebSocket.ts
     * @language zh_CN
     */
    var WebSocket = (function (_super) {
        __extends(WebSocket, _super);
        /**
         * Create an egret.WebSocket object
         * This parameter is reserved for later versions. The connection address and port number are imported in the connect function
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????? egret.WebSocket ??????
         * ??????????????????????????????????????????????????????????????????????????? connect ???????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        function WebSocket(host, port) {
            if (host === void 0) { host = ""; }
            if (port === void 0) { port = 0; }
            var _this = _super.call(this) || this;
            /**
             * @private
             */
            _this._writeMessage = "";
            /**
             * @private
             */
            _this._readMessage = "";
            /**
             * @private
             */
            _this._connected = false;
            /**
             * @private
             */
            _this._connecting = false;
            /**
             * @private
             */
            _this._isReadySend = false;
            /**
             * @private
             */
            _this._bytesWrite = false;
            /**
             * @private
             */
            _this._type = WebSocket.TYPE_STRING;
            _this._connected = false;
            _this._writeMessage = "";
            _this._readMessage = "";
            _this.socket = new egret.ISocket();
            _this.socket.addCallBacks(_this.onConnect, _this.onClose, _this.onSocketData, _this.onError, _this);
            return _this;
        }
        /**
         * Connect the socket to the specified host and port number
         * @param host Name or IP address of the host to be connected
         * @param port Port number to be connected
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????????????????????????????
         * @param host ????????????????????????????????? IP ??????
         * @param port ????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.connect = function (host, port) {
            if (!this._connecting && !this._connected) {
                this._connecting = true;
                this.socket.connect(host, port);
            }
        };
        /**
         * ???????????????url??????
         * @param url ???????????????ws://echo.websocket.org:80
         */
        WebSocket.prototype.connectByUrl = function (url) {
            if (!this._connecting && !this._connected) {
                this._connecting = true;
                this.socket.connectByUrl(url);
            }
        };
        /**
         * Closesocket
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.close = function () {
            if (this._connected) {
                this.socket.close();
            }
        };
        /**
         * @private
         *
         */
        WebSocket.prototype.onConnect = function () {
            this._connected = true;
            this._connecting = false;
            this.dispatchEventWith(egret.Event.CONNECT);
        };
        /**
         * @private
         *
         */
        WebSocket.prototype.onClose = function () {
            this._connected = false;
            this.dispatchEventWith(egret.Event.CLOSE);
        };
        /**
         * @private
         *
         */
        WebSocket.prototype.onError = function () {
            if (this._connecting) {
                this._connecting = false;
            }
            this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        };
        /**
         * @private
         *
         * @param message
         */
        WebSocket.prototype.onSocketData = function (message) {
            if (typeof message == "string") {
                this._readMessage += message;
            }
            else {
                this._readByte._writeUint8Array(new Uint8Array(message));
            }
            egret.ProgressEvent.dispatchProgressEvent(this, egret.ProgressEvent.SOCKET_DATA);
        };
        /**
         * Refresh all data accumulated in the output buffer area of the socket
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.flush = function () {
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (this._writeMessage) {
                this.socket.send(this._writeMessage);
                this._writeMessage = "";
            }
            if (this._bytesWrite) {
                this.socket.send(this._writeByte.buffer);
                this._bytesWrite = false;
                this._writeByte.clear();
            }
            this._isReadySend = false;
        };
        /**
         * Write data in character string in the socket
         * @param message The character string to be written in the socket
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????????????????
         * @param message ??????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.writeUTF = function (message) {
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (this._type == WebSocket.TYPE_BINARY) {
                this._bytesWrite = true;
                this._writeByte.writeUTF(message);
            }
            else {
                this._writeMessage += message;
            }
            this.flush();
            // return;
            // if (this._isReadySend) {
            //     return;
            // }
            // this._isReadySend = true;
            // egret.callLater(this.flush, this);
        };
        /**
         * Read a UTF-8 character string from the socket
         * @returns {string}
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????? UTF-8 ?????????
         * @returns {string}
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.readUTF = function () {
            var message;
            if (this._type == WebSocket.TYPE_BINARY) {
                this._readByte.position = 0;
                message = this._readByte.readUTF();
                this._readByte.clear();
            }
            else {
                message = this._readMessage;
                this._readMessage = "";
            }
            return message;
        };
        /**
         * Write a series of bytes from the specified byte array. The writing operation starts from the location expressed by offset.
         * If the length parameter is ignored, the default length 0 indicates that data is written from offset in the entire buffer area.
         * If the offset parameter is ignored, data is written in the entire buffer area.
         * @param bytes The ByteArray object where data is read from
         * @param offset Zero-based offset in the ByteArray object. From here start performing data writing
         * @param length Number of bytes to be written Default value 0 indicates data is written in the entire buffer area from the value specified by the offset parameter
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????????????????????????????????????????????????????? offset ????????????????????????
         * ??????????????? length ???????????????????????? 0 ????????????????????? offset ??????????????????????????????
         * ?????????????????? offset ????????????????????????????????????
         * @param bytes ???????????????????????? ByteArray ??????
         * @param offset ByteArray ?????????????????????????????????????????????????????????????????????
         * @param length ????????????????????????????????? 0 ????????? offset ?????????????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.writeBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (!this._writeByte) {
                egret.$warn(3102);
                return;
            }
            this._bytesWrite = true;
            this._writeByte.writeBytes(bytes, offset, length);
            this.flush();
        };
        /**
         * Read data byte number specified by the length parameter from the socket. Read these bytes into the specified byte array starting from the location expressed by offset.
         * @param bytes The ByteArray object that data is read into
         * @param offset The offset for data reading starts from this byte array
         * @param length Byte number to be read Default value 0 indicates reading all available data
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????? length ???????????????????????????????????? offset ?????????????????????????????????????????????????????????????????????
         * @param bytes ????????????????????? ByteArray ??????
         * @param offset ??????????????????????????????????????????????????????
         * @param length ????????????????????????????????? 0 ?????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.readBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (!this._readByte) {
                egret.$warn(3102);
                return;
            }
            this._readByte.position = 0;
            this._readByte.readBytes(bytes, offset, length);
            this._readByte.clear();
        };
        Object.defineProperty(WebSocket.prototype, "connected", {
            /**
             * Indicates whether the Socket object is connected currently
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * ????????? Socket ???????????????????????????
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this._connected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WebSocket.prototype, "type", {
            /**
             * Format for sending and receiving data. The default setting is the character string format
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * ?????????????????????????????????????????????????????????
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                if (value == WebSocket.TYPE_BINARY && !this._writeByte) {
                    this._readByte = new egret.ByteArray();
                    this._writeByte = new egret.ByteArray();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Send and receive data in character string format
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.TYPE_STRING = "webSocketTypeString";
        /**
         * Send and receive data in binary format
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.TYPE_BINARY = "webSocketTypeBinary";
        return WebSocket;
    }(egret.EventDispatcher));
    egret.WebSocket = WebSocket;
    __reflect(WebSocket.prototype, "egret.WebSocket");
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    var native;
    (function (native) {
        /**
         * @private
         */
        var NativeSocket = (function () {
            function NativeSocket() {
                this.host = "";
                this.port = 0;
            }
            NativeSocket.prototype.addCallBacks = function (onConnect, onClose, onSocketData, onError, thisObject) {
                this.onConnect = onConnect;
                this.onClose = onClose;
                this.onSocketData = onSocketData;
                this.onError = onError;
                this.thisObject = thisObject;
            };
            NativeSocket.prototype.connect = function (host, port) {
                this.host = host;
                this.port = port;
                var socketServerUrl = "ws://" + this.host + ":" + this.port;
                this.socket = new __global["egret_native"]["WebSocket"](socketServerUrl);
                this._bindEvent();
            };
            NativeSocket.prototype.connectByUrl = function (url) {
                this.socket = new __global["egret_native"]["WebSocket"](url);
                this._bindEvent();
            };
            NativeSocket.prototype._bindEvent = function () {
                var that = this;
                var socket = this.socket;
                socket.onOpen = function () {
                    if (that.onConnect) {
                        that.onConnect.call(that.thisObject);
                    }
                };
                socket.onClose = function () {
                    if (that.onClose) {
                        that.onClose.call(that.thisObject);
                    }
                };
                socket.onError = function (errorCode) {
                    if (that.onError) {
                        that.onError.call(that.thisObject);
                    }
                };
                socket.onMessage = function (message) {
                    if (that.onSocketData) {
                        that.onSocketData.call(that.thisObject, message);
                    }
                };
            };
            NativeSocket.prototype.send = function (message) {
                this.socket.send(message);
            };
            NativeSocket.prototype.close = function () {
                this.socket.close();
            };
            NativeSocket.prototype.disconnect = function () {
                if (this.socket.disconnect) {
                    this.socket.disconnect();
                }
            };
            return NativeSocket;
        }());
        native.NativeSocket = NativeSocket;
        __reflect(NativeSocket.prototype, "egret.native.NativeSocket", ["egret.ISocket"]);
        if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE) {
            egret.ISocket = NativeSocket;
        }
    })(native = egret.native || (egret.native = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    var web;
    (function (web) {
        /**
         * @private
         */
        var HTML5WebSocket = (function () {
            function HTML5WebSocket() {
                this.host = "";
                this.port = 0;
                if (!window["WebSocket"]) {
                    egret.$error(3100);
                }
            }
            HTML5WebSocket.prototype.addCallBacks = function (onConnect, onClose, onSocketData, onError, thisObject) {
                this.onConnect = onConnect;
                this.onClose = onClose;
                this.onSocketData = onSocketData;
                this.onError = onError;
                this.thisObject = thisObject;
            };
            HTML5WebSocket.prototype.connect = function (host, port) {
                this.host = host;
                this.port = port;
                var socketServerUrl = "ws://" + this.host + ":" + this.port;
                this.socket = new window["WebSocket"](socketServerUrl);
                this.socket.binaryType = "arraybuffer";
                this._bindEvent();
            };
            HTML5WebSocket.prototype.connectByUrl = function (url) {
                this.socket = new window["WebSocket"](url);
                this.socket.binaryType = "arraybuffer";
                this._bindEvent();
            };
            HTML5WebSocket.prototype._bindEvent = function () {
                var that = this;
                var socket = this.socket;
                socket.onopen = function () {
                    if (that.onConnect) {
                        that.onConnect.call(that.thisObject);
                    }
                };
                socket.onclose = function (e) {
                    if (that.onClose) {
                        that.onClose.call(that.thisObject);
                    }
                };
                socket.onerror = function (e) {
                    if (that.onError) {
                        that.onError.call(that.thisObject);
                    }
                };
                socket.onmessage = function (e) {
                    if (that.onSocketData) {
                        that.onSocketData.call(that.thisObject, e.data);
                    }
                };
            };
            HTML5WebSocket.prototype.send = function (message) {
                this.socket.send(message);
            };
            HTML5WebSocket.prototype.close = function () {
                this.socket.close();
            };
            HTML5WebSocket.prototype.disconnect = function () {
                if (this.socket.disconnect) {
                    this.socket.disconnect();
                }
            };
            return HTML5WebSocket;
        }());
        web.HTML5WebSocket = HTML5WebSocket;
        __reflect(HTML5WebSocket.prototype, "egret.web.HTML5WebSocket", ["egret.ISocket"]);
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
            egret.ISocket = HTML5WebSocket;
        }
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
