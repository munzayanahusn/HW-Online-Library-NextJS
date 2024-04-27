import Link from "next/link";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link href={`/BookDetails/${id}`}>
        <div className="flex items-center space-x-4">
          <img
            src={`http://localhost:8000/${image}`}
            alt={title}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800" style={{ textAlign: 'left' }}>
              {title} ({year})
            </h2>
            <p className="text-sm text-gray-600" style={{ textAlign: 'left' }}>{author}</p>
            <p className="text-sm text-gray-600" style={{ textAlign: 'left' }}>
              <span className="font-medium">Publisher: </span>
              {publisher}
            </p>
          </div>
        </div>
    </Link>
  );
}