import { useCurrentTheme } from "../../contexts/ThemeContext";
import { Review } from "./component";

export const ReviewContainer = ({ review, className }) => {
    const {theme} = useCurrentTheme();

    return <Review review={review} theme={theme} className={className}/>
};