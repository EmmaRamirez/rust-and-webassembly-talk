/* tslint:disable */
import * as wasm from './wasm_game_of_life_bg';

/**
*/
export class Universe {
    
    static __construct(ptr) {
        return new Universe(ptr);
    }
    
    constructor(ptr) {
        this.ptr = ptr;
    }
    
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        wasm.__wbg_universe_free(ptr);
    }
    /**
    * @returns {Universe}
    */
    static new() {
        return Universe.__construct(wasm.universe_new());
    }
    /**
    * @returns {number}
    */
    width() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return wasm.universe_width(this.ptr);
    }
    /**
    * @returns {number}
    */
    height() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return wasm.universe_height(this.ptr);
    }
    /**
    * @returns {number}
    */
    cells() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return wasm.universe_cells(this.ptr);
    }
    /**
    * @returns {void}
    */
    tick() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return wasm.universe_tick(this.ptr);
    }
}

const TextDecoder = typeof self === 'object' && self.TextDecoder
    ? self.TextDecoder
    : require('util').TextDecoder;

let cachedDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

