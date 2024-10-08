import { Droppable, Draggable } from '@hello-pangea/dnd';

import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <Droppable droppableID="todos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className=" bg-white rounded-t-md [&>article]:p-4 mt-8"
        >
          {todos.map((todo, index) => (
            <Draggable
              key={todo.id}
              draggableId={`${todo.id}`}
              index={index}
            >
              {(draggableProvided) => (
                <TodoItem
                  todo={todo}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
