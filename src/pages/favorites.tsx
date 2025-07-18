import FavoriteOfferCard from '../components/OfferCard/FavoriteOfferCard';
import { Offer } from '../types/offer';

function FavoritesPage() {
  const offers: Offer[] = [];
  const hasOffers = offers.length > 0;
  const empty = (
    <main className="page__main page__main--favorites page__main--favorites-empty" data-testid="page-favorites">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );

  if(!hasOffers) {
    return empty;
  }

  return(
    <main className="page__main page__main--favorites" data-testid="page-favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((ofr) =>
                  (
                    <FavoriteOfferCard {...ofr} key={ofr.id} />
                  )
                )}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
