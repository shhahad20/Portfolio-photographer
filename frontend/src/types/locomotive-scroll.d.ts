// locomotive-scroll.d.ts
declare module "locomotive-scroll" {
    interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth?: boolean;
      multiplier?: number;
      class?: string;
      reloadOnContextChange?: boolean;
      smartphone?: {
        smooth?: boolean;
        breakpoint?: number;
        getDirection?: boolean;
      };
      tablet?: {
        smooth?: boolean;
        breakpoint?: number;
        getDirection?: boolean;
      };
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      update(): void;
      scrollTo(target: any, offset?: number, duration?: number, easing?: any): void;
      start(): void;
      stop(): void;
      destroy(): void;
      on(event: string, callback: (args: any) => void): void;
      off(event: string, callback: (args: any) => void): void;
      // Add additional properties/methods as needed
      readonly scroll: {
        instance: {
          scroll: {
            y: number;
          };
        };
      };
    }
  }
  