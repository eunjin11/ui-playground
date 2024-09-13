"use client";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { CategoryType } from "../utils/types";
import EditSubCategorySection from "./EditSubCategorySection";

interface EditCategorySectionProps {
  allCategories: CategoryType[];
}

const EditCategorySection = ({ allCategories }: EditCategorySectionProps) => {
  const [categories, setCategories] = useState<CategoryType[]>(allCategories);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCategories(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="flex gap-3 justify-center p-6"
              {...provided.droppableProps}
            >
              {categories.map((item, index) => (
                <Draggable
                  key={item.categoryId}
                  draggableId={item.categoryId.toString()} // Ensure unique string ID
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-1 flex-1 rounded-xl border shadow-sm bg-white hover:bg-gray-100 focus:bg-gray-100"
                    >
                      <div className="p-2 text-xl font-bold flex items-center justify-center">
                        {item.categoryName}
                      </div>
                      <EditSubCategorySection subCategories={item.children} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default EditCategorySection;
