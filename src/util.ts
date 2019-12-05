export function noop() { }

export function delay(ms: number) {
   return new Promise<void>(resolve => {
      setTimeout(resolve, ms);
   });
}

export function range(from: number, to: number) {
   const length = to - from + 1;
   const step = to > from ? 1 : -1;
   const arr = new Array(length);
   for (let i = from, j = 0; j < length; i += step, ++j) {
      arr[j] = i;
   }
   return arr;
}

export function once<T extends (...args: any[]) => void>(fn: T) {
   let triggered = false;
   return ((...args) => {
      if (triggered) return;
      triggered = true;
      fn.apply(null, args);
   }) as T;
}

export function lazy<T extends () => any>(fn: T) {
   let calculated = false;
   let result: ReturnType<T>;
   return (() => {
      if (calculated) return result;
      calculated = true;
      result = fn();
      return result;
   }) as T;
}

export function normalizeClassNames<T extends {
   [_: string]: undefined | boolean | number | string |
   Array<undefined | boolean | number | string>
}>(cns: T): {
      [_ in keyof T]: string;
   } {
   const result: { [_ in keyof T]: string } = {} as any;
   for (const key of Object.keys(cns)) {
      const _key = key as keyof T;
      const val = cns[_key];
      if (typeof val === 'string') {
         result[_key] = val;
         continue;
      }
      if (Array.isArray(val)) {
         result[_key] = val
            .filter(item => typeof item === 'string')
            .join(' ');
         continue;
      }
      result[_key] = '';
   }
   return result;
}

export function loadImg(url: string): Promise<HTMLImageElement> {
   return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
         resolve(img);
      };
      img.onerror = e => {
         reject(e);
      };
      img.src = url;
   });
}


export function randomInt(from: number, to: number) {
   return Math.floor(Math.random() * (to + 1 - from)) + from;
}

export function randomPointInCircle(x: number, y: number, radius: number) {
   const theta = Math.random() * 2 * Math.PI;
   const r2 = Math.random() * radius * radius;
   const r = Math.sqrt(r2);
   return [x + r * Math.cos(theta), y + r * Math.sin(theta)] as [number, number];
}

export class EventEmitter<T extends {
   [_: string]: any[];
} = {
   [_: string]: any[];
}> {
   public on<U extends keyof T>(event: U, handler: (...args: T[U]) => void): void;
   public on(event: string, handler: (...args: any[]) => {}): void;
   public on(event: any, handler: any) {
      if (!this._listeners[event]) this._listeners[event] = [];
      this._listeners[event].push(handler);
   }

   public once<U extends keyof T>(event: U, handler: (...args: T[U]) => void): void;
   public once(event: string, handler: (...args: any[]) => {}): void;
   public once(event: any, handler: any) {
      if (!this._listeners[event]) this._listeners[event] = [];
      const _handler = (...args: any[]) => {
         this.removeListener(event, _handler);
         handler(...args);
      };
      this._listeners[event].push(_handler);
   }

   public removeListener<U extends keyof T>(event: U, handler: (...args: T[U]) => void): void;
   public removeListener(event: string, handler: (...args: any[]) => {}): void;
   public removeListener(event: any, handler: any) {
      if (!this._listeners[event]) this._listeners[event] = [];
      const i = this._listeners[event].indexOf(handler);
      if (!~i) return;
      this._listeners[event][i] = void 0;
   }

   public removeAllListener<U extends keyof T>(event: U): void;
   public removeAllListener(event: string): void;
   public removeAllListener(event: string) {
      this._listeners[event] = [];
   }

   private _listeners: any = {};

   public listeners<U extends keyof T>(event: U): Array<undefined | ((...args: T[U]) => void)>;
   public listeners(event: string): Array<undefined | ((...args: any[]) => void)>;
   public listeners(event: string) {
      if (!this._listeners[event]) this._listeners[event] = [];
      return this._listeners[event];
   }

   public emit<U extends keyof T>(event: U, ...args: T[U]): void;
   public emit(event: string, ...args: any[]): void;
   public emit(event: string, ...args: any[]) {
      if (!this._listeners[event]) {
         this._listeners[event] = [];
         return;
      }
      const listeners = this._listeners[event];
      const len = listeners.length;
      for (let i = 0; i < len; ++i) {
         if (!listeners[i]) continue;
         listeners[i](...args);
      }
   }
}
