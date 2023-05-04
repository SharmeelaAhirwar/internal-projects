const Card = ({ key, name, handle, style }) => {
    return (
      <div className="Card" style={{ ...style }} key={key}>
        <span>{name}</span> • <span>{handle}</span>
      </div>
    );
  };
  
  export default Card;