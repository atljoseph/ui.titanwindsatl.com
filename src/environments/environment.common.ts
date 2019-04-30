
export interface IEnvironment {
    version: string,
    production: boolean,
    enableLogging: boolean,
    envCode: string
}

export const common: IEnvironment = {
    version: '1.0.0',
    production: false,
    enableLogging: true,
    envCode: 'DEV'
};

