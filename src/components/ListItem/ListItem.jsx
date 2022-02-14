import './ListItem.css';

export default function ListItem({ listItem, handleAddToOrder }) {
  return (
    <div className="ListItem">
      <img src={listItem.image} className="AllArt"/>
      <div className="title">{listItem.title}</div>
      <div className="buy">
        <span>${listItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(listItem._id)}>
          ADD
        </button>
        </div>
      </div>
  )
    }