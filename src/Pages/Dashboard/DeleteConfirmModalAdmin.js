import React from "react";

const DeleteConfirmModalAdmin = ({ orderDelete, refetch, setOrderDelete }) => {
  const handleDelete = (id) => {
    console.log(id);
    const url = `https://stark-cliffs-55109.herokuapp.com/parts/${id}`;
    fetch(url, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderDelete(null);
        refetch();
        console.log("admin", data);
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box text-center">
          <h3 class="font-bold text-lg">Are you sure?</h3>
          <p>
            <span>You want to Cancel Your Order.</span>
          </p>

          <div class="modal-action">
            <button
              onClick={() => handleDelete(orderDelete._id)}
              className="btn btn-xs btn-error"
            >
              Yes
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs ">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteConfirmModalAdmin;
