const NoteCard = ({ note, onEdit, onDelete }) => {
  const { id, title, content, category, updatedAt } = note;

  return (
    <article className="note">
      <span className={`tag tag-${category.toLowerCase()}`}>{category}</span>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{updatedAt}</small>
      <div className="item-actions">
        <button className="btn small" onClick={() => onEdit(id)}>Edit</button>
        <button className="btn small danger" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
};

export default NoteCard;
