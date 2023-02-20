import "../../public/style/Categories.css";
import { useEffect } from "../lib";
const Categorie = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-cate button");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        onClick(id);
      });
    });
  });
  return `
  <div class="categories">
  <div class="categori__container"  id="project">
  ${categories
    .map(({ id, name }) => {
      return `
    <div class="btn-cate">
        <button data-id="${id}">${name}</button>
  </div>
    `;
    })
    .join("")}
  

</div>
  </div>
   
  `;
};

export default Categorie;
