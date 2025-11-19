function openModal(data) {
  document.getElementById("modalImage").src = data.img;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDesc").textContent = data.desc;
  document.getElementById("modalPrice").textContent = data.price;

  const modal = document.getElementById("productModal");
  modal.style.display = "flex";
}


function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

window.onclick = function (e) {
  if (e.target === document.getElementById("productModal")) {
    closeModal();
  }
};
