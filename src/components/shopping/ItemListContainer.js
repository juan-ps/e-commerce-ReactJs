const styles = { fontSize: '20px', margin: '20px'};

const ItemListContainer = ({greeting}) => {
  return (
    <div style={styles}>{greeting}</div>
  )
}
export default ItemListContainer