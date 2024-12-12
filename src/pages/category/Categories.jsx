import React, { useEffect, useState } from "react";
import { request } from "../../api";
import Category from "../../components/Category";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate();

  const fetchCategories = () => {
    request
      .get("/product-category/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCategory(res.data))
      .catch((error) => console.error("Error fetching category:", error));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (id) => {
    navigate(`/category-create/${id}`);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      request
        .delete(`/product-category/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Category deleted successfully.");
          fetchCategories();
        })
        .catch((error) => console.error("Error deleting category:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-400 p-8">
      <div className="container mx-auto">
        <div className="flex justify-around items-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-700">
            Categories
          </h1>
          <button
            onClick={() => navigate("/category-create")}
            className="bg-slate-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-700 transition"
          >
            Add Category
          </button>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8">
          {category.length > 0 ? (
            <Category
              data={category}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ) : (
            <p className="text-gray-600 text-center">
              No categories available. Click the "Add Category" button to create
              one.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
