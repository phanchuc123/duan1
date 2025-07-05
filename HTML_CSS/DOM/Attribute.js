// getAttributr: là phương thức trả về giá trị của thuộc tính nằm trên phần tử HTML, nếu không tìm thấy trả về null
const fistLink = document.querySelector("a");
console.log(fistLink);
if(fistLink!=null){
    const linkHerf = fistLink.getAttribute("href");
    console.log(linkHerf);
}else{
    console.log("Khong tim thay phan tu");
}
// setAttribute: là phương thức dùng để thiết lập giá trị của thuộc tính nằm trên phần tử HTML, nếu không tìm thấy sẽ tạo mới
fistLink.setAttribute("target", "_blank");

const link = document.querySelectorAll("ul a");
for(let i=0;i<link.length;i++){
    link[i].setAttribute("target", "_blank");
}

const colors = document.querySelector("#heading_title");
const linkStyle = colors.getAttribute("style");
console.log(linkStyle);
colors.setAttribute("style","color:blue;");

// hasAttribute: kiểm tra xem một phần tử có thuộc tính(class,style,id,...) được chỉ định không
const item1 = document.querySelector(".list");
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));

// removeAttribute: xóa thuộc tính của phần tử HTML
item2.removeAttribute("style");
console.log(item2.hasAttribute("style"));

for(let i=0;i<link.length;i++){
    link[i].removeAttribute("target");
    console.log(link[i].hasAttribute("target"));
}
