import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import { create } from 'zustand'
import {database, storage} from '@/appwrite'

interface BoardState {
    board:Board;
    getBoard:()=>void;
    setBoardState:(board:Board)=>void; 
    updateTodoInDB:(todo:Todo,columnId:TypedColumn)=>void;
    searchString:string;
    setSearchString:(searchString:string)=>void;
    deleteTask: (taskIndex:number, todoId: Todo, id:TypedColumn)=>void;
    newTaskInput:string;
    setNewTaskInput:(input:string)=>void;
    newTaskType:TypedColumn;
    setNewTaskType:(columnId:TypedColumn)=>void;

}

export const useBoardStore = create<BoardState>((set,get) => ({
//search string
searchString:'',
setSearchString:(searchString)=>set({searchString}),

  //new task type
  setNewTaskType:(columnId:TypedColumn)=>set({newTaskType:columnId}),
  newTaskType:"todo",


newTaskInput:'',
setNewTaskInput:(input:string)=>set({newTaskInput:input}),
  board: {
    columns:new Map<TypedColumn,Column>()
  },
  getBoard: async () => {
    const board= await getTodosGroupedByColumn();
    set({board});
  },
  setBoardState:(board:Board)=>set({board}),

  deleteTask: async (taskIndex:number, todo: Todo, id:TypedColumn)=> {
    const newColumns= new Map(get().board.columns);
    newColumns.get(id)?.todos.splice(taskIndex,1);
    set({board:{columns:newColumns}});
    if(todo.image){
      await storage.deleteFile(todo.image.bucketID, todo.image.fileId);
    }
    await database.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id
    )
  },
  
  updateTodoInDB:async (todo,columnId)=>{
      await database.updateDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
        todo.$id,
        {
          title:todo.title,
          status:columnId,
        }
      )
   }


}));