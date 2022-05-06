export function jsEval(str: any, input: any, options: any): any;
export class fetchblock extends EventTarget {
    constructor(...args: any[]);
    request: any;
    transforms: any[];
    get type(): "fetch" | "block" | undefined;
    fetchData(fetchOptions?: {}, options?: {}): Promise<unknown>;
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
    export { loaders };
    export const env: Map<string, string>;
    export function loadFromText(text: any, loader: any): Promise<fetchblock>;
    export function loadFromText(text: any, loader: any): Promise<fetchblock>;
    export function load(uri: any, loader: any): void;
    export function load(uri: any, loader: any): void;
    export function run(steps: any, dataset: any, options?: {}): Promise<any>;
    export function run(steps: any, dataset: any, options?: {}): Promise<any>;
}
declare const loaders: Map<any, any>;
export {};
