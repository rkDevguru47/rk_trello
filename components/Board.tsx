'use client'

import { useBoardStore } from '@/store/BoardStore';
import { useEffect } from 'react';
import { DragDropContext,DropResult,Droppable } from 'react-beautiful-dnd';
import Column from './Column';

function Board() {
  const [board,getBoard,setBoardState] = useBoardStore((state)=>[
    state.board,
    state.getBoard,
    state.setBoardState,
  ]);
  
  
  useEffect(()=>{
      getBoard();
  },[getBoard])
  
 // console.log(board);

 const handleOnDragEnd = (result:DropResult)=>{
  const {destination,source,type} = result;
  // console.log(destination);
  // console.log(source);
  // console.log(type);
  if(!destination) return;
  if(type==="column"){
    const entries = Array.from(board.columns.entries());
    const [removed] = entries.splice(source.index,1);
    entries.splice(destination.index,0,removed);
    const rearrangedColumns = new Map(entries);
//break
    setBoardState({
      ...board,
      columns:rearrangedColumns
    })

  }

 }
  return (
    <>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='board' direction='horizontal' type='column'>
        {(provided)=>(
          <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto'
          >
            {
            Array.from(board.columns.entries()).map(([id,columns],index)=>(
              <Column
              key={id}
              id={id}
              todos={columns.todos}
              index={index}
              />
            ))
            }
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  ) 
}

export default Board