export type TFetchItemsResponse<T> = {
    items: T[];
    links: {
        last?: {
            href: string;
        };
        self: {
            href: string;
        };
        next?: {
            href: string;
        };
        first?: {
            href: string;
        };
        prev?: {
            href: string;
        };
    } | any;
    meta: {
        currentPage: number;
        pageCount: number;
        perPage: number;
        totalCount: number;
    } | any;
};
