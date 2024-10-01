export const GET_LAST_ID = <T extends {id: number}>(items: T[]): number => {
    return items[items.length - 1].id || 0;
}

export const GET_INDEX_BY_ID = <T extends {id: string|number}>(id: number, items: T[]): number => {
    return items.findIndex(item => item.id === id);
};
