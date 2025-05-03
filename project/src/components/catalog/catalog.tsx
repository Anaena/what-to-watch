import CardList from '../cards-list/cards-list';
import GenresList from '../genres-list/genres-list';

const Catalog = (): JSX.Element => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenresList />
    <CardList />

    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>
);

export default Catalog;
