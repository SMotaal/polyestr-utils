declare namespace polyestr {
    /* COMMON */
    interface PackageDetails {
        name: string; version: string;
        license?: string; author?: string;
        displayName?: string;
    }
    type Handler = ((...args) => any);
    type InfoLogger = Console['log' | 'info'] | Handler;
    type ErrorLogger = Console['error' | 'warn'] | Handler;
    type Logger = InfoLogger | ErrorLogger | Handler;
    type Loggers = Pick<Console, 'log' | 'info' | 'error' | 'warn'>;

    namespace bootstrap {


        /* BANNER */
        interface BannerDetails { banner: string }
        type BannerLogger = InfoLogger;
        function banner(packageDetails: Partial<PackageDetails>, logger?: BannerLogger | null): string;
        function banner(details: BannerDetails, logger?: BannerLogger | null): string;
        function banner(banner: string, logger?: BannerLogger | null): string;
        type BannerFunction = typeof banner;

    }
}

import bootstrap = polyestr.bootstrap;
