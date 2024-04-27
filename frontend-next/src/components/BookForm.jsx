import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createBook, editBook } from "../modules/fetch";

export default function BookForm({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.target);
    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages"))
        );
        router.navigateT(`/books/${bookData.id}`);
        alert("Book updated successfully");
      } catch (error) {
        alert(error.response.data.message || "Something went wrong");
      }
    } else {
      try {
        await createBook(formData);
        event.target.reset();
        router.push(`/Homepage`);
        alert("Book created successfully");
        setSelectedImage("");
      } catch (error) {
        alert(error.response.data.message || "Something went wrong");
      }
    }
    setSubmitting(false);
  }

  useEffect(() => {
    if (bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.image}`);
    }
  }, [bookData]);

  const handleCancel = () => {
    if (bookData) {
      router.push(`/BookDetails/${bookData.id}`);
    } else {
      router.push(`/Homepage`);
    }
  };

  return (
    <div className="w-full py-4 px-24 mx-auto mt-8">
      <h1 className="text-3xl text-slate-900 font-bold mb-4">{bookData ? "Edit Book" : "Create New Book"}</h1>

      <div className="border-2 border-gray-200 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form elements */}
        </form>
      </div>
    </div>
  );
}
