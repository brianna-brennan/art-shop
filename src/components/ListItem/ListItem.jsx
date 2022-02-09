import './ListItem.css';

export default function ListItem({ Item, handleAddToOrder }) {
  return (
    <div className="ListItem">
      <div className="name">{Item.title}</div>
      <div className="buy">
        <span>${Item.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(Item._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}