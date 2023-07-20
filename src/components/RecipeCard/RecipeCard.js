import { Component } from "react";
import PropTypes from "prop-types";
import {
    AiOutlineClockCircle,
    AiOutlinePieChart,
    AiOutlineBarChart,
} from 'react-icons/ai';
import {
    HiTrash, HiZoomIn
} from 'react-icons/hi';
import {
    Container,
    InfoBlock,
    Name,
    Image, 
    Meta,
    RecipeInfo,
    BadgeList,
    Badge,
    Actions,
} from './RecipeCard.styled';
import { RecipeDifficulty } from "constants";
import { ImageModal } from "components/ImageModal/ImageModal";

export class RecipeCard extends Component{
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
        item: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            time: PropTypes.number.isRequired,
            servings: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
        }).isRequired
    };

    state = {
        selectedImg: null,
    }

    setSelectedImg = () => {
        this.setState({selectedImg: this.props.item.image})
    };

    closeModal = () => {
        this.setState({selectedImg: null})
    }

    render() {
        const {selectedImg} = this.state;
        const {
            item: {id, image, name, time, servings, calories, difficulty},
            onDelete
        } = this.props;

        return (
            <Container>
                <Image src={image} alt={name}></Image>
                <Meta>
                    <Name>{name}</Name>

                    <RecipeInfo>
                        <InfoBlock>
                            <AiOutlineClockCircle size="24"></AiOutlineClockCircle>
                            <span>{time} min</span>
                        </InfoBlock>
                        <InfoBlock>
                            <AiOutlinePieChart size="24"></AiOutlinePieChart>
                            <span>{servings} Servings</span>
                        </InfoBlock>                        <InfoBlock>
                            <AiOutlineBarChart size="24"></AiOutlineBarChart>
                            <span>{calories} Calories</span>
                        </InfoBlock>
                    </RecipeInfo>

                    <BadgeList>
                        <Badge active={difficulty === RecipeDifficulty.easy}>Easy</Badge>
                        <Badge active={difficulty === RecipeDifficulty.medium}>Medium</Badge>
                        <Badge active={difficulty === RecipeDifficulty.hard}>Hard</Badge>
                    </BadgeList>

                    <Actions>
                        <button aria-label="Delete" onClick = {() => onDelete(id)}>
                            <HiTrash></HiTrash>
                        </button>
                        <button aria-label="Zoom" onClick = {this.setSelectedImg}>
                            <HiZoomIn />
                        </button>
                    </Actions>
                </Meta>

                <ImageModal
                    isOpen={selectedImg !== null}
                    onClose={this.closeModal}
                    image={selectedImg}>
                </ImageModal>
            </Container>
        )
    }
}

// export const RecipeCard = ({
//     item: {image, name, time, servings, calories, difficulty},
// }) => {
//     return (
//         <div>
//             <img src={image} alt={name} width="240"></img>
//             <Name>{name}</Name>

//             <RecipeInfo>
//                 <InfoBlock>
//                     <AiOutlineClockCircle size='24' />
//                     <span>{time} time</span>
//                 </InfoBlock>
//                 <InfoBlock>
//                     <AiOutlinePieChart size='24' />
//                     <span>{servings} servings</span>
//                 </InfoBlock>
//                 <InfoBlock>
//                     <AiOutlineBarChart size='24' />
//                     <span>{calories} calories</span>
//                 </InfoBlock>
//             </RecipeInfo>

//             <div>
//                 <h3>Difficulty</h3>
//                 <BadgeList>
//                     <Badge active={difficulty === RecipeDifficulty.easy}
//                             type={RecipeDifficulty.easy}>
//                         easy
//                     </Badge>
//                     <Badge active={difficulty === RecipeDifficulty.medium}
//                             type={RecipeDifficulty.medium}>
//                         medium
//                     </Badge>
//                     <Badge active={difficulty === RecipeDifficulty.hard}
//                             type={RecipeDifficulty.hard}>
//                         hard
//                     </Badge>
//                 </BadgeList>
//             </div>
//         </div>
//     );
// };

// RecipeCard.propTypes = {
//     item: PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         time: PropTypes.number.isRequired,
//         servings: PropTypes.number.isRequired,
//         calories: PropTypes.number.isRequired,
//         difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
//     }).isRequired
// };