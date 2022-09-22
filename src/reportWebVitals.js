const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); //отражает, насколько стабильны визуальные элементы интернет-ресурса. То есть происходит ли сдвиг каких-то элементов на странице после загрузки отдельных блоков — например рекламных баннеров. Пользователь в норме, если этот показатель не выше 0,1.
      getFID(onPerfEntry); //насколько интерактивен сайт. Отражает, сколько пользователю придется ждать первого взаимодействия с контентом. Хорошо, если этот критерий для страниц сайта не превышает 100 миллисекунд.
      getFCP(onPerfEntry);
      getLCP(onPerfEntry); //как быстро загружается основной контент интернет-ресурса
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
