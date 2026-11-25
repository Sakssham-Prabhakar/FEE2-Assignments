export default function Pagination({ skip, limit, total, onPrev, onNext }) {
  if (total <= limit) return null;

  return (
    <div className="pagination">
      <button className="page-btn" disabled={skip === 0} onClick={onPrev}>
        Prev
      </button>
      <span className="page-info">
        Showing {skip + 1} - {Math.min(skip + limit, total)} of {total}
      </span>
      <button
        className="page-btn"
        disabled={skip + limit >= total}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}