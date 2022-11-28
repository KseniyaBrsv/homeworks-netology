import {ListingItems} from "./ListingItems";

export const Listing = ({items}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItems item={item} key={item.listing_id}/>
      ))}
    </div>
  )
}
