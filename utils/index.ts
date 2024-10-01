export const CAMEL_TO_KEBAB = (string: string): string => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

export const GET_INDEX_BY_ID = <T extends {id:string|number}>(id: number, items:T[]): number => {
    return items.findIndex(item => item.id === id);
};
