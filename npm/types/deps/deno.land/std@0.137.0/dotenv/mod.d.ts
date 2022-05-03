export interface DotenvConfig {
    [key: string]: string;
}
export interface ConfigOptions {
    path?: string;
    export?: boolean;
    safe?: boolean;
    example?: string;
    allowEmptyValues?: boolean;
    defaults?: string;
}
export declare function parse(rawDotenv: string): DotenvConfig;
export declare function configSync(options?: ConfigOptions): DotenvConfig;
export declare function config(options?: ConfigOptions): Promise<DotenvConfig>;
export declare class MissingEnvVarsError extends Error {
    constructor(message?: string);
}
