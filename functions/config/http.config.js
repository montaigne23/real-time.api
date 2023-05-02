"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpConfig = void 0;
class HttpConfig {
    get(deps) {
        return {
            url: deps.configService.get('MAIN_API_URL'),
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'e83ee7cbe6d2ed3d897c9583d2f221cd',
            },
        };
    }
}
exports.HttpConfig = HttpConfig;
//# sourceMappingURL=http.config.js.map