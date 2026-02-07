"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclePlatformSDK = void 0;
const axios_1 = __importStar(require("axios"));
class VehiclePlatformSDK {
    api;
    constructor(baseURL) {
        this.api = axios_1.default.create({ baseURL });
    }
    // Auth Module
    auth = {
        login: async (credentials) => {
            const { data } = await this.api.post('/auth/login', credentials);
            return data;
        },
        refresh: async (token) => {
            const { data } = await this.api.post('/auth/refresh', { refresh_token: token });
            return data;
        }
    };
    // Vehicles Module
    vehicles = {
        list: async () => {
            const { data } = await this.api.get('/vehicles');
            return data;
        },
        get: async (id) => {
            const { data } = await this.api.get(`/vehicles/${id}`);
            return data;
        },
        create: async (vehicle) => {
            const { data } = await this.api.post('/vehicles', vehicle);
            return data;
        }
    };
}
exports.VehiclePlatformSDK = VehiclePlatformSDK;
//# sourceMappingURL=index.js.map