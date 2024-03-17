export interface TodosArray{
    id:number;
    todo:string;
    checked:boolean
}


export interface InputModalProps{
    create: (todo:TodosArray) => void;
}

export interface TodoProps{
    todo:TodosArray;
    deleteTodoItem: (id:number) => void ;
    update: (id:number)=> void;
}