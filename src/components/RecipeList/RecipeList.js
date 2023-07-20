import { RecipeCard } from "../RecipeCard/RecipeCard";
import PropTypes from "prop-types";
import {List, ListeItem} from './RecipeList.styled';

export const RecipeList = ({items, onDelete, onSelect}) => {
    return (
        <List>
            {items.map(item => (
                <ListeItem>
                    <RecipeCard item={item} onDelete={onDelete}></RecipeCard>
                </ListeItem>
            ))}
        </List>
    );
};

RecipeList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired
};