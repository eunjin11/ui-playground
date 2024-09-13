"use client";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { CategoryType } from "../utils/types";

interface EditSubCategorySectionProps {
  subCategories: CategoryType[];
}

const EditSubCategorySection = ({
  subCategories,
}: EditSubCategorySectionProps) => {
  const [categories, setCategories] = useState<CategoryType[]>(subCategories);

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
        <Droppable droppableId="droppable" direction="vertical">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="p-4"
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
                      className="p-4 m-4 rounded-xl border shadow-sm bg-white hover:bg-gray-100 focus:bg-gray-100"
                    >
                      <div className="flex items-center justify-center">
                        {item.categoryName}
                      </div>
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

export default EditSubCategorySection;
