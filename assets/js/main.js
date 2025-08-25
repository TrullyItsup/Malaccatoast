(function(){
  const links = { order: "https://esborder.qs.esb.co.id/outlet?brand=175", lokasi: "https://www.google.com/maps/search/malacca+toast/@-6.1261586,106.7751502,13z?entry=ttu", kemitraan: "https://friendchised.typeform.com/to/mXuY2W9s?utm_source=instagram+organic&utm_medium=in+message&utm_campaign=external+presence&typeform-source=bit.ly" };
  const setIf = (id, url) => { if (url) document.getElementById(id).setAttribute("href", url); };
  setIf("order-link", links.order);
  setIf("lokasi-link", links.lokasi);
  setIf("kemitraan-link", links.kemitraan);
})();