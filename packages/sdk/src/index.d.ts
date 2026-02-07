export declare class VehiclePlatformSDK {
    private api;
    constructor(baseURL: string);
    auth: {
        login: (credentials: any) => Promise<any>;
        refresh: (token: string) => Promise<any>;
    };
    vehicles: {
        list: () => Promise<any>;
        get: (id: string) => Promise<any>;
        create: (vehicle: any) => Promise<any>;
    };
}
//# sourceMappingURL=index.d.ts.map