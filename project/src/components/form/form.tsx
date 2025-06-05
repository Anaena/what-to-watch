import type {ChangeEvent, FormEvent} from 'react';
import { Fragment, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { STARS_COUNT } from '../../const';
import {ReviewAuth} from '../../types/types';

type FormProps = {
  onSubmit: (formData: Omit<ReviewAuth, 'id'>) => void;
  filmId: number;
};

const Form = ({ onSubmit, filmId }: FormProps) => {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const isValid = rating > 0 && text.length >= 50 && text.length <= 400;

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({ comment: text, rating });
      navigate(`/films/${filmId}`);
    } catch (err) {
      setError('Failed to submit review. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form className="add-review__form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: STARS_COUNT}, (_,i) => (
            <Fragment key={`Star ${STARS_COUNT - i}`}>
              <input
                className="rating__input"
                id={`star-${STARS_COUNT - i}}`}
                type="radio"
                name="rating"
                defaultValue={STARS_COUNT - i}
                checked={STARS_COUNT - i === rating}
                onChange={handleInputChange}
              />
              <label
                className="rating__label"
                htmlFor={`star-${STARS_COUNT - i}}`}
              >
                {`Rating ${STARS_COUNT - i}}`}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={text}
          onChange={handleTextareaChange}
          disabled={isSubmitting}
        >
        </textarea>
        {error && <div className="form-error">{error}</div>}
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isValid || isSubmitting}>Post</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
