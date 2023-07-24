import {Formik, Field} from "formik";
import {nanoid} from 'nanoid';
import * as Yup from "yup";
import {FormField, Form, ErrorMessage} from './RecipeForm.styled';

const RecipeSchema = Yup.object().shape({
    name: Yup.string().required("Required Filed"),
    image: Yup.string().required("Required field"),
    time: Yup.number().positive(`must be >0!`).required("Required field"),
    servings: Yup.number().positive(`must be >0!`).required("Required field"),
    calories: Yup.number().positive(`must be >0!`).required("Required field"),
    difficulty: Yup.string().oneOf(['easy', 'medium', 'hard']).required("required field"),
})


export const RecipeForm = ({onSave}) => {
    return (
        <Formik 
            initialValues={{
                name: '',
                image: '',
                time: 0,
                servings: 0,
                calories: 0,
                difficulty: 'easy',
            }}
            validationSchema={RecipeSchema}
            onSubmit={(values, actions) => {
                onSave({...values, id: nanoid()})
                actions.resetForm();
            }}>
            <Form>
                <FormField>
                    Name
                    <Field name="name"/>
                    <ErrorMessage name="name" component="div"/>
                </FormField>
                <FormField>
                    Image
                    <Field name="image"/>
                    <ErrorMessage name="image" component="div"/>
                </FormField>
                <FormField>
                    Time
                    <Field type="number" name="time"/>
                    <ErrorMessage name="time" componenet="div"/>
                </FormField>
                <FormField>
                    Servings
                    <Field type="number" name="servings"/>
                    <ErrorMessage name="servings" componenet="div"/>
                </FormField>
                <FormField>
                    Calories
                    <Field type="number" name="calories"/>
                    <ErrorMessage name="calories" componenet="div"/>
                </FormField>
                <FormField>
                    Difficulty
                    <Field as='select' name='difficulty'>
                        <option name="easy">Easy</option>
                        <option name="medium">Medium</option>
                        <option name="hard">Hard</option>
                    </Field>
                    <ErrorMessage name="difficulty" component="div"></ErrorMessage>
                </FormField>

                <button type="submit">Add Recipe</button>
            </Form>
        </Formik>
    );
};