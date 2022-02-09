import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List({ Items, handleAddToOrder }) {
  const items = Items.map(item =>
    <ListItem
      Item={item}
      handleAddToOrder={handleAddToOrder}
      key={item._id}
    />
  );
  return (
    <main className="List">
      {items}
    </main>
  );
}