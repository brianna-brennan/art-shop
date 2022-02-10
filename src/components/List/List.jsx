import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List({ listItems, handleAddToOrder }) {
  const items = listItems.map(item =>
    <ListItem
      listItem={item}
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