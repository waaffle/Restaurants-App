import { useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { NewReviewForm } from "./component";
import { useCurrentTheme } from "../../contexts/ThemeContext";
import "../../styles.scss"

export const NewReviewFormContainer = ({restaurantId, className}) => {

    const {theme} = useCurrentTheme();

    const [createReview, {isLoading}] = useCreateReviewMutation();
    
    const onClick = useCallback((text, rating) => {
        
        createReview({restaurantId, newReview: {
            userId: "dfb982e9-b432-4b7d-a756-7f6ff2e6af55",
            text,
            rating,
        }})},[createReview, restaurantId])
    

    if (isLoading){
        return <span className={"loader"}></span>
    }
    return <NewReviewForm theme={theme} onClick={onClick} className={className}/>
};