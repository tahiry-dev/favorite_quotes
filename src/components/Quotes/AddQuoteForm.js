import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../Error';

import { addQuote } from '../../apiCall/quoteSlice';

import { Form } from '../Styles.styled';

const addQuoteForm = () => {
    const user = useSelector(state => state.user.user);
    const loading = useSelector(state => state.quote.loaders.addQuote);
    const error = useSelector(state => state.quote.errors.addQuote);

    const dispatch = useDispatch();
    const {
        register, handleSubmit, reset, errors,
    } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('author', data.author);
        formData.append('description', data.description);
        formData.append('user_id', data.user_id);
        formData.append('image', data.image[0]);

        dispatch(addQuote(formData));
        reset();
    };
    return (
        <div>
            <Form className="add-quote" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        author="author"
                        placeholder="who is the author?"
                        ref={register({
                            required: {
                                value: true,
                                message: 'This field is mandatory',
                            },
                            minLength: {
                                value: 2,
                                message: 'Minimum 2 characters',
                            },
                            maxLength: {
                                value: 40,
                                message: 'Maximum 40 characters',
                            },
                        })}
                    />
                    <p>{errors.name && errors.name.message}</p>
                </div>
                <div>
                    <textarea
                        name="description"
                        placeholder="teh quote itself"
                        rows="5"
                        cols="20"
                        ref={register({
                            required: {
                                value: true,
                                message: 'This field is mandatory',
                            },
                            minLength: {
                                value: 6,
                                message: 'Minimum 6 characters',
                            },
                            maxLength: {
                                value: 50000,
                                message: 'Maximum 50.000 characters',
                            },
                        })}
                    />
                    <p>{errors.description && errors.description.message}</p>
                </div>
                <div>
                    <label htmlFor="image">
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'This field is mandatory',
                                },
                            })}
                        />
                        <p>{errors.image && errors.image.message}</p>
                    </label>
                </div>
                <div>
                    <input
                        type="hidden"
                        name="user_id"
                        defaultValue={user.id}
                        ref={register}
                    />
                </div>
                {loading ? (
                    <button type="submit" disabled aria-disabled>
                        Adding quote...
                    </button>
                ) : (
                    <button type="submit">Add quote</button>
                )}

                {(error && <Error errors={error} />) || null}
            </Form>
        </div>
    );
};

export default addQuoteForm;