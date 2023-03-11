import Image from 'next/image';
import {SpaceShip} from '../domain/space-ship';

export const ShipComponent = ({ship}: {ship: SpaceShip}) => <>
  <div className="ship">
  <div>
    <Image
      src={`/images${ship.image}`}
      height={256}
      width={256}
      alt="Space Ship 1"
    />
    <p>Ship Alpha-1</p>
  </div>
  <ul className="ship-data">
    <li><b>Price</b>:
      <span data-testid="ship-price">{ship.price}</span>
    </li>
    <li><b>Location</b>: {ship.location}</li>
    <li><b>Mileage</b>: {ship.mileage}</li>
    <li><b>Speed</b>: {ship.speed} LY/sec</li>
    <li><b>Built</b>: {ship.constructionYear}</li>
  </ul>
  </div>
</>
