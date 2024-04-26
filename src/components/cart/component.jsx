import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/ui/cart/selectors";
import { DishContainer } from "../dish/container";
import styles from "./styles.module.scss";

export const Cart = ({ dishIds }) => {
    
    const total = useSelector((state) => selectCartTotal(state));


     return (
        <div>
            {dishIds?.length ? 
            <div>
                <div className={styles.basket}>Basket</div>
                {dishIds.map((dishId) => (
                    <DishContainer key={dishId} dishId={dishId} isCart={true} className={styles.cart} />
                ))}
                <hr className={styles.hr}/>
                <div className={styles.totalSum}>
                    <div className={styles.total}>
                        total
                    </div>
                    <div className={styles.sum}>
                        {total}$
                    </div>
                </div>
            </div>
            :
            <div>
                The basket is empty
            </div>
            }
            
        </div>
    )
       
};