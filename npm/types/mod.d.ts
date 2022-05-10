export function jsEval(str: any, input: any, options: any): any;
export class fetchblock extends EventTarget {
    constructor(...args: any[]);
    request: any;
    transforms: any[];
    get type(): "fetch" | "block" | undefined;
    fetchData(fetchOptions?: {}, options?: {}): Promise<any>;
    run(options?: {}): Promise<any>;
    liquify(plan: any, dataset: any): any;
    flatten(): Promise<any[]>;
    parent: any;
    plan(options?: {}): Promise<{
        plan: any[];
        step: () => Promise<void>;
    }>;
}
export namespace fetchblocks {
    export { blockLoaders };
    export const env: Map<string, string>;
    export function loadFromText(text: any, loader: any, options: any): Promise<fetchblock>;
    export function loadFromText(text: any, loader: any, options: any): Promise<fetchblock>;
    export function loadFromURI(uri: any, loader: any): Promise<fetchblock>;
    export function loadFromURI(uri: any, loader: any): Promise<fetchblock>;
    export function run(steps: any, dataset: any, options?: {}): Promise<any>;
    export function run(steps: any, dataset: any, options?: {}): Promise<any>;
}
declare const blockLoaders: Map<any, any>;
export {};
