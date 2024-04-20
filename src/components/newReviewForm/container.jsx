import { useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { NewReviewForm } from "./component";

export const NewReviewFormContainer = ({restaurantId, className}) => {

    
    const [createReview, {isLoading}] = useCreateReviewMutation();
    
    const onClick = useCallback((text) => {
        
        createReview({restaurantId, newReview: {
            userId: "dfb982e9-b432-4b7d-a756-7f6ff2e6af55",
            text,
            rating: 5,
        }})},[createReview, restaurantId])
    

    if (isLoading){
        return <div>Saving...</div>
    }
    return <NewReviewForm onClick={onClick} className={className}/>
};