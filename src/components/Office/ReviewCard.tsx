type Review = {
    id: number;
    author: string;
    content: string;
    rating?: number;
};

function ReviewCard({ author, content, rating = 0 }: Review) {
    return (
         <div className="mx-auto my-8 text-center h-60 overflow-y-auto p-4">
      
      {/* Étoiles */}
      <p className="text-(--secondary-color) text-4xl mb-3">
        {"★".repeat(rating)}
      </p>

      {/* Nom */}
      <h4 className="font-semibold mb-2">
        {author}
      </h4>

      {/* Texte */}
      <p className="text-xs max-h-[100px] lg:max-w-[80%] mx-auto overflow-y-auto px-2">
        {content}
      </p>
    </div>

    )
}

export default ReviewCard;