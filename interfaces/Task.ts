export interface ITask {
    id: number
    title: string
    checked: boolean
}

export type TaskProps = {
    title?: string
    checked?: boolean
};
