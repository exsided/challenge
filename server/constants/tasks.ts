import {ITask} from '@/server/interfaces/Task'

export const EMPTY_TASK: ITask = {
    id: -1,
    title: '',
    checked: false,
};

export const TASKS: ITask[] = [
    {id: 1, title: "Поспать на солнечном месте", checked: false},
    {id: 2, title: "Надавить на клавиши компьютера", checked: true},
    {id: 3, title: "Попросить еды в 3 утра", checked: true},
    {id: 4, title: "Разорвать обои в спальне", checked: false},
    {id: 5, title: "Сделать 10 кругов вокруг стола", checked: false},
    {id: 6, title: "Погладить хозяина лапой", checked: false},
    {id: 7, title: "Съесть все растения в доме", checked: false},
    {id: 8, title: "Устроить гонки по коридору", checked: false},
    {id: 9, title: "Найти и уничтожить все бумажные пакеты", checked: false},
    {id: 10, title: "Присоединиться к видеоконференции", checked: false},
    {id: 11, title: "Выучить язык собак", checked: false},
    {id: 12, title: "Создать коллекцию из потерянных носков", checked: true},
    {id: 13, title: "Провести научное исследование мух", checked: true},
    {id: 14, title: "Устроить концерт на пианино", checked: true},
    {id: 15, title: "Пройти курс по кулинарии (для кошек)", checked: true},
    {id: 16, title: "Написать роман о приключениях кота", checked: false},
    {id: 17, title: "Стать экспертом по нюханию воздуха", checked: false},
    {id: 18, title: "Создать новую теорию относительности", checked: false},
    {id: 19, title: "Выиграть конкурс красоты среди котов", checked: true},
    {id: 20, title: "Изобрести машину времени для кошачьего корма", checked: true}
];
