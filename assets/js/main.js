(function(){
  const links = { order: "", lokasi: "", kemitraan: "" };
  const setIf = (id, url) => { if (url) document.getElementById(id).setAttribute("href", url); };
  setIf("order-link", links.order);
  setIf("lokasi-link", links.lokasi);
  setIf("kemitraan-link", links.kemitraan);
})();