/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginTicket = (function () {
    /**
     * Create a simple class to extract user ID from an ID Token
     *
     * @param {string} env Envelope of the jwt
     * @param {string} pay Payload of the jwt
     * @constructor
     */
    function LoginTicket(env, pay) {
        this._envelope = env;
        this._payload = pay;
    }
    LoginTicket.prototype.getEnvelope = function () {
        return this._envelope;
    };
    LoginTicket.prototype.getPayload = function () {
        return this._payload;
    };
    /**
     * Create a simple class to extract user ID from an ID Token
     *
     * @return {string} The user ID
     */
    LoginTicket.prototype.getUserId = function () {
        var payload = this.getPayload();
        if (payload && payload[LoginTicket.USER_ATTR]) {
            return payload[LoginTicket.USER_ATTR];
        }
        return null;
    };
    /**
     * Returns attributes from the login ticket.  This can contain
     * various information about the user session.
     *
     * @return {Object} The envelope and payload
     */
    LoginTicket.prototype.getAttributes = function () {
        return { envelope: this.getEnvelope(), payload: this.getPayload() };
    };
    return LoginTicket;
}());
LoginTicket.USER_ATTR = 'sub';
exports.LoginTicket = LoginTicket;
